import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CategoryCommandSearchProps {
	defaultValue: string;
	onChangeValue: (value: string) => void;
}

export function CategoryCommandSearch({
	defaultValue,
	onChangeValue,
}: CategoryCommandSearchProps) {
	return (
		<div className="flex items-center border-b relative ">
			<Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4" />
			<Input
				type="search"
				placeholder="Pesquisar por categoria..."
				className="pl-8 text-sm border-none ring-0"
				value={defaultValue}
				onChange={({ target }) => onChangeValue(target.value)}
			/>
		</div>
	);
}
