import { Badge } from "@workspace/ui/components/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@workspace/ui/components/card";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@workspace/ui/components/form";
import { Separator } from "@workspace/ui/components/separator";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import { cn } from "@workspace/ui/lib/utils";
import type { UseFormReturn } from "react-hook-form";
import type { CreateArticleSchemaValues } from "@/core/schemas/article/create-article.schama";
import { CoverImageField } from "./cover-image-field";

interface EditorSidebarProps {
	form: UseFormReturn<CreateArticleSchemaValues>;
}

export function EditorSidebar({ form }: EditorSidebarProps) {
	const isPublished = form.watch("is_published");
	const isFeatured = form.watch("is_featured");

	return (
		<div className="space-y-6">
			<Card className="rounded-none border-border shadow-none bg-secondary/5">
				<CardHeader>
					<CardTitle className="font-sans text-sm uppercase tracking-widest">
						Configurações
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<FormField
						control={form.control}
						name="excerpt"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
									Subtítulo / Lead
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										value={field.value || ""}
										placeholder="O resumo que vai abaixo do título (máx. 500 caracteres)..."
										className="font-serif text-xl border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/30 resize-none min-h-20 shadow-none"
										maxLength={500}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<CoverImageField form={form} />
					<Separator />
					<FormField
						control={form.control}
						name="is_published"
						render={({ field }) => (
							<FormItem className="flex items-center justify-between">
								<div className="space-y-0.5">
									<FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
										Publicar
									</FormLabel>
									<FormDescription className="text-[10px]">
										Tornar artigo público
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										disabled
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Separator className="bg-border/50" />
					<FormField
						control={form.control}
						name="is_featured"
						render={({ field }) => (
							<FormItem className="flex items-center justify-between">
								<div className="space-y-0.5">
									<FormLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
										Destaque
									</FormLabel>
									<FormDescription className="text-[10px]">
										Exibir na página inicial
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										disabled
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<Separator className="bg-border/50" />

					<div className="pt-4">
						<label
							htmlFor=""
							className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2"
						>
							Status
						</label>
						<Badge
							variant={isPublished ? "default" : "secondary"}
							className={cn(
								"rounded-none text-[10px] uppercase tracking-wider",
								isPublished ? "" : "bg-amber-500 text-amber-50",
							)}
						>
							{isPublished ? "Publicado" : "Rascunho"}
						</Badge>
						{isFeatured && (
							<Badge
								variant="outline"
								className="rounded-none text-[10px] uppercase tracking-wider ml-2"
							>
								Destaque
							</Badge>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
