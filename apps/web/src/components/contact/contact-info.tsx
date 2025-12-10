import { Mail, MapPin, Phone } from "lucide-react";
import { AdvertiseBox } from "./advertise-box";

export function ContactInfo() {
	return (
		<div className="space-y-10">
			<h2 className="text-3xl font-serif tracking-tight">Contato</h2>

			<div className="space-y-10 border-t pt-10">
				{[
					{
						icon: Mail,
						title: "Email",
						lines: [
							"contato@diariodoestilo.com",
							"redacao@diariodoestilo.com",
						],
					},
					{
						icon: Phone,
						title: "Telefone",
						lines: ["+244 123 456 789", "Seg — Sex · 9h às 18h"],
					},
					{
						icon: MapPin,
						title: "Endereço",
						lines: ["Luanda, Angola", "Rua da Moda, 123"],
					},
				].map((item) => {
					const Icon = item.icon;

					return (
						<div
							key={item.title}
							className="flex gap-5 items-start"
						>
							<div className="w-10 h-10 border flex items-center justify-center shrink-0 rounded-none">
								<Icon className="w-4 h-4 text-brand-800" />
							</div>

							<div className="space-y-1">
								<p className="text-xs uppercase tracking-widest text-muted-foreground">
									{item.title}
								</p>

								{item.lines.map((line) => (
									<p key={line} className="text-sm">
										{line}
									</p>
								))}
							</div>
						</div>
					);
				})}
			</div>

			<AdvertiseBox />
		</div>
	);
}
