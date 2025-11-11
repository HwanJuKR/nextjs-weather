import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미니 날씨 위젯",
  description: "실시간 날씨 정보를 제공하는 미니 위젯",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
