"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import { FaLink, FaHome, FaSearch, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
    const { status, data: user } = useSession()
    const isLoggedIn = status === "authenticated"

    return (
        <header className="bg-green-500 p-4">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center text-white">
                    <FaLink className="mr-2" />
                    <span className="text-xl font-bold">EssentialConnect</span>
                </div>
                <ul className="flex space-x-4 text-white">
                    <li><Link href="/" className="hover:underline"><FaHome className="inline mr-1" /> Home </Link></li>
                    <li><Link href="/browse-goods" className="hover:underline"><FaSearch className="inline mr-1" /> Browse </Link></li>
                    <li>
                        <Link href={isLoggedIn ? `/Dashboard/${user.user.name}` : "/Signup"} className="hover:underline">
                            <FaUserPlus className="inline mr-1" />
                            {isLoggedIn ? "Dashboard" : "Register"}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar