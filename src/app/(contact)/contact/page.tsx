import * as React from "react";

export interface ContactProps {
  className: string;
}

export default function Contact({}: ContactProps) {
  return (
    <div className="grid justify-items-center align-center">
      Contact Page
    </div>
  );
}
