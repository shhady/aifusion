import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIFusion",
  description: "Empowering businesses with cutting-edge web development, tailored digital solutions, and seamless integration of AI technologies to drive growth and innovation.",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    ],
    apple: "/apple-touch-icon.png",
    maskIcon: { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
