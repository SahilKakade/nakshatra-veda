"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../components/ui/dialog";

import LeadForm from "./LeadForm";

interface FormModalProps {
  open: boolean;
  setOpen: (
    open: boolean
  ) => void;
}

export default function FormModal({
  open,
  setOpen,
}: FormModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent
        className="
          !max-w-[1100px]
          w-[95vw]
          lg:w-[75vw]
          bg-transparent
          border-none
          shadow-none
          p-0
          overflow-visible
        "
      >

        <DialogTitle className="sr-only">
          Inquiry Form
        </DialogTitle>

        <LeadForm variant="popup" />

      </DialogContent>
    </Dialog>
  );
}