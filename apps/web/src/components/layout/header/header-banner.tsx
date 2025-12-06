export function HeaderBanner() {
	return (
		<div className="border-b py-2 px-4 md:px-6">
			<div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
				<div className="text-muted-foreground">
					Moda Global • Cultura Local
				</div>

				<div className="flex items-center gap-3 text-xs">
					<span className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
						PT
					</span>
					<span className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
						EN
					</span>
				</div>
			</div>
		</div>
	);
}
