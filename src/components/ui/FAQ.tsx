// import { Check, PhoneCall } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge variant="outline">FAQ</Badge>
          <div className="flex gap-2 flex-col">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              This is the start of something new
            </h4>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Managing and building a small business SaaS is already challenging. Avoid unnecessary complications by moving away from outdated systems. We are here to streamline the process, making it easier and faster than ever before.
            </p>
          </div>
          <div>
            <Button className="gap-4" variant="outline">
              Any questions? Reach out <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Array.from({ length: 8 }).map((_, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  This is the start of something new
                </AccordionTrigger>
                <AccordionContent>
                  Managing and building a small business SaaS is already challenging. Avoid unnecessary complications by moving away from outdated systems. We are here to streamline the process, making it easier and faster than ever before.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);