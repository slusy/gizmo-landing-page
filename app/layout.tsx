import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/navbar";
import InnerPageLayout from "./components/misc/inner-page-layout";

const primaryFont = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gizmo",
  description: "Landing page for Gizmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont?.className} bg-primary-bg`}>
        <InnerPageLayout>
          <Navbar />
          {children}
        </InnerPageLayout>
      </body>
    </html>
  );
}
