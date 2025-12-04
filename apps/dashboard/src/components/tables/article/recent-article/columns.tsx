import type { ColumnDef } from "@tanstack/react-table";
import { RecentArticle } from "@/core/schemas/overview";
import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

export const columns: ColumnDef<RecentArticle>[] = [
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
    {
        accessorKey: "title",
        header: () => <div className="font-bold">Titulo</div>,
        cell: ({ row }) => {
            const image = row.original.cover_url ? `${row.original.cover_url}` : "/images/placeholder.svg";
            return (
                <div className="flex items-center gap-2">
                    <div className="flex justify-center relative h-10 w-16 rounded border overflow-hidden">
                        <Image
                            src={image}
                            alt="cover"
                            fill
                            className="object-cover "
                        />
                    </div>
                    <div className="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap">
                        <span>{row.original.title}</span>
                        <span className="text-xs text-muted-foreground block">{row.original.slug}</span>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "author",
        header: () => <div className="font-bold">Autor</div>,
        cell: ({ row }) => (
            <div className="max-w-48 overflow-hidden text-ellipsis whitespace-nowrap">
                <span>{row.original.author}</span>
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: () => <div className="font-bold text-center">Status</div>,
        cell: ({ row }) => {
            const status_color = row.original.status_color;
            return (
                <div className="text-center">
                    <Badge
                        className={cn(`bg-${status_color}-500/20 text-${status_color}-700`)}
                    >{row.original.status}</Badge>
                </div>
            );
        }
    },
];