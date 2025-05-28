import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat-sans",
});

export const metadata = {
  metadataBase: new URL("https://ksunnwy.netlify.app/"),
  title: {
    default: "ksunnwy",
    template: "%s | ksunnwy",
  },
  description: "ksunnwy web-developer portfolio",
  keywords: ["ksunnwy", "web-developer", "frontend", "portfolio",  "react", "nextjs", "портфолио", "веб-разработчик"],
  authors: [{ name: "ksunnwy", url: "https://ksunnwy.netlify.app/" }],
  openGraph: {
    title: "ksunnwy",
    description: "ksunnwy web-developer portfolio",
    url: "https://ksunnwy.netlify.app/",
    siteName: "ksunnwy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ksunnwy",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ksunnwy",
    description: "ksunnwy web-developer portfolio",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://ksunnwy.netlify.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
