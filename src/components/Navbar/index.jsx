import Link from 'next/link';
import React from 'react'
import { FaLink, FaHome, FaSearch, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
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
                    <li><Link href="/list-goods" className="hover:underline"><FaUserPlus className="inline mr-1" /> Registration </Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar