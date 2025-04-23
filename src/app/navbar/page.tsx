"use client";

import GlassCard from "@/components/global/glass-card";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import * as React from "react";

export interface NavbarProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({ className }: NavbarProps) {
  const { theme, setTheme } = useTheme(); // Theme switch logic

  return (
    <nav className="md:sticky top-0 z-50 w-full bg-background">
      <div className="flex items-center justify-between p-3">
        {/* Mobile View */}
        <div className="flex items-center md:hidden w-full justify-between">
          <p className="text-xl font-semibold">ClickWork.</p>
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="fixed top-0 left-0 w-64 h-screen p-4 shadow-lg md:w-80">
              <div className="flex flex-col gap-4">
                <Button variant="outline">
                  <Link href="/site">Home</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/pricing">Preview</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact">Contact</Link>
                </Button>

                {/* Mode Toggler */}
                <Button>
                  <Link href={"/sign-in"}>
                    SignIn
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" suppressHydrationWarning/>
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                  <span className="ml-2">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* PC View */}
        <div className="hidden md:flex items-center justify-between w-full">
          <p className="text-xl font-semibold cursor-pointer">ClickWork.</p>

          <GlassCard className="p-3 flex items-center gap-6">
            <Button variant="secondary">
              <Link href="/site">Home</Link>
            </Button>
            <Button variant="secondary">
              <Link href="/pricing">Preview</Link>
            </Button>
            <Button variant="secondary">
              <Link href="/contact">Contact</Link>
            </Button>
          </GlassCard>

          {/* Right Side: Mode Toggle */}
          <div className="flex gap-2">
            <Button variant="default">
              <Link href={"/sign-in"}>
                SignIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" suppressHydrationWarning={true}/>
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}