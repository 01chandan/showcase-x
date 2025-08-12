'use client';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin } from 'lucide-react';
import React from 'react';

// --- Data based on the provided images ---

const aboutMeText = {
  intro: "Hello! I'm Pranay Gupta, a passionate Software Engineer from India, with a deep love for both engineering and design. I enjoy building user-centric web and mobile experiences with a focus on clean design and efficient functionality. Whether it's crafting elegant interfaces or diving into code, I thrive on solving problems and creating impactful digital solutions.",
  journey: "My journey into the world of technology began at a very early age when I was introduced to MS Logo in school. It sparked a lifelong curiosity that led me to explore various programming languages, starting with QBasic, which was my very first official programming language. From there, I moved on to Java, C, and eventually Javascript. Throughout my academic journey, I dove deeper into development, building my own projects, and honing my skills. One of my earliest projects was a website for an inter-college competition called Digital India. I know it might look a bit rough around the edges, but it was my first website, and I'm proud to say it earned me the 2nd position in the competition!",
  current: "Fast forward to today, and I've built several web and mobile applications for both personal learning and freelance clients. My experience has spanned across a range of technologies, including JavaScript frameworks like React and Next.js, back-end technologies such as Express, Java Spring Boot, and cloud platforms like AWS and Azure. Along with these, I have also worked with Salesforce to expand my skill set.",
  philosophy: "Over the years, through my freelance work and my time spent in companies, I've gained extensive knowledge of full-stack development and have learned the importance of building scalable and maintainable applications. My favorite stack to work with includes React and Next.js for the front-end, paired with Express for the back-end, and I often rely on AWS or Vercel for cloud services.",
  hobbies: "When I'm not immersed in code, you'll find me exploring new places and ticking off items from my travel bucket list. I'm also an avid fan of sci-fi and thriller movies, which help me unwind after long coding sessions. Another passion of mine is brainstorming ideas for potential startups, which is my favorite pastime after obsessing over syntax errors!",
};

const preferredStack = {
  title: "Here's a little about my preferred stack:",
  items: [
    "Framework: Next.js",
    "Database: MongoDB, PostgreSQL",
    "CSS: TailwindCSS"
  ]
};

const experienceData = [
  {
    company: "Keysight Technologies",
    logo: "https://placehold.co/48x48/FFFFFF/333333?text=K",
    roles: [
      {
        title: "IT Engineer - Software",
        location: "Gurugram, Haryana, India",
        duration: "Jul 2024 - Present",
        tenure: "1 yr 2 mos",
        details: []
      },
      {
        title: "IT Intern",
        location: "Gurugram, Haryana, India",
        duration: "Jan 2024 - Jul 2024",
        tenure: "7 mos",
        details: [
          "Developed and enhanced the Keysight Support Portal by utilizing Lightning Web Components & Apex Classes to improve overall functionality and efficiency, ensuring a better user experience.",
          "Collaborated with the team in an Agile environment to implement new features and fix bugs on the portal dashboard.",
          "Utilized Copado to streamline and optimize the development and deployment processes for the support portal, ensuring seamless and efficient updates and enhancements.",
          "Implemented an MVP version feature on an internal search platform by incorporating Retrieval-Augmented Generation to generate concise summaries of search queries, making it easier for users to understand the query results without reviewing individual links."
        ]
      }
    ]
  },
  {
    company: "ProPeers",
    logo: "https://placehold.co/48x48/3B82F6/FFFFFF?text=P",
    roles: [
      {
        title: "Software Engineer Intern",
        location: "New Delhi, India",
        duration: "Apr 2023 - Dec 2023",
        tenure: "9 mos",
        details: [
            "Built, deployed and scaled ProPeers website using Next.js and TypeScript, achieving 50,000+ daily active users and optimizing load time to 0.2 seconds via Vercel and Azure.",
            "Contributed to the ProPeers Mobile App (React Native) by implementing various features that significantly enhanced user engagement and overall app experience.",
            "Optimized API performance, boosting response speed by an 35 times with a caching system powered by Redis. Implemented a robust queue system using Redis for tasks like sending emails and push notifications, ensuring efficient task handling.",
            "Developed an intuitive admin dashboard from the ground up that is used for user management with secure API calls to ensure a user-friendly interface."
        ]
      }
    ]
  },
   {
    company: "CodeHelp",
    logo: "https://placehold.co/48x48/14B8A6/FFFFFF?text=C",
    roles: [
      {
        title: "Technical Consultant",
        location: "Remote",
        duration: "Sep 2022 - Jun 2023",
        tenure: "10 mos",
        details: [
            "Built and scaled the platform with 70,000+ users, using the latest technologies and tools to ensure optimal performance and user experience.",
            "Developed and implemented new features and enhancements to the platform, including a user-friendly interface, and enhanced user engagement dashboard."
        ]
      },
      {
        title: "Teaching Assistant",
        location: "Remote",
        duration: "Jan 2023 - Jun 2023",
        tenure: "6 mos",
        details: [
            "Prepared course materials including assignments, quizzes, and projects to help students understand and apply various concepts related to full-stack web development using the MERN stack.",
            "Assisted students in understanding and implementing various concepts related to full-stack web development using the MERN stack, including React, Node.js, Express, and MongoDB.",
            "Conducted regular code reviews to provide feedback on students' projects and assignments, ensuring they adhere to best practices and coding standards."
        ]
      }
    ]
  },
  {
    company: "Weframe.tech",
    logo: "https://placehold.co/48x48/8B5CF6/FFFFFF?text=W",
    roles: [
        {
            title: "Frontend Web Developer",
            location: "Bengaluru, Karnataka, India",
            duration: "Dec 2021 - Dec 2022",
            tenure: "1 yr 1 mo",
            details: [] // Details not provided in the image
        }
    ]
  }
];


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

