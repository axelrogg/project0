import { cn } from "@/lib/utils/cn";
import React from "react";

export const PageDiv = ({
    children,
    className,
    ...props
}: React.ComponentProps<"div">) => (
    <div className={cn("pt-2 pl-4", className)} {...props}>
        {children}
    </div>
);
