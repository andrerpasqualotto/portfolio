import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function DesignSystem() {
  return (
    <>
      <div>Buttons</div>
      <div className="flex gap-4">
          <Button>Button Default</Button>
          <Button variant='noShadow'>Button variant noShadow</Button>
          <Button variant='neutral'>Button variant neutral</Button>
          <Button variant='reverse'>Button variant reverse</Button>
      </div>

      <div>Accordion</div>
      <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
        <AccordionItem className="lg:w-[500px] max-w-full" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div>
      <AlertDialog>
  <AlertDialogTrigger asChild><Button>Open</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </div>
    </>
  );
}
