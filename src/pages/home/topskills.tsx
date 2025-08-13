"use client"
import React, { useRef } from 'react';
import {
    Atom,
    Braces,
    Database,
    DatabaseZap,
    Figma,
    FileCode,
    GitBranch,
    Palette,
    Server,
    ServerCog,
    Type,
    Wind,
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: Palette },
    { name: 'Javascript', icon: Braces },
    { name: 'Typescript', icon: Type },
    { name: 'React.js', icon: Atom },
    { name: 'Next.js', icon: Server },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'Node.js', icon: ServerCog },
    { name: 'Python', icon: FileCode },
    { name: 'Django', icon: Server },
    { name: 'MySQL', icon: Database },
    { name: 'Firebase', icon: DatabaseZap },
    { name: 'Supabase', icon: DatabaseZap },
    { name: 'Git', icon: GitBranch },
    { name: 'Figma', icon: Figma },
    { name: 'C++', icon: FileCode },
];

// --- ANIMATION VARIANTS FOR FRAMER MOTION ---

// Animation for the container of the skill cards to stagger the children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
type Skill = {
    name: string;
    icon: React.ElementType;
};
// Animation for each individual skill card
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

// --- SKILL CARD COMPONENT ---
// Re-designed with a dynamic radial gradient and border-image hover effect.
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    const Icon = skill.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            variants={itemVariants}
            className="group relative flex items-center justify-start gap-4 p-4  border border-white/30  transition-all duration-300 cursor-default"
        >
            {/* This div creates the combined background and border glow effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)',
                    // The borderImage property requires a border-style to be set.
                    // We set a transparent border here and the gradient provides the color.
                    border: '1px solid transparent',
                    borderImage: 'radial-gradient(ellipse 40% 80% at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 70%) 1',
                }}
            />

            {/* Icon container - z-10 keeps it above the glow effect */}
            <div className="relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Icon
                    className="w-8 h-8 text-[#ffffff] group-hover:text-cyan-400 transition-colors duration-300"
                    strokeWidth={1.5}
                />
            </div>

            {/* Skill name - z-10 keeps it above the glow effect */}
            <span className="relative z-10 text-base font-semibold text-[#ffffff] group-hover:text-white transition-colors duration-300">
                {skill.name}
            </span>
        </motion.div>
    );
};


// --- MAIN COMPONENT ---
const App = () => {
    return (
        <div className="bg-[#232323] text-white font-sans flex items-center justify-center py-20">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3">Technologies I Work With</h1>
                    <p className="text-base md:text-lg text-slate-400 max-w-3xl mx-auto">
                        A curated list of my top skills and the technologies I use to build modern, efficient, and beautiful applications.
                    </p>
                </div>

                {/* The animated grid of skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5"
                >
                    {skillsData.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default App;
