import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navigation from "@/navigation";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Project Anima",
    default: "Project Anima",
  },
  creator: "Mimizaya",
  description: "All things Nexus Anima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
