import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionDemoProps {
  accordionData: { title: string; content: string }[];
  chevronDirection: "left" | "right";
  accoTriggerClass?: string;
  accoItemClass?: string;
  accoContentClass?: string;
}

function AccordionDemo({
  accordionData,
  chevronDirection,
  accoTriggerClass = "",
  accoItemClass = "",
  accoContentClass = "",
}: AccordionDemoProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((data, i) => (
        <AccordionItem
          key={data.title}
          className={accoItemClass}
          value={String(i)}
        >
          <AccordionTrigger
            className={accoTriggerClass}
            chevronDirection={chevronDirection}
          >
            {data.title}
          </AccordionTrigger>
          <AccordionContent className={accoContentClass}>
            {data.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
export default AccordionDemo;
