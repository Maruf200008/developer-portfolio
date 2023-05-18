import { Inter } from "next/font/google";
import { Navbar } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profile of Developer",
  description:
    "Web development, web design, javascript, Typescript react, next node ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
