'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


// Navbar items
const navbarLinks = [
    { name: "Features", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about"}
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-16 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href={"/"}>
                    <Image src="/logo.png" alt="Logo" width={92} height={40}/>
                </Link>

                {/* Navigation Links */}
                <ul className="md:flex hidden items-center gap-8 text-sm text-[#F2F2F7]">
                    {navbarLinks.map((link) => (
                        <li key={link.name} >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Call to Action Button */}
                <Link href={"/"} className="flex items-center">
                    <Image src="/button01.png" alt="cta button" className="block drop-shadow-[0_4px_20px_rgba(129,75,222,0.51)]" width={92} height={40}/>
                </Link>
            </div>
        </nav>
    );
}