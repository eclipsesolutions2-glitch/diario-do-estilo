const DEFAULT_STRING_RETURN = "U";

export function formatInitials(name: string) {
  if (!name || typeof name !== "string") return DEFAULT_STRING_RETURN;

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length === 0) return DEFAULT_STRING_RETURN;

  const first = parts[0]!;
  const last = parts.length > 1 ? parts[parts.length - 1]! : parts[0]!;

  let initials = "";
  initials += first[0] ?? "";
  initials += last[0] ?? first[1] ?? first[0] ?? "";

  return initials.toUpperCase() || DEFAULT_STRING_RETURN;
}
