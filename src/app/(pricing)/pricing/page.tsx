"use client";

import CounterInput from "@/components/global/counter-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { pricingCards } from "@/lib/constants";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";

export interface PricingCardsProps {
  className?: string;
}
export default function Pricing({}: PricingCardsProps) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleSubmit = () => {
    console.log("Submitted!");
    toast({
      title: "Order yako imewasilishwa",
      description: `Umetoa order ya Karanga ${quantity}.`,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-3 w-full max-w-6xl mx-auto">
      {pricingCards.map((card) => (
        <Card key={card.title} className="w-[80%] p-5">
          <CardHeader className="text-white bg-amber-950 rounded-sm mb-2">
            <CardTitle className="text-4xl">{card.title}</CardTitle>
            <CardDescription className="text-sm ">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("text-2xl")}>
            {card.price}/-Tsh
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger>
                <Button className="bg-yellow-700">Agiza</Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center justify-center text-center">
                <DialogHeader>
                  <DialogTitle className="mb-4 items-center justify-center">
                    Weka kiasi
                  </DialogTitle>
                  <DialogDescription className="nb-4">
                    <CounterInput onChange={setQuantity} />
                    <p className="mt-4">
                      {" "}
                      <Button
                        onClick={handleSubmit}
                        className="bg-green-600 hover:bg-dark-700"
                      >
                        Wasilisha kiasi
                      </Button>
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
