import { action } from "@/core/actions";
import {
    Sidebar as RootSidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader, SidebarMenu, SidebarRail
} from "@workspace/ui/components/sidebar";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { SidebarNavUser } from "./sidebar-nav-user";
import Image from "next/image";
import { NAV_LINKS } from "./data";
import { SidebarNavItem } from "./sidebar-nav-item";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@workspace/ui/lib/utils";

export async function Sidebar({ ...props }: React.ComponentProps<typeof RootSidebar>) {
    const session = await action.api.auth.getSession();
    return (
        <RootSidebar collapsible="icon" className={cn("group", props.className)} {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <div className="relative bg-brand-700/5 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <Image src="/images/logo-app-white.svg" alt="Logo do diário do estilo" fill className="object-cover" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Diário do Estilo</span>
                        <span className="truncate text-xs">Empresa</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className="mt-4">
                <nav className="flex-1">
                    {Object.entries(NAV_LINKS).map(([key, value]) => (
                        <SidebarGroup key={key} >
                            <SidebarGroupLabel className="block font-semibold first-letter:uppercase mb-2 group-data-[collapsible=icon]:mb-0">
                                {key}
                            </SidebarGroupLabel>
                            <SidebarMenu className="space-y-1.5">
                                {value.map((item) => (
                                    <SidebarNavItem
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        href={item.href}
                                        isActive
                                    />

                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    ))}
                </nav>
            </SidebarContent>
            <SidebarFooter>
                <ThemeToggle />
                {session.success ? (<SidebarNavUser user={{
                    name: session.data.name,
                    email: session.data.email,
                    avatar: session.data.avatar_url ?? "",
                }} />) : (
                    <Skeleton className="w-full h-12 rounded-lg" />
                )}
            </SidebarFooter>
            <SidebarRail />
        </RootSidebar>
    );
}