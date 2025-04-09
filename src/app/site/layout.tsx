import React from "react";
import Navbar from "../navbar/page";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import FooterPage from "../footer/page";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="max-h-screen flex flex-col">
        <Link href="/site" />
        <Navbar />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default layout;
