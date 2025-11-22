"use client";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
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
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { article } from "@/core/actions/article";
import { category } from "@/core/actions/category";

interface DeleteMoreActionProps {
	slug: string;
}

export function DeleteMoreAction({ slug }: DeleteMoreActionProps) {
	const handleDelete = async () => {
		const result = await article.delete(slug);

		if (!result.success) {
			toast.error(result.error);
			return;
		}
		toast.success(result.message);
	};
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<DropdownMenuItem onSelect={(e) => e.preventDefault()}>
					<Trash2 className="h-4 w-4" />
					<span>Eliminar</span>
				</DropdownMenuItem>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Tem certeza que deseja eliminar este artigo?
					</AlertDialogTitle>

					<AlertDialogDescription>
						Esta ação não pode ser desfeita. O artigo será removido
						permanentemente e todos os dados associados serão
						eliminados.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={handleDelete}>
						Eliminar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
