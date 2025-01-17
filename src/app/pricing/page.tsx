"use client";

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
import { pricingCards } from "@/lib/constants";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface PricingCardsProps {
  className?: string;
}
export default function PricingCards({}: PricingCardsProps) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-3 w-full max-w-6xl mx-auto">
      {pricingCards.map((card) => (
        <Card key={card.title} className="w-[80%] p-5">
          <CardHeader className="text-white bg-slate-900 rounded-sm mb-2">
            <CardTitle className="text-4xl">{card.title}</CardTitle>
            <CardDescription className="text-sm ">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("text-2xl text-green")}>
            {card.price}/-Tsh
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger>
                <Button>Agiza</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Weka kiasi</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
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
