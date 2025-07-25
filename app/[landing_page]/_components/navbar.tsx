"use client";

import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-4 bg-background/90 backdrop-blur-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Logo />
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">Features</Button>
          <Button variant="ghost" size="sm">Pricing</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};