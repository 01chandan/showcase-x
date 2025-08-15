"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Apple,
  Laptop,
  Smartphone,
  Monitor,
  HardDrive,
  Keyboard,
  Mouse,
  Headphones,
  Code,
  Github,
  TerminalSquare,
  GitMerge,
  Box,
  Cloud,
  Wind,
  Puzzle,
  Package,
  Home,
  Shield,
  Bot,
  Figma,
  Music
} from 'lucide-react';
import { Variants } from "framer-motion";

interface UseItem {
  name: string;
  icon: React.ElementType;
  brand?: string;
}

// Data for each section
const hardware: UseItem[] = [
  { name: 'Macbook Pro M4', icon: Apple },
  { name: 'ASUS Vivobook 14', brand: 'ASUS', icon: Laptop },
  { name: 'Realme 9 Pro+', icon: Smartphone },
  { name: 'Dell P2723QE', icon: Monitor },
  { name: 'Lenovo L27m-30', icon: Monitor },
  { name: 'Dell WD19 Dock', brand: 'DELL', icon: HardDrive },
  { name: 'Magic Keyboard', icon: Keyboard },
  { name: 'Magic Mouse', icon: Mouse },
  { name: 'Arctic Fox Mouse', icon: Mouse },
  { name: 'Poly Voyager Focus 2', icon: Headphones },
  { name: 'Sony WH-CH520', brand: 'SONY', icon: Headphones },
];

const coding: UseItem[] = [
  { name: 'VSCode', icon: Code },
  { name: 'Github Theme', icon: Github },
  { name: 'Sublime Text', icon: TerminalSquare },
  { name: 'iTerm2', icon: TerminalSquare },
  { name: 'Oh-my-zsh', icon: TerminalSquare },
  { name: 'Github Copilot', icon: Github },
  { name: 'Docker', icon: Box },
  { name: 'Postman', icon: Wind },
  { name: 'AWS', icon: Cloud },
  { name: 'Vercel', icon: Wind },
  { name: 'Git', icon: GitMerge },
  { name: 'Prettier', icon: Puzzle },
];

const packageManagers: UseItem[] = [
  { name: 'pnpm', icon: Package },
  { name: 'yarn', icon: Package },
  { name: 'Homebrew', icon: Home },
];

const software: UseItem[] = [
  { name: 'Brave', icon: Shield },
  { name: 'Microsoft Edge', icon: Home },
  { name: 'ChatGPT', icon: Bot },
  { name: 'Figma', icon: Figma },
  { name: 'Raycast', icon: Home },
  { name: 'Spotify', icon: Music },
];

// Animation variants for the entire container to stagger the children
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of each child card
    },
  },
};

// Animation variants for each individual item card
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.1)',
    backgroundColor: '#333333',
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

// Reusable component for each item card
const UseItemCard: React.FC<{ item: UseItem }> = ({ item }) => {
  const Icon = item.icon;
  return (
    <motion.div
      className="bg-[#1C1C1C] rounded-lg p-4 flex flex-col items-start justify-center space-y-3 border border-gray-700/50 cursor-pointer h-28"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/50">
        {item.brand ? (
          <span className="text-xs font-bold text-gray-300">{item.brand}</span>
        ) : (
          <Icon className="w-5 h-5 text-gray-300" />
        )}
      </div>
      <p className="text-sm text-gray-300 font-medium">{item.name}</p>
    </motion.div>
  );
};

// Reusable component for section titles
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-2xl font-bold text-gray-100 mt-12 mb-6">{title}</h2>
);

// The main page component
const App = () => {
  return (
    <div className="bg-[#181A1B] min-h-screen text-white font-sans">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main title and description section with a simple fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-50">Uses</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            This is a page telling you about the knives in my drawer. This list is always changing.
          </p>
        </motion.div>

        {/* Hardware section with staggered card animation */}
        <SectionTitle title="Hardware" />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {hardware.map((item) => (
            <UseItemCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* Coding section with staggered card animation */}
        <SectionTitle title="Coding" />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {coding.map((item) => (
            <UseItemCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* Package Managers section with staggered card animation */}
        <SectionTitle title="Package Managers" />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {packageManagers.map((item) => (
            <UseItemCard key={item.name} item={item} />
          ))}
        </motion.div>

        {/* Software section with staggered card animation */}
        <SectionTitle title="Software" />
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {software.map((item) => (
            <UseItemCard key={item.name} item={item} />
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default App;
