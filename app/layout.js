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
  title: "Muhammad Muhaddis | Frontend Web Developer Portfolio",
  description:
    "Muhammad Muhaddis is a frontend web developer specializing in modern, responsive, and scalable web applications using React and Next.js.",
  keywords:
    "Muhammad Muhaddis, Frontend Developer, Web Developer, Freelance Developer, Next.js, React, HTML, CSS, JavaScript, Islamabad, Pakistan, Muhammad Muhaddis Portfolio",
  authors: [{ name: "Muhammad Muhaddis" }],
  creator: "Muhammad Muhaddis",
  openGraph: {
    title: "Muhammad Muhaddis | Frontend Web Developer Portfolio",
    description:
      "Muhammad Muhaddis is a frontend web developer specializing in React and Next.js. Based in Islamabad, Pakistan.",
    url: "https://muhammadmuhaddis.com",
    siteName: "Muhammad Muhaddis Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Muhaddis | Frontend Web Developer Portfolio",
    description:
      "Frontend web developer specializing in React and Next.js. Building modern, responsive web applications.",
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
        <link rel="canonical" href="https://muhammadmuhaddis.com" />
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
