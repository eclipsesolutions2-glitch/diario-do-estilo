"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Política de Privacidade", href: "/terms" },
  { label: "Termos de Uso", href: "/terms/privacy-policy" },
  { label: "Política de Cookies", href: "/terms/cookies" },
];

export function LinksList() {
  const pathname = usePathname();

  const filteredLinks = links.filter((item) => item.href !== pathname);

  return (
    <p className="text-sm text-muted-foreground text-center">
      Leia também:{" "}
      {filteredLinks.map((item, index) => (
        <span key={item.href}>
          <Link href={item.href} className="text-primary hover:underline">
            {item.label}
          </Link>
          {index < filteredLinks.length - 1 && (
            <span className="text-gray-400 mx-1">•</span>
          )}
        </span>
      ))}
    </p>
  );
}
