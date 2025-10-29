"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		label: "Política de Privacidade",
		href: "/terms",
	},
	{
		label: "Termos de Uso",
		href: "/terms/privacy-policy",
	},
	{
		label: "Política de Cookies",
		href: "/terms/cookies",
	},
];

export default function LayoutTerms({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	// Filtra os links que não correspondem à página atual
	const filteredLinks = links.filter((item) => item.href !== pathname);

	return (
		<div className="container mx-auto px-4 py-12">
			{children}
			<div className="mt-12 pt-8 border-t">
				<p className="text-sm text-muted-foreground text-center">
					Leia também:{" "}
					{filteredLinks.map((item, index) => (
						<span key={item.href}>
							<Link
								href={item.href}
								className="text-[#0D7377] hover:underline"
							>
								{item.label}
							</Link>
							{index < filteredLinks.length - 1 && (
								<span className="text-gray-400 mx-1">•</span>
							)}
						</span>
					))}
				</p>
			</div>
		</div>
	);
}
