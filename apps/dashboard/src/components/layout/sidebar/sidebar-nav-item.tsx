import { SidebarMenuButton, SidebarMenuItem } from "@workspace/ui/components/sidebar";
import Link from "next/link";

interface SidebarNavItemProps {
    label: string
    href: string
    icon?: React.ElementType
    isActive: boolean
}

export function SidebarNavItem({ isActive = true, ...data }: SidebarNavItemProps) {
    return (
        <SidebarMenuItem>
            <SidebarMenuButton tooltip={data.label} asChild disabled={!isActive}>
                <Link href={data.href}
                    className="data-[state=open]:p-4">
                    {data.icon && <data.icon />}
                    <span>{data.label}</span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}