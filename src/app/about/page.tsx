'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import React from 'react';
import Image from "next/image";
import { Variants } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};


interface ExperienceRole {
  title: string;
  location: string;
  duration: string;
  details: string[];
}

interface Experience {
  company: string;
  image?: string;
  roles: ExperienceRole[];
}
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring" as const, stiffness: 120, damping: 20 }
  }
};


const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    variants={itemVariants}
    className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 md:mb-12"
  >
    {children}
  </motion.h2>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-gray-100">{children}</strong>
);

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <motion.div
    variants={itemVariants}
    className="bg-[#25282A] rounded-xl p-4 md:p-5 mb-6 ring-1 ring-white/10 shadow-2xl duration-500 "
  >
    {/* Card Header */}
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center font-bold text-xl text-gray-100 flex-shrink-0">
          {experience.image ? (
            <Image
              src={experience.image}
              alt={experience.company}
              width={48}
              height={48}
              className="object-cover rounded-md p-1"
            />
          ) : (
            experience.company.charAt(0)
          )}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-medium text-white">{experience.company}</h3>
          {/* Show location under company only for single-role experiences */}
          {experience.roles.length === 1 && (
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <MapPin size={14} className="mr-1.5  text-gray-400" />
              <span>{experience.roles[0].location}</span>
            </div>
          )}
        </div>
      </div>
      <div className="text-sm text-white text-right flex-shrink-0">
        {/* Show overall duration only for single-role experiences */}
        {experience.roles.length === 1 && <div>{experience.roles[0].duration}</div>}
      </div>
    </div>

    {/* Roles Section */}
    <div className="mt-4">
      <div className="relative pl-4">
        {/* Vertical line connecting the dots for multi-role experiences */}
        {experience.roles.length > 1 && (
          <div className="absolute left-[23px] top-3 h-20 w-[2.5px] bg-white/30 "></div>
        )}

        {experience.roles.map((role: ExperienceRole, index: number) => {
          const isCurrent = role.duration.includes('Present');
          return (
            <div key={index} className="relative pl-8 pb-2 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5">
                <div className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center ring-4 ring-gray-800/80">
                  <div className={`w-2 h-2 bg-sky-400 rounded-full ${isCurrent ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              {/* Role Details */}
              <div>
                <div className="flex items-baseline justify-between">
                  <h4 className="font-semibold text-lg text-sky-400">{role.title}</h4>
                  {experience.roles.length > 1 &&  <div className="text-sm text-white flex-shrink-0">{role.duration}</div>}
                </div>
                {/* For multi-role, show location under each role title */}
                {experience.roles.length > 1 && (
                  <div className="flex items-center text-sm text-gray-400 mt-1 mb-3">
                    <MapPin size={14} className="mr-1.5" />
                    <span>{role.location}</span>
                  </div>
                )}
                {role.details.length > 0 && (
                  <ul className="list-disc list-outside pl-5 text-[#929495] text-[15px] mt-2">
                    {role.details.map((detail: string, i: number) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: detail }}></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </motion.div>
);



export default function AboutPage() {

  const experienceData = [
    {
      company: "SCDND Estates Pvt Ltd.",
      image: "/assets/scdnd.webp",
      roles: [{
        title: "Frontend Developer",
        location: "Greater Noida, India",
        duration: "May 2024 - Present",
        details: [
          "Contributed to developing, enhancing, and optimizing the SCDND company Portal and internal search platforms, utilizing modern technologies to improve performance, scalability, and user experience.",
          "Built an automated billing and invoicing system to manage client records & reduce manual calculation errors.",
          "Built modern website using React.js, Tailwind CSS, and JavaScript, with smooth animations via GSAP & Component libraries.",
          "Collaborated to build an AI feature on an internal search platform leveraging Retrieval-Augmented Generation (RAG) to summarize queries using Gemini LLM, delivering appropriate responses for users.",
          "Contributed to building a Project management dashboard feature to track work progress, deliver tasks on time, manage files and improve backend performance by optimizing local storage.",
          "Building a file-sharing system document access, Integrated AWS OpenSearch for fast, efficient document retrieval."
        ]
      }]
    },
    {
      company: "Excellent Educational Hub Pvt Ltd.",
      image: "/assets/excellent.webp",
      roles: [
        {
          title: "Web Developer",
          location: "Noida, India",
          duration: "July 2023 - Jun 2024",
          details: []
        },
        {
          title: "Frontend Developer",
          location: "Noida, India",
          duration: "Apr 2023 - Jun 2023",
          details: [
            "Developed an e-learning platform and managed LMS integration via Graphy.io and Classplus.",
            "Built, deployed content-driven website with dynamic pages, responsive design. Utilized React.js, JavaScript & Tailwind CSS for rendering and optimization. Implemented SEO strategies for boost visibility.",
            "Developed a dynamic marksheet portal feature, enabling secure access, download of student marksheets and certificates.",
            "Built a play school website using React.js & Tailwind CSS. Integrated 3rd party enquire handling service. Deployed project on Firebase, and implemented SEO best practices for enhancing the institute&apos;s online presence."
          ]
        }
      ]
    },
    {
      company: "Katha.org",
      image: "/assets/katha.webp",
      roles: [
        {
          title: "Sr. IT Trainer",
          location: "New Delhi, India",
          duration: "Apr 2023 - Jun 2024",
          details: [
            "Developed an e-learning platform and managed LMS integration via Graphy.io and Classplus.",
            "Built, deployed content-driven website with dynamic pages, responsive design. Utilized React.js, JavaScript & Tailwind CSS for rendering and optimization. Implemented SEO strategies for boost visibility.",
            "Developed a dynamic marksheet portal feature, enabling secure access, download of student marksheets and certificates.",
            "Built a play school website using React.js & Tailwind CSS. Integrated 3rd party enquire handling service. Deployed project on Firebase, and implemented SEO best practices for enhancing the institute&apos;s online presence."
          ]
        }
      ]
    }
  ];


  return (
    <main className="bg-[#181A1B] text-[#E5E5E5] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* About Me Section */}
          <motion.section id="about" className="mb-16 md:mb-24">
            <SectionTitle>About Me</SectionTitle>
            <motion.div variants={itemVariants} className="space-y-5 text-gray-300/90 leading-relaxed">
              <p>
                Hello! I’m <Strong>Chandan Kumar</Strong>, a passionate Frontend Developer from India who loves creating  <Strong> seemless features </Strong> and <Strong>building products</Strong>. I enjoy making websites that are easy to use, well-designed, and work smoothly. Whether I’m designing interfaces or writing code, I love solving problems and creating <Strong>automated digital solutions. </Strong>
              </p>
              <p>
                My tech journey began at <Strong>15</Strong> - back when I didn’t even own a PC. I’d spend hours at a cyber café designing <Strong>logos</Strong> and playing with MS Paint. That curiosity led me to my first programming language, <Strong>C Programming</Strong> and from there I dived into <Strong>frontend technologies </Strong> and modern web development. One of my first real projects was building a tuition coaching website in college simple, but a proud milestone that set my path in motion.
              </p>
              <p>
                Today, I’ve developed multiple web applications for <Strong>personal projects</Strong>, freelance clients, and companies. My work spans JavaScript frameworks like <Strong>React</Strong> and <Strong>Next.js</Strong>, back-end tools such as <Strong>Express</Strong> and <Strong>Django</Strong>, and cloud platforms like <Strong>Google Cloud</Strong> and <Strong>AWS</Strong>. I’ve also worked with learning platforms like <Strong>Graphy.io</Strong> and <Strong>Classplus</Strong> to deliver engaging online experiences.
              </p>
              <p>
                Over the years, I’ve learned that building great products is about more than just writing code - it’s about creating scalable, maintainable solutions that users actually enjoy. My go-to stack is <Strong>React</Strong> and <Strong>Next.js</Strong> for the frontend, <Strong>Django</Strong> for the backend, and <Strong>Firebase</Strong> or <Strong>Vercel</Strong> for deployment. Every project is a new challenge, and that’s what keeps me hooked.
              </p>
              <p>
                Outside of coding, I teach and record <Strong>online lectures</Strong>, watch thriller movies, and brainstorm startup ideas - often while untangling my latest batch of syntax errors. I also love exploring new places, attending <Strong>tech events</Strong>, and discovering fresh ideas along the way.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-10"
            >
              <h2 className="mb-4 font-semibold">Here&apos;s a little about my preferred stack:</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><Strong>Framework & Libraries:</Strong> Next.js, React.js</li>
                <li><Strong>Database:</Strong> MongoDB, Supabase</li>
                <li><Strong>CSS:</Strong> TailwindCSS</li>
                <li><Strong>Animation Library:</Strong> GSAP & Framer Motion</li>
              </ul>
            </motion.div>

          </motion.section>

          {/* Experience Section */}
          <motion.section id="experience" className="mb-16 md:mb-24">
            <SectionTitle>Experience</SectionTitle>
            <div>
              {experienceData.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </motion.section>

        </motion.div>
      </div>
    </main>
  );
}
