"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@workspace/ui/components/dialog";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";
import { Edit } from "lucide-react";
import { useState } from "react";
import { UpdateArticleForm } from "@/components/forms/article/update/update-article-form";
import type { Article } from "@/core/schemas/article";

interface UpdateMoreActionProps {
	data: Article;
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
			<DialogContent className="md:min-w-2xl lg:min-w-3xl xl:min-w-4xl">
				<DialogHeader>
					<DialogTitle>Atualizar gasto</DialogTitle>
					<DialogDescription>
						Edite as informações do gasto e clique em <b>Guardar</b>{" "}
						para salvar as alterações.
					</DialogDescription>
				</DialogHeader>

				<UpdateArticleForm
					defaultValues={data}
					onFinishSumit={() => setOpen(false)}
				/>
			</DialogContent>
		</Dialog>
	);
}
