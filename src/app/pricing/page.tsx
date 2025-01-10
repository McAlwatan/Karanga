import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { pricingCards } from '@/lib/constants';
import { cn } from '@/lib/utils';
import * as React from 'react';

export interface  PricingCardsProps{
    className?: string
    children: React.ReactNode
}
export default function PricingCards(props: PricingCardsProps) {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row gap-3 w-full max-w-6xl mx-auto'>
      {pricingCards.map((card) => (
        <Card key={card.title} className='w-[80%] p-5'>
          <CardHeader className='bg-amber-200 rounded-sm mb-2'>
            <CardTitle className='text-4xl'>{card.title}</CardTitle>
            <CardDescription className='text-sm '>
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={cn('text-2xl text-green')}>
            {card.price}/-Tsh
          </CardContent>
          <CardFooter>
            <Button>
              Agiza
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
