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
            <Link href={data.href}
                className="data-[state=open]:p-4">
                <SidebarMenuButton tooltip={data.label} disabled={!isActive}>
                    {data.icon && <data.icon />}
                    <span>{data.label}</span>
                </SidebarMenuButton>
            </Link>
        </SidebarMenuItem>
    );
}