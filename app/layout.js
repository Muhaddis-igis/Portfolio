import Preloader from "@/components/Preloader";
import TrueManModeCss from "@/layout/TrueManModeCss";
import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";

export const metadata = {
  title: "Muhammad Muhaddis | Web Developer & Marketing Strategist",
  description:
    "Muhammad Muhaddis — Freelance Web Developer, Marketing Strategist, and GIS Student based in Islamabad, Pakistan. Building modern, responsive, and scalable web solutions.",
  keywords:
    "Muhammad Muhaddis, Web Developer, Freelance Developer, Next.js, React, Islamabad, Pakistan, Marketing Strategist, GIS Student, Full Stack Developer",
  authors: [{ name: "Muhammad Muhaddis" }],
  creator: "Muhammad Muhaddis",
  openGraph: {
    title: "Muhammad Muhaddis | Web Developer & Marketing Strategist",
    description:
      "Freelance Web Developer building modern, responsive, and scalable web solutions. Based in Islamabad, Pakistan.",
    url: "https://muhammadmuhaddis.com",
    siteName: "Muhammad Muhaddis Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muhaddis | Web Developer & Marketing Strategist",
    description:
      "Freelance Web Developer building modern, responsive, and scalable web solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://muhammadmuhaddis.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <State>
        <TrueManModeCss />
        <body>
          <div className="trm-app-frame">
            <Preloader />
            <div id="trm-dynamic-content" className="trm-swup-animation">
              <div
                id="trm-scroll-container"
                className="trm-scroll-container"
                style={{ opacity: 0 }}
              >
                {children}
              </div>
            </div>
          </div>
        </body>
      </State>
    </html>
  );
}
