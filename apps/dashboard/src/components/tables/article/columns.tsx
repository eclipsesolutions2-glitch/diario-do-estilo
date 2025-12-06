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
import { DeleteMoreAction } from "./actions/delete-more-action";
import { InfoMoreAction } from "./actions/info-more-action";
import { UpdateMoreAction } from "./actions/update-more-action";
import Image from "next/image";
import { Article } from "@/core/schemas/article";

export const columns: ColumnDef<Article>[] = [
  // ID
  {
    accessorKey: "id",
    header: () => <div className="text-center font-bold">ID</div>,
    cell: ({ row }) => (
      <div className="text-center">
        {String(row.original.id).padStart(4, "0")}
      </div>
    ),
  },

  // COVER IMAGE
  {
    accessorKey: "coverImage",
    header: () => <div className="font-bold text-center">Capa</div>,
    cell: ({ row }) => {
      const image = row.original.cover_image
        ? `${row.original.cover_image}`
        : "/images/placeholder.svg";
      return (
        <div className="flex items-center justify-center">
          <div className="flex justify-center relative h-10 w-16 rounded border overflow-hidden">
            <Image src={image} alt="cover" fill className="object-cover " />
          </div>
        </div>
      );
    },
  },
  // TITLE + EXCERPT
  {
    accessorKey: "title",
    header: () => <div className="font-bold">Título</div>,
    cell: ({ row }) => (
      <div className="flex flex-col gap-0.5">
        <span className="font-medium text-xs max-w-40 text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap">
          {row.original.title}
        </span>

        {/* Excerpt clamped */}
        <span className="text-xs text-muted-foreground line-clamp-1 max-w-56">
          {row.original.excerpt || row.original.content}
        </span>
      </div>
    ),
  },

  // SLUG
  {
    accessorKey: "slug",
    header: () => <div className="font-bold">Slug</div>,
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className="rounded-md text-xs max-w-20 text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {row.original.slug}
      </Badge>
    ),
  },

  // AUTHOR
  {
    accessorKey: "author",
    header: () => <div className="font-bold">Autor</div>,
    cell: ({ row }) => {
      if (!row.original.author) {
        return "---";
      }

      return (
        <div className="flex flex-col leading-tight">
          <span className="font-medium">{row.original.author.name}</span>
        </div>
      );
    },
  },

  // PUBLISHER
  {
    accessorKey: "published_by",
    header: () => <div className="font-bold">Editor</div>,
    cell: ({ row }) => {
      if (!row.original.published_by) {
        return "---";
      }
      return (
        <div className="flex flex-col leading-tight">
          <span className="font-medium">{row.original.published_by.name}</span>
          {/* <span className="text-xs text-muted-foreground">
                    {row.original.publisher.email}
                </span> */}
        </div>
      );
    },
  },

  // STATUS: is_published + is_featured
  {
    accessorKey: "is_published",
    header: () => <div className="font-bold text-center">Status</div>,
    cell: ({ row }) => (
      <div className="flex flex-col items-center gap-1">
        <Badge
          className={
            row.original.is_published
              ? "bg-green-500/20 text-green-700"
              : "bg-yellow-500/20 text-yellow-700"
          }
        >
          {row.original.is_published ? "Publicado" : "Rascunho"}
        </Badge>

        {row.original.is_featured && (
          <Badge className="bg-yellow-500/20 text-yellow-800">Destaque</Badge>
        )}
      </div>
    ),
  },

  /* // GALLERY IMAGES COUNT
    {
        accessorKey: "images",
        header: () => <div className="font-bold text-center">Galeria</div>,
        cell: ({ row }) => (
            <div className="text-center text-sm text-muted-foreground">
                {row.original.}0 imagens
            </div>
        ),
    }, */

  /* // CREATED AT
    {
        accessorKey: "created_at",
        header: () => <div className="font-bold text-center">Criado</div>,
        cell: ({ row }) => (
            <div className="text-center text-muted-foreground">
                {formatDate(row.original.created_at)}
            </div>
        ),
    }, */

  /*  // UPDATED AT
    {
        accessorKey: "updated_at",
        header: () => <div className="font-bold text-center">Atualizado</div>,
        cell: ({ row }) => (
            <div className="text-center text-muted-foreground">
                {formatDate(row.original.updated_at)}
            </div>
        ),
    }, */

  // ACTIONS
  {
    id: "actions",
    header: undefined,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* <CategoryMoreAction slug={row.original.slug} /> */}
          <UpdateMoreAction data={row.original} />
          <DeleteMoreAction slug={row.original.slug} />
          <InfoMoreAction data={row.original} />
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
