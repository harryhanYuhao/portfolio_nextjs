"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Clipboard, Check } from "@/app/ui/icons";

// NOTE: Worth publishing
const MarkdownCodeBlock = ({ children }: any) => {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    navigator.clipboard.writeText(children.props.children);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="flex justify-between rounded-lg bg-gray-200 my-2 py-2 px-2">
      <pre className="overflow-x-auto my-auto w-auto pl-2">{children}</pre>
      <Button className="p-3" variant="outline" onClick={() => copyToClipboard()}>
        {copied ? <Check className="size-5" color="green" /> : <Clipboard className="size-5" />}
      </Button>
    </div>
  );
};

export default MarkdownCodeBlock;
