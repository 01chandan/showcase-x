import type { FC } from 'react';
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

// --- SKILLS DATA ---
// We now use icons imported from the 'lucide-react' library.
// This makes the code cleaner and the icons are more consistent.
const skillsData = [
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: Palette },
    { name: 'Javascript', icon: Braces },
    { name: 'Typescript', icon: Type },
    { name: 'React.js', icon: Atom },
    { name: 'Next.js', icon: Server },
    { name: 'Tailwind CSS', icon: Wind },
    { name: 'C Programming', icon: FileCode },
    { name: 'C++', icon: FileCode },
    { name: 'Python', icon: FileCode },
    { name: 'Django', icon: Server },
    { name: 'MySQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Firebase', icon: DatabaseZap },
    { name: 'Supabase', icon: DatabaseZap },
    { name: 'Node.js', icon: ServerCog },
    { name: 'Figma', icon: Figma },
    // Add more skills here. Find icons at https://lucide.dev/
];

// --- MAIN COMPONENT ---
const SkillsSection = () => {
    return (
        <div className="bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-left">My Top Skills</h2>
                {/* Responsive grid for skills */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            // The card with hover effects
                            className="group flex items-center space-x-4 p-5 bg-[#1C1C22] border border-gray-800 rounded-xl transition-all duration-300 ease-in-out hover:border-sky-500/80 hover:bg-gray-800/40 cursor-pointer"
                        >
                            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                {/* The 'as' prop is used to render the icon component dynamically */}
                                <skill.icon
                                    className="w-8 h-8 text-gray-400 group-hover:text-sky-500 transition-colors duration-300"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
