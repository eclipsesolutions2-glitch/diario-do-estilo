import type { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import type { Category } from "@/core/schemas/category";
import { formatDate } from "@workspace/ui/lib/formats/format-date";
import { DeleteMoreAction } from "./actions/delete-more-action";
import { InfoMoreAction } from "./actions/info-more-action";
import { UpdateMoreAction } from "./actions/update-more-action";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center font-bold">Id</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {String(row.original.id).padStart(4, "0")}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="font-bold">Nome</div>,
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return (
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="text-xs max-w-40 text-muted-foreground  overflow-hidden text-ellipsis whitespace-nowrap">
            {row.original.description}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "slug",
    header: () => <div className="font-bold">Slug</div>,
    cell: ({ row }) => {
      return (
        <div>
          <Badge className="rounded-md border bg-primary/30 text-primary">
            {row.original.slug}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "created_by",
    header: () => <div className="font-bold">Autor</div>,
    cell: ({ row }) => {
      if (!row.original.created_by) {
        return "---";
      }
      return (
        <div className="flex flex-col">
          <span>{row.original.created_by.name}</span>
          <span className="text-xs text-muted-foreground ">
            {row.original.created_by.email}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="font-bold text-center">Criado em</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center text-muted-foreground ">
          {formatDate(row.original.created_at)}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: undefined,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <UpdateMoreAction data={row.original} />
            <DeleteMoreAction slug={row.original.slug} />
            <InfoMoreAction data={row.original} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
