import Link from "next/link";

interface FooterBlockListProps {
	title: string;
	itens: {
		label: string;
		href: string;
	}[];
}
export function FooterBlockList({ title, itens }: FooterBlockListProps) {
	return (
		<div>
			<h4 className="font-semibold text-primary mb-4 uppercase tracking-wider text-sm">
				{title}
			</h4>
			<ul className="space-y-3 text-sm">
				{itens.map((item) => (
					<li key={item.label}>
						<Link
							href={item.href}
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
