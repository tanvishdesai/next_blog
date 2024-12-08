"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { ModeToggle } from "./theme-btn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" },
    { label: "Blog Post", path: "/blogpost" },
    { label: "Contact", path: "/contact" },
  ];

  return (
<nav className=" bg-background/60  shadow-lg sticky top-0 backdrop-blur border-b z-10">
<div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <div className="flex justify-between items-center h-16">
  {/* Left side - Logo */}
  

<Link href="/" className="text-xl font-bold text-purple-500 dark:text-purple-400">Tanvish
</Link>
  
    
    {/* Hamburger menu - visible only on mobile */}
    
</div>


          {/* Navigation items and mode toggle */}
          <div className="flex  space-x-4">
            <div className="hidden md:flex space-x-10  items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`hover:scale-105 transition-transform duration-300 text-gray-800 dark:text-gray-200
                    ${
                      pathname === item.path
                        ? "border-b-2 border-purple-500"
                        : "border-b-2 border-transparent"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ModeToggle />
            <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex flex-col gap-6 hover:scale-105  transition-transform duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    
  </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
