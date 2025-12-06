import Link from "next/link";
import { LogoDiario } from "../logo-diario.js";
import { HeaderSearch } from "./header-search.js";
import { HeaderUser } from "./header-user.js";

export function HeaderMenu() {
	return (
		<div className="px-4 md:px-6 py-4">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<Link href="/">
					<LogoDiario />
					{/* <h1 className="font-serif text-2xl md:text-4xl font-bold tracking-tight cursor-pointer">
                        <span className="text-primary">Diário</span>{" "}
                        <span className="text-foreground">Do Estilo</span>
                    </h1> */}
				</Link>

				<div className="flex items-center gap-2">
					<HeaderSearch />
					<HeaderUser />
				</div>
			</div>
		</div>
	);
}
