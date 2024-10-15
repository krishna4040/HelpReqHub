import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-500 text-white p-4 mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2023 EssentialConnect. All rights reserved.</p>
                <p>Contact us: info@essentialconnect.com</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-green-200"><FaFacebookF /></a>
                    <a href="#" className="hover:text-green-200"><FaTwitter /></a>
                    <a href="#" className="hover:text-green-200"><FaLinkedinIn /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer