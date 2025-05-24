import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: "--font-montserrat-sans",
});

export const metadata = {
  title: "ksunnwy",
  description: "",
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
