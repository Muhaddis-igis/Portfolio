import { NextResponse } from "next/server";

// In-memory cache
let cachedImage = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Curated list of high-quality tech/minimal Unsplash photo IDs as fallbacks
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop",
];

export async function GET() {
  const now = Date.now();

  // Return cached image if still valid
  if (cachedImage && now - cacheTimestamp < CACHE_DURATION) {
    return NextResponse.json(
      { url: cachedImage },
      {
        headers: {
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
        },
      }
    );
  }

  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  // If no API key configured, use a curated fallback
  if (!accessKey) {
    const fallback =
      FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
    cachedImage = fallback;
    cacheTimestamp = now;
    return NextResponse.json(
      { url: fallback },
      {
        headers: {
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
        },
      }
    );
  }

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=technology+minimal+dark&orientation=landscape&content_filter=high`,
      {
        headers: { Authorization: `Client-ID ${accessKey}` },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) throw new Error("Unsplash API error");

    const data = await res.json();
    // Use the high quality regular size (1080px wide) for good balance
    const imageUrl = data.urls?.full
      ? `${data.urls.full}&w=1920&q=80&auto=format&fit=crop`
      : data.urls?.regular;

    cachedImage = imageUrl;
    cacheTimestamp = now;

    return NextResponse.json(
      { url: imageUrl },
      {
        headers: {
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
        },
      }
    );
  } catch {
    // Fallback on error
    const fallback =
      FALLBACK_IMAGES[Math.floor(Math.random() * FALLBACK_IMAGES.length)];
    cachedImage = fallback;
    cacheTimestamp = now;
    return NextResponse.json(
      { url: fallback },
      {
        headers: {
          "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
        },
      }
    );
  }
}
