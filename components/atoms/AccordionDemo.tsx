import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionDemo({
  accordionData,
  chevronDirection,
  accoTriggerClass = "",
  accoItemClass = "",
  accoContentClass = "",
}: {
  accordionData: { title: string; content: string }[];
  chevronDirection: "left" | "right";
  accoTriggerClass?: string;
  accoItemClass?: string;
  accoContentClass?: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionData.map((data, i) => (
        <AccordionItem className={accoItemClass} value={String(i)}>
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
AccordionDemo.defaultProps = {
  accoTriggerClass: "",
  accoItemClass: "",
  accoContentClass: "",
};
export default AccordionDemo;