const experienceItemVariants = {
    hidden: { scale: 0.95, y: 20, opacity: 0 },
    visible: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};


// --- Sub-components ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    // variants={itemVariants}
    className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 md:mb-12"
  >
    {children}
  </motion.h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <motion.p 
//   variants={itemVariants} 
  className="text-slate-400 mb-6 leading-relaxed">
    {children}
  </motion.p>
);

const ExperienceCard = ({ experience }: { experience: (typeof experienceData)[0] }) => (
    <motion.div
        // variants={experienceItemVariants}
        className="bg-slate-800/80 rounded-xl p-6 md:p-8 mb-6 ring-1 ring-white/10 shadow-lg"
    >
        {/* Card Header */}
        <div className="flex items-start justify-between gap-4">
            <div className="flex items-start">
                <img src={experience.logo} alt={`${experience.company} logo`} className="w-12 h-12 rounded-md object-cover" />
                <div className="ml-4">
                    <h3 className="text-xl font-bold text-slate-100">{experience.company}</h3>
                </div>
            </div>
            <div className="text-sm text-slate-400 text-right flex-shrink-0">
                <div>{experience.roles[0].duration}</div>
                <div className="text-slate-500">{experience.roles[0].tenure}</div>
            </div>
        </div>

        {/* Roles Section with internal timeline */}
        <div className="mt-6">
            {experience.roles.map((role, index) => (
                <div key={index} className="relative pl-8">
                    {/* Timeline Connector Line - only shown if there is a next role */}
                    {index < experience.roles.length - 1 && (
                        <div className="absolute left-[7px] top-5 h-full w-0.5 bg-slate-600/50"></div>
                    )}

                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2">
                        <div className="w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center ring-4 ring-slate-800/80">
                            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Role Details */}
                    <div className="pb-8 last:pb-0">
                         <h4 className="font-semibold text-lg text-teal-400">{role.title}</h4>
                        <div className="flex flex-wrap items-center text-sm text-slate-500 mt-1 mb-3 gap-x-4 gap-y-1">
                            <div className="flex items-center">
                                <MapPin size={14} className="mr-1.5" />
                                <span>{role.location}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar size={14} className="mr-1.5" />
                                <span>{role.duration} ({role.tenure})</span>
                            </div>
                        </div>
                        {role.details.length > 0 && (
                            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-400 text-[15px]">
                                {role.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);


// --- Main Page Component ---

export default function AboutPage() {
  return (
    <main className="bg-slate-900 text-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 md:p-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* About Me Section */}
          <motion.section id="about" className="mb-16 md:mb-24">
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>
              {aboutMeText.intro}
            </Paragraph>
            <Paragraph>
              {aboutMeText.journey.split('Digital India')[0]}
              <a href="#" className="text-teal-400 font-semibold hover:underline">Digital India</a>
              {aboutMeText.journey.split('Digital India')[1]}
            </Paragraph>
            <Paragraph>{aboutMeText.current}</Paragraph>
            <Paragraph>{aboutMeText.philosophy}</Paragraph>
            <Paragraph>{aboutMeText.hobbies}</Paragraph>
            
            <motion.div 
            // variants={itemVariants}
             className="mt-10">
                <h3 className="font-semibold text-slate-200 mb-3">{preferredStack.title}</h3>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {preferredStack.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section id="experience">
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
