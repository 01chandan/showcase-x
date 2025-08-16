"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, Link } from 'lucide-react';

// NEW IMAGE COMPONENT
type ImageProps = {
  src: string;
  alt: string;
  className: string;
  onError: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

const Image: React.FC<ImageProps> = ({ src, alt, className, onError }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    onError={onError}
    loading="lazy" // Helps images load faster by deferring offscreen images
  />
);


// TYPE DEFINITION
type Service = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  imageUrls: string[];
  projectUrl: string; // Added for the "Go to Website" link
};

// MOCK DATA - Updated with projectUrl and more structured descriptions
const servicesData: Service[] = [
  {
    id: '01',
    title: 'SCDND Estates',
    tags: ['React.js', 'Tailwindcss', 'Google Cloud', 'Framer Motion'],
    description: 'Contributed to developing, enhancing, and optimizing the SCDND company Portal and internal search platforms. Built an automated billing and invoicing system to manage client records & reduce manual calculation errors. Built modern website using React.js, Tailwind CSS, and JavaScript, with smooth animations via GSAP & Component libraries. Collaborated to build an AI feature on an internal search platform leveraging Retrieval-Augmented Generation (RAG). Contributed to building a Project management dashboard feature to track work progress. Building a file-sharing system document access, Integrated AWS OpenSearch for fast, efficient document retrieval.',
    imageUrls: ['/assets/scdndp1.webp', '/assets/scdndp2.webp'],
    projectUrl: 'https://scdndestates.com/',
  },
  {
    id: '02',
    title: 'BUWCH',
    tags: ['React.js', 'Tailwindcss', 'Django', 'AWS', 'Framer Motion'],
    description: 'Developed a comprehensive web application for BUWCH. Focused on creating a scalable and maintainable architecture. Implemented a user-friendly interface with a focus on accessibility. Integrated with various AWS services for robust backend functionality.',
    imageUrls: ['https://placehold.co/600x400/1E293B/FFFFFF?text=BUWCH+Home', 'https://placehold.co/600x400/1E293B/FFFFFF?text=Dashboard'],
    projectUrl: 'https://example.com/buwch',
  },
  {
    id: '03',
    title: 'Website Design',
    tags: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
    description: 'Building visually stunning and highly functional websites. Ensuring a seamless experience across all devices. Specializing in corporate sites and e-commerce platforms. Focusing on performance, aesthetics, and search engine optimization.',
    imageUrls: ['https://placehold.co/600x400/1E293B/FFFFFF?text=E-commerce+Site'],
    projectUrl: 'https://example.com/webdesign',
  },
  {
    id: '04',
    title: 'UI Design',
    tags: ['Visual Design', 'Interaction Design', 'Design Systems', 'Mobile UI'],
    description: 'Focusing on the visual and interactive elements of a product. Creating clean, modern, and appealing interfaces. Enhancing user interaction and strengthening brand identity through meticulous design.',
    imageUrls: ['https://placehold.co/600x400/1E293B/FFFFFF?text=Mobile+App+UI', 'https://placehold.co/600x400/1E293B/FFFFFF?text=Design+System'],
    projectUrl: 'https://example.com/uidesign',
  },
];


// This component handles its own open/closed state display and animations.
const AccordionItem = ({ service, isOpen, onToggle }: { service: Service; isOpen: boolean; onToggle: () => void; }) => {
  // Split description into an array of sentences for bullet points
  const descriptionPoints = service.description.split('. ').filter(point => point.length > 0);

  return (
    <motion.div
      layout
      onClick={onToggle}
      transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      className={`cursor-pointer overflow-hidden rounded-xl transition-colors duration-300 ${isOpen ? 'bg-white/10' : 'bg-gray-800/70 hover:bg-gray-800/80'}`}
    >
      <motion.div layout className="flex items-center justify-between p-4 md:p-4">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="text-xl md:text-xl font-light text-white/60">{service.id}.</span>
          <h3 className="text-lg md:text-xl font-medium text-white">{service.title}</h3>
        </div>
        <motion.div
          className={`flex items-center justify-center w-8 h-8 rounded-full ${isOpen ? 'bg-sky-500 text-white' : 'bg-white/10 text-white'}`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          >
            <Plus size={18} />
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { type: 'spring', damping: 20, stiffness: 150 },
                opacity: { duration: 0.3, ease: 'easeIn' },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.2, ease: 'easeOut' },
              },
            }}
            className="overflow-hidden">

            <div className="border-t border-zinc-700 p-4 md:p-5">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="bg-zinc-800 text-zinc-300 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* NEW "GO TO WEBSITE" BUTTON */}
                <motion.a
                  href={service.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-full transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()} // Prevents accordion from closing when button is clicked
                >
                  Go to Website
                  <Link size={16} />
                </motion.a>
              </div>

              {/* MODIFIED DESCRIPTION SECTION */}
              {/* Renders the description as a full-width bulleted list */}
              <ul className="text-zinc-400 mb-5 text-[15px] list-disc list-inside">
                {descriptionPoints.map((point, index) => (
                  <li key={index} className="w-full">{point}.</li>
                ))}
              </ul>

              {/* MODIFIED IMAGE SECTION */}
              <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.imageUrls.map((url, index) => (
                  <a
                    key={index}
                    href={service.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="relative aspect-video w-full overflow-hidden  group"
                  >
                    <Image
                      src={url}
                      alt={`${service.title} screenshot ${index + 1}`}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://placehold.co/600x400/181A1B/ffffff?text=Image+Not+Found';
                      }}
                    />
                    {/* NEW HOVER EFFECT */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <Link size={20} />
                        <span>Go to Module</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Main App Component 
export default function App() {
  const [openId, setOpenId] = useState<string | null>('01');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-[#181A1B] font-sans text-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-4 h-0.5 bg-sky-500"></div>
              <span className="text-sky-500 font-semibold">Made with 💻🔥</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold tracking-tight">
              My Top Projects
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/60 text-[15px] max-w-lg">
              Here are some of the selected projects that showcase my passion for creating modern, responsive, and user-friendly web applications.
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
          <a href="https://github.com/" target='blank'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-500 text-white font-medium text-lg py-1.5 pl-4 pr-1.5 rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:bg-sky-600 cursor-pointer"
            >
              More Projects
              <div className="bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
}
