"use client";
import { Calendar, Home, Inbox } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Menu items.
const menuItems = [
    {
        title: "Mapa",
        url: "/",
        icon: Home,
    },
    {
        title: "Contribuye",
        url: "/contribuye",
        icon: Inbox,
    },
    {
        title: "¿Qué es [nombre]?",
        url: "/que-es-alza-el-dedo",
        icon: Calendar,
    },
];

export function AppSidebar() {
    const { open } = useSidebar();
    return (
        <Sidebar side="left" collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="text-center">
                            This should be the logo
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <Tooltip key={item.title}>
                                    <TooltipTrigger asChild>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </TooltipTrigger>
                                    <TooltipContent hidden={open} side="right">
                                        <p>{item.title}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={{ name: "hello", email: "email", avatar: "" }} />
            </SidebarFooter>
        </Sidebar>
    );
}
