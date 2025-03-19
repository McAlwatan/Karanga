import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CounterInput from "@/components/global/counter-input"; // Adjust path based on where you save it

export default function OrderDialog() {
  const [quantity, setQuantity] = useState(1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Order Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Quantity</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <CounterInput onChange={setQuantity} />
          <Button>Confirm Order ({quantity} items)</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
