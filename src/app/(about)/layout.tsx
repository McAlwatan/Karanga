import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="max-h-screen flex flex-col">
        {children}
      </main>
    </ThemeProvider>
  );
};

export default layout;
