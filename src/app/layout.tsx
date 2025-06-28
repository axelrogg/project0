import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { cookies } from "next/headers";

import "@/styles/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

const spaceGroteskFont = Space_Grotesk();

export const metadata: Metadata = {
    title: "Éckope",
    description: "description",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

    return (
        <html lang="es">
            <body className={`${spaceGroteskFont.className} antialiased`}>
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    <main>{children}</main>
                </SidebarProvider>
            </body>
        </html>
    );
}
