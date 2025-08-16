'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Loader2 } from 'lucide-react';
import Link from 'next/link'
export default function App() {
    // State to manage the active navigation link
    const [activePage, setActivePage] = useState('Home');
    // State to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to manage the resume download animation
    const [isDownloading, setIsDownloading] = useState(false);

    // Navigation items
    const navItems = ['Home', 'About', 'Creations', 'Uses'];


    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to handle resume download with animation
    const handleResumeDownload = () => {
        // Prevent multiple clicks while download is in progress
        if (isDownloading) return;

        setIsDownloading(true);

        // Simulate a network delay for the animation
        setTimeout(() => {
            const pdfBase64 = "JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovT3V0bGluZXMgMiAwIFIKL1BhZ2VzIDMgMCBSCj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9PdXRsaW5lcwovQ291bnQgMAo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzQgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKNCAtMiAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDMgMCBSCi9SZXNvdXJjZXMgPDwKL0ZvbnQgPDwKL0YxIDYgMCBSCj4+Ci9Qcm9jU2V0IFsvUERGLyBUZXh0XQo+PgovTWVkaWFCb3ggWzAgMCA1OTUgODQyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA1NQo+PgpzdHJlYW0KQkQKBTQgMCBUZCAvRjEgMTIgVGYgKFRoaXMgaXMgYSBkdW1teSByZXN1bWUuKSBUagplbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagp4cmVmCjAgNwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDA2MyAwMDAwMCBuIAowMDAwMDAwMTEzIDAwMDAwIG4gCjAwMDAwMDAxNjIgMDAwMDAgbiAKMDAwMDAwMDMwMyAwMDAwMCBuIAowMDAwMDAwMzYyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDAyCiUlRU9GCg==";

            // Convert base64 to a blob
            const byteCharacters = atob(pdfBase64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });

            // Create a temporary link to trigger the download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'CK-Resume.pdf'; // The name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href); // Clean up the object URL

            // Reset the button state
            setIsDownloading(false);
        }, 1500); // 1.5-second animation
    };

    // Style for the active navigation link
    const activeLinkStyle = {
        color: '#00A6F4', // sky-500
        fontWeight: 'bold',
    };

    return (
        <div className=" text-gray-900 dark:text-white  transition-colors duration-500">
            <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm ">

                <header className="max-w-6xl mx-auto  px-2 py-2 rounded-xl">
                    <div className="container mx-auto flex justify-between items-center">
                        {/* Left Side: Brand Name */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl font-bold text-[#ffffff]"
                        >
                            CK
                        </motion.div>

                        {/* Center: Navigation Links for Desktop */}
                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="hidden md:flex items-center gap-8"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => {
                                        setActivePage(item);
                                        setIsMenuOpen(false); // Close menu on click
                                    }}
                                    className="text-base w-full text-center px-2 py-0.5 rounded-md text-[#ffffff] dark:text-gray-200 hover:bg-gray-100/20 dark:hover:bg-sky-900 transition-colors duration-300"
                                    style={activePage === item ? activeLinkStyle : {}}
                                >
                                    {item}
                                </Link>
                            ))}
                        </motion.nav>

                        {/* Right Side: Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex items-center gap-4"
                        >
                            <button
                                onClick={handleResumeDownload}
                                className="hidden sm:flex items-center justify-center gap-2 px-2 py-1.5 w-[120px] text-sm md:text-[15px] bg-sky-500 text-white cursor-pointer rounded-xl hover:bg-sky-600 transition-all duration-300 disabled:bg-sky-400 disabled:cursor-not-allowed"
                                disabled={isDownloading}
                            >
                                {isDownloading ? (
                                    <>
                                        <Loader2 size={17} className="animate-spin" />
                                        <span>Downloading...</span>
                                    </>
                                ) : (
                                    <>
                                        <Download size={17} />
                                        <span>Resume</span>
                                    </>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button onClick={toggleMenu} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:hidden mt-4 bg-white/80 dark:bg-black/80 backdrop-blur-lg rounded-lg p-4"
                        >
                            <nav className="flex flex-col items-center gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item}
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        onClick={() => {
                                            setActivePage(item);
                                            setIsMenuOpen(false); // Close menu on click
                                        }}
                                        className="text-lg w-full text-center py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors duration-300"
                                        style={activePage === item ? activeLinkStyle : {}}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <button
                                    onClick={handleResumeDownload}
                                    className="flex sm:hidden w-full justify-center mt-2 items-center gap-2 px-4 py-2 text-base bg-sky-500 text-white cursor-pointer rounded-full hover:bg-sky-600 transition-colors duration-300 disabled:bg-sky-400 disabled:cursor-not-allowed"
                                    disabled={isDownloading}
                                >
                                    {isDownloading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            <span>Downloading...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Download size={18} />
                                            <span>Resume</span>
                                        </>
                                    )}
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </header>
            </div>
        </div>
    );
}
