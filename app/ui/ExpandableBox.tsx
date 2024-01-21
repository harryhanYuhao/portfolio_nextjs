"use client";
import { FiLink } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExpandableBox = ({
  title,
  subtitle = "",
  link = "",
  time = "",
  description = "",
  className = "",
}: {
  title: string;
  subtitle?: string;
  link?: string;
  time?: string;
  description?: string;
  img?: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col w-[50%] my-2 h-auto ${className}`}>
      <Accordion type="single" collapsible className="w-full relative">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex justify-between w-full">
              <div className="text-start w-[80%]">
                {" "}
                <span className="font-semibold">{title}</span>:{" "}
                <span className="text-sm">{" " + subtitle}</span>
              </div>
              <div>{time}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
        { link && <a href={link} target="_blank" className="absolute -left-10 top-3"><FiLink/></a> }
      </Accordion>
    </div>
  );
};

export default ExpandableBox;
