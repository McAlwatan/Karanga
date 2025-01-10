import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PricingCards from "./pricing/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 w-full">
        <div className="flex items-center justify-center p-3">
          <GlassCard className="p-3 w-auto">
            <div className="flex justify-between w-[250px]">
              <Button className="bg-neutral-500">
                <Link href={"/Home"}>Home</Link>
              </Button>
              <Button className="bg-neutral-500">
                <Link href={"/Pricing"}>Pricing</Link>
              </Button>
              <Button className="bg-neutral-500">
                <Link href={"/Contact"}>Sim</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </nav>

      <main className="flex-1 justify-center w-full bg-amber-100 p-4 mt-4">
        <PricingCards className="w-full">
          Hello
        </PricingCards>
      </main>
    </div>
  );
}