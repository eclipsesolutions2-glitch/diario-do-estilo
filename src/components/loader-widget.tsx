import { Spinner } from "@/components/ui/spinner";

interface LoaderWidgetProps {
	label?: string;
}

export function LoaderWidget({ label = "Carregando" }: LoaderWidgetProps) {
	return (
		<div className="flex items-center gap-2">
			<Spinner />
			<span>
				{label}
				{"..."}
			</span>
		</div>
	);
}
