import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf_viewer.min.css"
/>

import ThemeProvider from "@/theme/theme-provider";
import AuthProvider from "@/app/context/AuthProvider";
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
