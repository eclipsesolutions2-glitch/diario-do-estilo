import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export function FooterNewsletterForm() {
	return (
		<div>
			<p className="font-sans text-sm /> mb-4">
				Inscreva-se para receber a curadoria semanal.
			</p>
			<Link href="/newsletter">
				<Button className="rounded-none">Inscrever-se</Button>
			</Link>
		</div>
	);
}
