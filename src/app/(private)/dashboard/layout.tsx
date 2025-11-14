import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "./_components/layout/header";
import { Sidebar } from "./_components/layout/sidebar";

export default function LayoutDasboard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-screen min-w-screen w-screen max-h-screen min-h-screen h-screen flex overflow-hidden">
			<Sidebar />
			<div className="flex-1">
				<ScrollArea className="relative h-screen overflow-x-hidden overflow-y-auto">
					<Header />
					<main className="p-8">{children}</main>
				</ScrollArea>
			</div>
		</div>
	);
}
