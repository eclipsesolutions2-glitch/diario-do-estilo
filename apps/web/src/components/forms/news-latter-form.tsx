"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
} from "@workspace/ui/components/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { action } from "@/core/actions";
import {
	type SubscribeNewsLatterSchemaValues,
	subscribeNewsLatterSchema,
} from "@/core/schemas/newslatter.schama";

export function NewsLatterForm() {
	const form = useForm<SubscribeNewsLatterSchemaValues>({
		mode: "all",
		criteriaMode: "all",
		resolver: zodResolver(subscribeNewsLatterSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	const onSubmit = async (formData: SubscribeNewsLatterSchemaValues) => {
		const result = await action.api.newslatter.subscribe(formData);
		if (!result.success) {
			toast.error(result.error);
			return;
		}

		toast.success(result.message);
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex border-b pb-2 gap-2">
					{/* CAMPO NAME */}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<input
										{...field}
										type="text"
										placeholder="Seu nome"
										className="bg-transparent border-none outline-none w-full placeholder:/30 font-serif"
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					{/* CAMPO EMAIL */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<input
										{...field}
										type="email"
										placeholder="Seu email"
										className="bg-transparent border-none outline-none w-full placeholder:/30 font-serif"
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						variant="ghost"
						className="text-primary hover:bg-transparent uppercase text-xs font-bold tracking-widest"
					>
						Enviar
					</Button>
				</div>
			</form>
		</Form>
	);
}
