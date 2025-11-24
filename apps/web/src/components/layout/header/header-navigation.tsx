"use client"
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNavigation() {
    const pathname = usePathname();
    const categories = [
        { name: "Moda Africana", slug: "african-fashion" },
        { name: "Tendências", slug: "tendencies" },
        { name: "Cultura", slug: "culture" },
        { name: "Crítica Social", slug: "social-criticism" },
        /*{ name: "Estilo de Vida", slug: "estilo-de-vida" },
        { name: "Beleza", slug: "beleza" },*/
    ];
    return (
        <nav className="border-t border-border">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ul className="hidden md:flex items-center justify-center gap-8 py-4 text-sm font-medium">
                    {categories.map((category) => (
                        <li key={category.slug}>
                            <Link
                                href={`/${category.slug}`}
                                className={cn(
                                    "text-foreground hover:text-primary transition-colors uppercase tracking-wide",
                                    pathname.includes(category.slug) &&
                                    "text-primary",
                                )}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* {isMenuOpen && (
                    <ul className="md:hidden py-4 space-y-3">
                        {categories.map((category) => (
                            <li key={category.slug}>
                                <Link
                                    href={`/${category.slug}`}
                                    className="block text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )} */}
            </div>
        </nav>
    )
}