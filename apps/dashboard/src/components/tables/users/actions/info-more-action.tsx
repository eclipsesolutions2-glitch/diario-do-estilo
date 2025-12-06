import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@workspace/ui/components/dialog";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";
import { Info } from "lucide-react";
import type { User } from "@/core/schemas/user";
import { formatRole } from "@/lib/formats/format-role";

interface InfoMoreActionProps {
	data: User;
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
						<span className="font-medium text-neutral-700">
							Nome
						</span>
						<span>
							<span>{data.name}</span>(
							<span className="text-muted-foreground">
								@{data.username}
							</span>
							)
						</span>
					</div>
					<div className="flex justify-between border-b pb-2">
						<span className="font-medium text-neutral-700">
							Email
						</span>
						<span>{data.email}</span>
					</div>
					<div className="flex justify-between border-b pb-2">
						<span className="font-medium text-neutral-700">
							Permissão
						</span>
						<span>{formatRole(data.role)}</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
