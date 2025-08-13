'use client';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import React from 'react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
};

// --- Sub-components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    variants={itemVariants}
    className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 md:mb-12"
  >
    {children}
  </motion.h2>
);

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-slate-100">{children}</strong>
);


const ExperienceCard = ({ experience }: { experience: any }) => (
  <motion.div
    variants={itemVariants}
    className="bg-[#25282b] rounded-xl p-6 md:p-8 mb-6 ring-1 ring-white/10 shadow-2xl duration-500 hover:shadow-blue-500/20"
  >
    {/* Card Header */}
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-md bg-slate-700 flex items-center justify-center font-bold text-xl text-slate-100">
          {experience.company.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-slate-100">{experience.company}</h3>
        </div>
      </div>
      <div className="text-sm text-slate-400 text-right flex-shrink-0">
        <div>{experience.duration}</div>
      </div>
    </div>

    {/* Roles Section */}
    <div className="mt-6">
      <div className="relative pl-8">
        {/* Timeline Dot */}
        <div className="absolute left-0 top-2">
          <div className="w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center ring-4 ring-slate-800/80">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
          </div>
        </div>

        {/* Role Details */}
        <div className="pb-4">
          <h4 className="font-semibold text-lg text-sky-400">{experience.title}</h4>
          <div className="flex flex-wrap items-center text-sm text-slate-500 mt-1 mb-3 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1.5" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={14} className="mr-1.5" />
              <span>{experience.duration}</span>
            </div>
          </div>
          {experience.details.length > 0 && (
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-400 text-[15px]">
              {experience.details.map((detail: string, i: number) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: detail }}></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);



// --- Main Page Component ---

export default function AboutPage() {

  // --- Data from Resume ---
  const experienceData = [
    {
      company: "SCDND Estates Pvt Ltd.",
      title: "Frontend Developer",
      location: "Greater Noida",
      duration: "May 2024 - Present",
      details: [
        "Contributed to developing, enhancing, and optimizing the <Strong>SCDND company Portal</Strong> and internal search platforms, utilizing modern technologies to improve performance, scalability, and user experience.",
        "Built an <Strong>automated billing and invoicing system</Strong> to manage client records & reduce manual calculation errors.",
        "Built modern website using <Strong>React.js</Strong>, <Strong>Tailwind CSS</Strong>, and <Strong>JavaScript</Strong>, with smooth animations via <Strong>GSAP</Strong> & Component libraries.",
        "Collaborated to build an <Strong>AI feature</Strong> on an internal search platform leveraging <Strong>Retrieval-Augmented Generation (RAG)</Strong> to summarize queries using <Strong>Gemini LLM</Strong>, delivering appropriate responses for users.",
        "Contributed to building a <Strong>Project management dashboard</Strong> feature to track work progress, deliver tasks on time, manage files and improve backend performance by optimizing local storage.",
        "Building a <Strong>file-sharing system</Strong> document access, Integrated <Strong>AWS OpenSearch</Strong> for fast, efficient document retrieval."
      ]
    },
    {
      company: "Excellent Educational Hub Pvt Ltd.",
      title: "Web Developer",
      location: "Noida",
      duration: "Apr 2023 - Jun 2024",
      details: [
        "Developed an <Strong>e-learning platform</Strong> and managed <Strong>LMS integration</Strong> via <Strong>Graphy.io</Strong> and <Strong>Classplus</Strong>.",
        "Built, deployed content-driven website with dynamic pages, responsive design. Utilized <Strong>React.js</Strong>, <Strong>JavaScript</Strong> & <Strong>Tailwind CSS</Strong> for rendering and optimization. Implemented <Strong>SEO strategies</Strong> for boost visibility.",
        "Developed a dynamic <Strong>marksheet portal feature</Strong>, enabling secure access, download of student marksheets and certificates.",
        "Built a play school website using <Strong>React.js</Strong> & <Strong>Tailwind CSS</Strong>. Integrated 3rd party enquire handling service. Deployed project on <Strong>Firebase</Strong>, and implemented <Strong>SEO best practices</Strong> for enhancing the institute's online presence."
      ]
    }
  ];

  const projectsData = [
    {
      name: "BUWCH Lifestyles",
      link: "#", // Add your link here
      details: [
        "Developed <Strong>role-based dashboards</Strong> for Admin, Suppliers, & Business Users, with tailored features for each user type.",
        "Contributed to building a fully responsive <Strong>e-commerce web flow</Strong> using <Strong>React.js</Strong>, <Strong>JavaScript</Strong>, and <Strong>Tailwind CSS</Strong>. Utilized <Strong>Framer Motion</Strong> and component libraries for modern animations.",
        ""
      ]
    },
    {
      name: "SCDND Estates Pvt Ltd",
      link: "#", // Add your link here
      details: [
        "Built from scratch a <Strong>rich text editor</Strong> to create and schedule dynamic blog content for SEO purposes.",
        "Implemented a <Strong>micro-frontend architecture</Strong> for independent development and faster deployment.",
        "Built <Strong>automated accounting ledgers</Strong> and <Strong>profit & loss statements</Strong> for tracking & managing user records."
      ]
    }
  ];

  const preferredStack = {
    title: "Here's a little about my preferred stack:",
    items: [
      "Framework & Libraries: Next.js, React.js",
      "Database: MongoDB, Supabase",
      "CSS: TailwindCSS"
    ]
  };


  return (
    <main className="bg-[#232323] text-[#E5E5E5] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* About Me Section */}
          <motion.section id="about" className="mb-16 md:mb-24">
            <SectionTitle>About Me</SectionTitle>
            <motion.div variants={itemVariants} className="space-y-5 text-[#E5E5E5] leading-relaxed">
              <p>
                Hi, I'm <Strong>Chandan Kumar</Strong>  a <Strong>Frontend Developer</Strong> at <Strong>SCDND Estates</Strong>, where I craft modern user interfaces for two different brands using a <Strong>micro-frontend</Strong> approach. I enjoy building fast, user-friendly websites, e-commerce platforms, and SaaS products for businesses of all sizes. Whether it’s creating something from scratch or improving an existing product, I aim to deliver clean design and smooth functionality.
              </p>
              <p>
                My tech journey began at <Strong>16</Strong> — back when I didn’t even own a PC. I’d spend hours at a cyber café designing logos and playing with MS Paint. That curiosity led me to my first programming language, <Strong>C Programming</Strong> and from there I dived into frontend technologies and modern web development. One of my first real projects was building a tuition coaching website in college simple, but a proud milestone that set my path in motion.
              </p>
              <p>
                Today, I’ve developed multiple web applications for personal projects, freelance clients, and companies. My work spans JavaScript frameworks like <Strong>React</Strong> and <Strong>Next.js</Strong>, back-end tools such as <Strong>Express</Strong> and <Strong>Django</Strong>, and cloud platforms like <Strong>AWS</Strong> and <Strong>Google Cloud</Strong>. I’ve also worked with learning platforms like <Strong>Graphy.io</Strong> and <Strong>Classplus</Strong> to deliver engaging online experiences.
              </p>
              <p>
                Over the years, I’ve learned that building great products is about more than just writing code — it’s about creating scalable, maintainable solutions that users actually enjoy. My go-to stack is <Strong>React</Strong> and <Strong>Next.js</Strong> for the frontend, <Strong>Express</Strong> for the backend, and <Strong>AWS</Strong> or <Strong>Vercel</Strong> for deployment. Every project is a new challenge, and that’s what keeps me hooked.
              </p>
              <p>
                Outside of coding, I teach and record online lectures, watch sci-fi and thriller movies, and brainstorm startup ideas — often while untangling my latest batch of syntax errors. I also love exploring new places, attending tech events, and discovering fresh ideas along the way.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10">
              <h3 className="font-semibold text-lg text-slate-200 mb-3">{preferredStack.title}</h3>
              <ul className="list-disc text-lg list-inside text-slate-400 space-y-1">
                {preferredStack.items.map((item, i) => <li key={i}>{item}</li>)}
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
