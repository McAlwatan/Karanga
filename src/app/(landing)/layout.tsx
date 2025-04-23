import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import FooterPage from "../footer/page";
import LandingPageNavBar from "./_components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col container relative">
        <LandingPageNavBar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default layout;
