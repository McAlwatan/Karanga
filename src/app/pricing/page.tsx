import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import * as React from 'react';

export interface  PricingCardsProps{
    className?: string
    children: React.ReactNode
}

export default function PricingCards (props: PricingCardsProps) {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
            Content
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
}
