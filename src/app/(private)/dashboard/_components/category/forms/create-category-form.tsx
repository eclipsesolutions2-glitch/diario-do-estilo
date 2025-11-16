"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { category } from "@/core/actions/category";
import {
	type CreateCategorySchemaValues,
	createCategorySchema,
} from "@/core/schemas/category/create-category.schema";

export function CreateCategoryForm() {
	const form = useForm<CreateCategorySchemaValues>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(createCategorySchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	const onSubmit = async (data: CreateCategorySchemaValues) => {
		const result = await category.create(data);
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset();
		// setClose();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Designação</FormLabel>
							<FormControl>
								<Input
									placeholder="Nome da categoria"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descrição</FormLabel>
							<FormControl>
								<Textarea
									className="min-h-32 resize-none"
									placeholder="Descreva brevemente a categoria..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancelar</Button>
					</DialogClose>
					<Button type="submit" className="text-base font-medium">
						Criar Categoria
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
}
