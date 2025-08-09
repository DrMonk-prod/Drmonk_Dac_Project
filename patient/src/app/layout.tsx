import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import NavBar from "@/components/Home/NavBar";
import { ThemeProvider } from "next-themes";
import { StoreProvider } from "../store/StoreProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Dr.monk",
  description: "Doctor consultation made easy",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const chillax = localFont({
  src: [
    {
      path: "font/Chillax/Chillax-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "font/Chillax/Chillax-Medium.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "font/Chillax/Chillax-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "font/Chillax/Chillax-Semibold.woff",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-right" />
          <StoreProvider>
            <NavBar />
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
