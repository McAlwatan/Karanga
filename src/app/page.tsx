import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PricingCards from "./pricing/page";

export default function Home() {
 

  return (
      <>
        <div className="flex items-center justify-center p-3">
            <GlassCard className="p-3 w-auto mt-4">
              <div className="flex justify-between w-[250px]">
                  <Button className="bg-neutral-500">
                    <Link href={"/Home"}>
                      Home
                    </Link>
                  </Button>
                  <Button className="bg-neutral-500">
                    <Link href={"/Pricing"}>
                      Pricing
                    </Link>
                  </Button>
                  <Button className="bg-neutral-500">
                    <Link href={"/Contact"}>
                      Contact
                    </Link>
                  </Button>
              </div>
            </GlassCard>
        </div>
        <div className="flex flex-col h-[500px] p-5 w-full justify-center items-center bg-green-400">         
          <PricingCards
            className="h-[400px] w-[350px]"
          >
            Hello
          </PricingCards>
        </div>
      </>
      
    
  );
}
