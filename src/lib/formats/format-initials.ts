export function formatInitials(name: string) {
	return (
		name
			?.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase() || "U"
	);
}
