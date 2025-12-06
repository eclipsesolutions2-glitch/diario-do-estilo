"use client";
import { Edit } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";
import type { Category } from "@/core/schemas/category";
import { UpdateCategoryForm } from "@/components/forms/category/update-category-form";

interface UpdateMoreActionProps {
  data: Category;
}

export function UpdateMoreAction({ data }: UpdateMoreActionProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Edit className="h-4 w-4" />
          <span>Actualizar</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar gasto</DialogTitle>
          <DialogDescription>
            Edite as informações do gasto e clique em <b>Guardar</b> para salvar
            as alterações.
          </DialogDescription>
        </DialogHeader>

        <UpdateCategoryForm
          defaultValues={data}
          onFinishSumit={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
