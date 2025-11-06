import { Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialProviderAuth() {
	return (
		<section>
			<div className="space-y-3 mb-6">
				<Button
					variant="outline"
					className="w-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary"
					size="lg"
				>
					<Mail className="w-5 h-5 mr-2" />
					Continuar com Google
				</Button>
				<Button
					variant="outline"
					className="w-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary"
					size="lg"
				>
					<Facebook className="w-5 h-5 mr-2" />
					Continuar com Facebook
				</Button>
			</div>

			<div className="relative mb-6">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="px-4 bg-background text-muted-foreground">
						ou continue com email
					</span>
				</div>
			</div>
		</section>
	);
}
