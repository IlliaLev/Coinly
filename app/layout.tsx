"use client";

import "./globals.css";

import {useEffect} from "react";

import { useThemeStore } from "@/lib/useThemeStore";

//! Use next-themes

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {theme} = useThemeStore();

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
