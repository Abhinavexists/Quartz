import Image from "next/image";
import React from "react";
import {cn} from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ['latin'],
    weight: ["400", "600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src="/logo.svg"
            height="40"
            width="40"
            alt="Logo"
            />
            <p className={cn("font-semibold",font.className)}>
                Quartz
            </p>
        </div>
    )
}