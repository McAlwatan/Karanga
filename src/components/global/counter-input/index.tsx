import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CounterInput({
  onChange,
}: {
  onChange?: (value: number) => void;
}) {
  const [count, setCount] = useState(1); //default hapa ni moja (1)

  const increment = () => {
    setCount((prev) => {
      const newValue = prev + 1;
      onChange?.(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      if (prev > 1) {
        const newValue = prev - 1;
        onChange?.(newValue);
        return newValue;
      }
      return prev;
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={decrement}>
        -
      </Button>
      <Input
        type="number"
        value={count}
        onChange={(e) => {
          const newValue = Math.max(1, Number(e.target.value));
          setCount(newValue);
          onChange?.(newValue);
        }}
        className="w-16 text-center"
      />
      <Button variant="outline" size="sm" onClick={increment}>
        +
      </Button>
    </div>
  );
}
