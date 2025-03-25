import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rahul Sutradhar",
  description: "Website Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#00042B]`}>
        {children}
      </body>
    </html>
  );
}
