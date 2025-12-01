import { Info } from "lucide-react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@workspace/ui/components/dialog";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";
import type { Article } from "@/core/schemas/article";

interface InfoMoreActionProps {
    data: Article;
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

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Detalhes do Artigo</DialogTitle>
                    <DialogDescription>
                        Informações completas sobre o artigo selecionado.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    {/* ID */}
                    <Field label="ID" value={data.id} />

                    {/* Título */}
                    <Field label="Título" value={data.title} />

                    {/* Slug */}
                    <Field label="Slug" value={data.slug} />

                    {/* Excerpt */}
                    <Field
                        label="Resumo"
                        value={data.excerpt || "Sem resumo disponível."}
                        multiline
                    />

                    {/* Conteúdo (limitado) */}
                    <Field
                        label="Conteúdo"
                        value={data.content}
                        multiline
                        clamp
                    />

                    {/* Autor */}
                    <Field
                        label="Autor"
                        value={`${data.author?.name} ({data.author.email})`}
                    />

                    {/* Editor */}
                    <Field
                        label="Editor"
                        value={"{data.publisher.name} ({data.publisher.email})"}
                    />

                    {/* Status */}
                    <Field
                        label="Publicado"
                        value={data.is_published ? "Sim" : "Não"}
                    />

                    {/* Destaque */}
                    <Field
                        label="Destaque"
                        value={data.is_featured ? "Sim" : "Não"}
                    />

                    {/* Datas */}
                    <Field
                        label="Criado em"
                        // data.created_at
                        value={new Date().toLocaleString("pt-PT")}
                    />
                    <Field
                        label="Atualizado em"
                        // data.updated_at
                        value={new Date().toLocaleString("pt-PT")}
                    />

                    {/* Capa */}
                    <div className="flex flex-col gap-2 col-span-2">
                        <span className="font-medium text-neutral-700">
                            Imagem de Capa
                        </span>
                        <div className="relative h-32 overflow-hidden w-full rounded-md border">
                            <Image
                                //data.coverImage.path ??
                                src={"/images/placeholder.svg"}
                                alt="cover"
                                fill
                                className="object-cover "
                            />
                        </div>
                    </div>

                    {/* Galeria */}
                    {/* {data.images.length > 0 && (
						<div className="flex flex-col gap-2">
							<span className="font-medium text-neutral-700">
								Galeria
							</span>
							<div className="flex gap-2 overflow-x-auto">
								{data.images.map((img) => (
									<Image
										key={img.id}
										src={img.path}
										alt={img.path}
										fill
										className="h-16 w-24 rounded object-cover border"
									/>
								))}
							</div>
						</div>
					)} */}
                </div>
            </DialogContent>
        </Dialog>
    );
}

/**
 * Campo padrão do detalhamento
 */
function Field({
    label,
    value,
    multiline,
    clamp,
}: {
    label: string;
    value: string | number | boolean;
    multiline?: boolean;
    clamp?: boolean;
}) {
    return (
        <div className="flex flex-col gap-1 border-b pb-2">
            <span className="font-medium text-neutral-700">{label}</span>

            {multiline ? (
                <p
                    className={`text-neutral-700 ${clamp ? "line-clamp-3 max-w-full" : ""}`}
                >
                    {value}
                </p>
            ) : (
                <span className="text-neutral-700">{value}</span>
            )}
        </div>
    );
}