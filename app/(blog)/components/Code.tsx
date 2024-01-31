"use client";
import { Button } from "@/components/ui/button";

const Code = ({ children }: any) => {

  return (
    <div className="rounded-lg bg-gray-200 my-1 py-2 px-2 relative">
      {children}
      <Button
        className="absolute -right-24 top-0"
        variant="outline"
        onClick={() => {
          navigator.clipboard.writeText(children);
        }}
      >
        Copy
      </Button>
    </div>
  );
};

export default Code;
