"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                A Smarter Way to Organize, Plan, and 
                Execute:- <span className="underline">Quartz</span>
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium">
                Collaborate, Create, and Conquer—All in One Place.
            </h3>
            <Button>
                Enter Quartz
                <ArrowRightIcon className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    );
};
