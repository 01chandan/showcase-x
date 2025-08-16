"use client"
import React from 'react';

interface WIPBannerProps {
    lastUpdated: string;
}
const WIPBanner: React.FC<WIPBannerProps> = ({ lastUpdated }) => {
    return (
        <div className="bg-yellow-400 text-yellow-900 text-center p-2 text-sm font-medium w-full">
            <div className="container mx-auto flex items-center justify-center space-x-2">
                {/* Simple caution icon using SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>
                    <strong>Heads up!</strong> This devfolio is a work in progress. Last updated: {lastUpdated}.
                </span>
            </div>
        </div>
    );
};

// --- How to use it in your page (e.g., pages/index.tsx) ---

// 1. Import the component
// import WIPBanner from '../components/WIPBanner';

// 2. Add it to your page's layout
const HomePage: React.FC = () => {
    return (
        <div>
            {/* Place the banner at the top of your page layout */}
            <WIPBanner lastUpdated="August 25th, 2025" />

            {/* The rest of your page content */}
            <main className="p-8">
                <h1 className="text-4xl font-bold">My Awesome Devfolio</h1>
                <p className="mt-4">Welcome to my portfolio. More content coming soon!</p>
            </main>
        </div>
    );
};

export default function App() {
    return (
        <div className="bg-[#181A1B] font-sans pt-14">
            <WIPBanner lastUpdated="August 17th, 2025" />
        </div>
    )
}
