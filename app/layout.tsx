import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Header/Navbar"
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ThemeProvider from "@/theme/theme-provider";
export const metadata: Metadata = {
  title: "Bloom",
  description: "Online learning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="hide-scrollbar" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
