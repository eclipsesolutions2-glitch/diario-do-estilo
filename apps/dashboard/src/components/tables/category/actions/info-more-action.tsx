import { Info } from "lucide-react";
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

interface InfoMoreActionProps {
  data: Category;
}

export function InfoMoreAction({ data }: InfoMoreActionProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Info className="h-4 w-4" />
          <span>Detalhes</span>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes do gasto</DialogTitle>
          <DialogDescription>
            Veja abaixo as informações registradas para este gasto.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">ID</span>
            <span>{data.id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Nome</span>
            <span>{data.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-neutral-700">Data</span>
            <span>{new Date(data.created_at).toLocaleDateString("pt-PT")}</span>
          </div>
          {data.description && (
            <div className="flex flex-col gap-1">
              <span className="font-medium text-neutral-700">Descrição</span>
              <span className="text-neutral-600">{data.description}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
