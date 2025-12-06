import type { ColumnDef } from "@tanstack/react-table";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { formatInitials } from "@workspace/ui/lib/formats/format-initials";
import { cn } from "@workspace/ui/lib/utils";
import { MoreVertical } from "lucide-react";
import type { User } from "@/core/schemas/user";
import { formatRole } from "@/lib/formats/format-role";
import { DeleteMoreAction } from "./actions/delete-more-action";
import { InfoMoreAction } from "./actions/info-more-action";

export const columns: ColumnDef<User>[] = [
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
				<div className="flex items-center gap-2">
					<Avatar className="size-10">
						<AvatarImage
							src={row.original.avatar_url}
							alt={`Foto de perfil do ${row.original.name}`}
						/>
						<AvatarFallback>
							{formatInitials(row.original.name)}
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<span>{name}</span>
						<span className="text-xs max-w-40 text-muted-foreground  overflow-hidden text-ellipsis whitespace-nowrap">
							{`@${row.original.username}`}
						</span>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "email",
		header: () => <div className="font-bold">Email</div>,
		cell: ({ row }) => {
			return <div>{row.original.email}</div>;
		},
	},
	{
		accessorKey: "role",
		header: () => <div className="font-bold">Permissão</div>,
		cell: ({ row }) => {
			const role = row.original.role;

			const roleColors: Record<string, string> = {
				admin: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20",
				editor: "bg-blue-500/15 text-blue-700 border-blue-500/20",
				reader: "bg-sky-500/15 text-sky-700 border-sky-500/20",
			};

			return (
				<Badge
					className={cn(
						"rounded-sm border border-transparent font-medium",
						roleColors[role],
					)}
				>
					{formatRole(role)}
				</Badge>
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

						<DeleteMoreAction id={`${row.original.id}`} />
						<InfoMoreAction data={row.original} />
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
