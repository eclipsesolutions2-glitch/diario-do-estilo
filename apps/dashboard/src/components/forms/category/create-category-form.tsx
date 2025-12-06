"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import { DialogClose, DialogFooter } from "@workspace/ui/components/dialog";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type CreateCategorySchemaValues,
	createCategorySchema,
} from "@/core/schemas/category/create-category.schema";

interface CreateCategoryFormProps {
	onFinishSubmit?: () => void;
}

export function CreateCategoryForm({
	onFinishSubmit,
}: CreateCategoryFormProps) {
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
		const result = await action.api.category.create(data);
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset();
		if (onFinishSubmit) {
			onFinishSubmit();
		}
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
