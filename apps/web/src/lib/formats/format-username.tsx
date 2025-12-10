export function slugifyName(value: string) {
	return value
		.toLowerCase()
		.normalize("NFD") // remove acentos
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[0-9]/g, "") // remove números
		.trim()
		.replace(/\s+/g, "-") // espaços → "-"
		.replace(/[^a-z-]/g, "") // remove caracteres inválidos
		.replace(/-+/g, "-"); // evita múltiplos "-"
}
