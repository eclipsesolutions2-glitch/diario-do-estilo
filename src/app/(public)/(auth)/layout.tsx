import { HeaderTitle } from "./_components/header-title";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="container mx-auto">
			<div className="max-w-md mx-auto pt-20 pb-5">
				<HeaderTitle />
				{children}
			</div>
		</div>
	);
}
