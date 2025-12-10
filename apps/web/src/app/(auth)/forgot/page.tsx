export const dynamic = "force-dynamic";

import Link from "next/link";

export default function ForgotPage() {
	return (
		<div>
			<Link href="/sign-in" className="hover:underline">
				Voltar
			</Link>
			Forgot
		</div>
	);
}
