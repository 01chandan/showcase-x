"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, Sparkles } from 'lucide-react';

// --- TYPE DEFINITION ---
// Defines the structure for each service item.
type Service = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
};

// --- MOCK DATA ---
// An array of service objects, mirroring the content from the UI image.
const servicesData: Service[] = [
  {
    id: '01',
    title: 'UI/UX Design',
    tags: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    description: 'Crafting intuitive and engaging user experiences through meticulous research, wireframing, and user-centesky design principles to create products that are both beautiful and easy to use.',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/4a5568?text=UI/UX+Sketch',
  },
  {
    id: '02',
    title: 'Application Design',
    tags: ['Cross-Platform App Design', 'Progressive Web App', 'Wireframing and Prototyping', 'Custom App Theme Design'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/4a5568?text=App+Design+WIP',
  },
  {
    id: '03',
    title: 'Website Design',
    tags: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    description: 'Building visually stunning and highly functional websites that provide a seamless experience across all devices. From corporate sites to e-commerce platforms, we focus on performance and aesthetics.',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/4a5568?text=Website+Layout',
  },
  {
    id: '04',
    title: 'UI Design',
    tags: ['Visual Design', 'Interaction Design', 'Design Systems', 'Mobile UI'],
    description: 'Focusing on the visual and interactive elements of a product. We create clean, modern, and appealing interfaces that enhance user interaction and brand identity.',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/4a5568?text=UI+Components',
  },
  {
    id: '05',
    title: 'Design System',
    tags: ['Component Library', 'Style Guide', 'Documentation', 'Tokenization'],
    description: 'Developing comprehensive design systems that ensure brand consistency, streamline workflows, and accelerate product development across all platforms.',
    imageUrl: 'https://placehold.co/600x400/e2e8f0/4a5568?text=Design+System',
  },
];

// It handles its own open/closed state display and animations.
const AccordionItem = ({ service, isOpen, onToggle }: { service: Service; isOpen: boolean; onToggle: () => void; }) => {
  return (
    <motion.div
      layout // This is key for the smooth resize animation
      onClick={onToggle}
      // We apply a spring transition to the layout change itself. This makes the container resize smoothly.
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      className={`cursor-pointer overflow-hidden rounded-xl transition-colors duration-300 ${isOpen ? 'bg-zinc-900 text-white' : 'bg-gray-100/20 hover:bg-gray-200/40 text-zinc-900'}`}
    >
      <motion.div layout className="flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-2xl md:text-2xl font-light text-[#ffffff]/60">{service.id}.</span>
          <h3 className="text-xl md:text-2xl font-medium text-[#ffffff]">{service.title}</h3>
        </div>
        <motion.div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'bg-sky-500 text-white' : 'bg-white text-zinc-900'}`}
        >
          {/* The icon rotation animation is enhanced with a spring for a smoother effect */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          >
            <Plus size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* AnimatePresence manages the mounting and unmounting of the content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                // We use a spring for height to get a natural, fluid feel
                height: { type: 'spring', damping: 20, stiffness: 150 },
                // A gentle ease-in for opacity
                opacity: { duration: 0.3, ease: 'easeIn' },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                // A quicker, firmer transition on exit
                height: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.2, ease: 'easeOut' },
              },
            }}
            // Adding overflow-hidden here is crucial to clip the content as the height animates
            className="overflow-hidden"
          >
            {/* The padding is now inside this inner div to prevent it from being clipped weirdly */}
            <div className="border-t border-zinc-700 p-5">
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag, index) => (
                  <span key={index} className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 mb-6 text-[15px] max-w-5xl">{service.description}</p>
              <div className=" overflow-hidden grid grid-cols-2 gap-2.5">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} illustration`}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://placehold.co/600x400/ff0000/ffffff?text=Image+Error';
                  }}
                />
                <img
                  src={service.imageUrl}
                  alt={`${service.title} illustration`}
                  className="w-full h-[300px] object-cover rounded-3xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://placehold.co/600x400/ff0000/ffffff?text=Image+Error';
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main App Component ---
export default function App() {
  const [openId, setOpenId] = useState<string | null>('02');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#181A1B] font-sans text-zinc-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-0.5 bg-sky-500"></div>
              <span className="text-sky-500 font-semibold">My Specialization</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-[#ffffff] tracking-tight flex items-center gap-3">
              My Top Projects
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/40 text-xs md:text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-4">
          {servicesData.map((service) => (
            <AccordionItem
              key={service.id}
              service={service}
              isOpen={openId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          ))}
        </div>

        {/* "View All" Button */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 text-white font-semibold text-lg py-3 px-6 rounded-full flex items-center gap-3 shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-xl hover:bg-sky-600"
          >
            View All Services
            <div className="bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center">
              <ArrowRight size={20} />
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
