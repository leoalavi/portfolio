"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export function ProjectsClient() {
  const projectList = Object.values(projects);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-secondary/3 rounded-full blur-[100px]" />
      </div>

      <AnimatedSection variants={fadeInUp}>
        <SectionHeading as="h1" label="Portfolio" title="Projects" />
        <p className="text-text-secondary -mt-8 mb-12 max-w-xl">
          A focused selection of product and engineering work across full-stack
          web development, Flutter mobile development and applied AI. Source
          code, live deployments and technical details are included where
          publicly available.
        </p>
      </AnimatedSection>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {projectList.map((project, i) => (
          <motion.div key={project.slug} variants={fadeInUp} className="h-full">
            <ProjectCard project={project} featured={i === 0} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

