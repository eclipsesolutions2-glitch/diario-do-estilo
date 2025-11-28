const DEFAULT_STRING_RETURN = "U";

export function formatInitials(name: string) {
	if (!name) return DEFAULT_STRING_RETURN;
	const initials = name.split(" ").map((n) => n[0]).join("");
	return initials.toUpperCase() || DEFAULT_STRING_RETURN;
}
