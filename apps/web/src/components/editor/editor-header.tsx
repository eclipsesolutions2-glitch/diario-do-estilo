import { Button } from "@workspace/ui/components/button";
import { Save } from "lucide-react";

interface EditorHeaderProps {
	onSaveDraft: () => void;
	onPublish: () => void;
	isPublished: boolean;
}

export function EditorHeader({ onSaveDraft }: EditorHeaderProps) {
	return (
		<div className="flex items-center justify-between mb-8">
			<div>
				<h1 className="font-serif text-3xl md:text-4xl mb-2">
					Área do Editor
				</h1>
				<p className="text-muted-foreground font-sans">
					Gerencie e crie conteúdo editorial.
				</p>
			</div>
			<div className="flex gap-3">
				<Button
					type="submit"
					variant="outline"
					className="rounded-none uppercase text-xs tracking-wider shadow-none"
					onClick={onSaveDraft}
				>
					<Save className="w-4 h-4 mr-2" /> Salvar Rascunho
				</Button>
				{/* <Button
					type="button"
					className="rounded-none uppercase text-xs tracking-wider shadow-none"
					onClick={onPublish}
				>
					<Send className="w-4 h-4 mr-2" />
					{isPublished ? "Publicar" : "Enviar p/ Aprovação"}
				</Button> */}
			</div>
		</div>
	);
}
