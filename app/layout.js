import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AIFusion",
  description: "Empowering businesses with cutting-edge web development, tailored digital solutions, and seamless integration of AI technologies to drive growth and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  );
}
