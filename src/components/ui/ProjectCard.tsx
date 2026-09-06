"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative glass-card p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Category + status badges */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {project.category}
          </span>
          {project.status && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              {project.status}
            </span>
          )}
        </div>
        <span className="text-xs text-text-muted shrink-0">{project.year}</span>
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-foreground group-hover:text-accent transition-colors mb-3 ${
          featured ? "text-2xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.slice(0, featured ? 7 : 5).map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-overlay-subtle text-text-muted border border-border-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mt-auto pt-1">
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={14} /> {project.links.repoLabel ?? "GitHub"}
          </a>
        )}
        {project.links.repoAlt && (
          <a
            href={project.links.repoAlt}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={14} /> {project.links.repoAltLabel ?? "GitHub"}
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-accent transition-colors relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} /> {project.links.demoLabel ?? "Live Demo"}
          </a>
        )}
        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-text-muted group-hover:text-accent transition-colors">
          View Details <ArrowUpRight size={14} />
        </span>
      </div>

      {/* Full card link */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 rounded-2xl"
        aria-label={`View ${project.title} details`}
      />
    </motion.div>
  );
}

