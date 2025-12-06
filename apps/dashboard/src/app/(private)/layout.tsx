import {
	SidebarInset,
	SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export default function PrivateLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider>
			<Sidebar />
			<main className="flex-1">
				<Header />
				<SidebarInset className="p-4">{children}</SidebarInset>
			</main>
		</SidebarProvider>
	);
}
