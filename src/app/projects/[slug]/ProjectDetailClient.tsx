"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Project } from "@/lib/data";

function DetailSection({ title, text }: { title: string; text: string }) {
  return (
    <motion.div variants={fadeInUp} className="glass-card p-6">
      <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
        {title}
      </h2>
      <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
    </motion.div>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        {/* Header */}
        <motion.div variants={fadeInUp} className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              {project.category}
            </span>
            {project.status && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                {project.status}
              </span>
            )}
            <span className="text-xs text-text-muted">{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                <ExternalLink size={14} /> {project.links.demoLabel ?? "Live Demo"}
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle text-text-secondary text-sm font-medium border border-border-subtle hover:border-accent/30 hover:text-accent transition-colors"
              >
                <GithubIcon size={14} /> {project.links.repoLabel ?? "View Source"}
              </a>
            )}
            {project.links.repoAlt && (
              <a
                href={project.links.repoAlt}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle text-text-secondary text-sm font-medium border border-border-subtle hover:border-accent/30 hover:text-accent transition-colors"
              >
                <GithubIcon size={14} /> {project.links.repoAltLabel ?? "View Source"}
              </a>
            )}
          </div>
        </motion.div>

        {/* Case study sections */}
        {project.caseStudy ? (
          <>
            <DetailSection title="Problem & Context" text={project.caseStudy.context} />
            <DetailSection title="What I Built" text={project.caseStudy.whatIBuilt} />
            <DetailSection title="My Contribution" text={project.caseStudy.contribution} />
            {project.caseStudy.architecture && (
              <DetailSection
                title="Architecture & Engineering Decisions"
                text={project.caseStudy.architecture}
              />
            )}

            {/* Tech stack */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-overlay-subtle text-text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.caseStudy.challenges && (
              <DetailSection title="Technical Challenges" text={project.caseStudy.challenges} />
            )}
            {project.caseStudy.testing && (
              <DetailSection title="Testing" text={project.caseStudy.testing} />
            )}
            <DetailSection title="Deployment & Release" text={project.caseStudy.deployment} />
            <DetailSection
              title="Stakeholder & User Impact"
              text={project.caseStudy.stakeholderImpact}
            />
            <DetailSection title="Current Status" text={project.caseStudy.currentStatus} />
            {project.caseStudy.nextSteps && (
              <DetailSection title="What I'd Improve Next" text={project.caseStudy.nextSteps} />
            )}
          </>
        ) : (
          <>
            {project.context && <DetailSection title="Problem & Context" text={project.context} />}
            {project.fullDescription && (
              <DetailSection title="What I Built" text={project.fullDescription} />
            )}

            {/* Tech stack */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-overlay-subtle text-text-secondary border border-border-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.highlights && project.highlights.length > 0 && (
              <motion.div variants={fadeInUp} className="glass-card p-6">
                <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                  My Contribution &amp; Key Technical Decisions
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-accent mt-1 shrink-0 text-sm">▸</span>
                      <span className="text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.impact && (
              <DetailSection title="Real-World Impact & Status" text={project.impact} />
            )}
          </>
        )}

        {/* Screenshots — only rendered when the field is present */}
        {project.screenshots !== undefined && (
          <motion.div variants={fadeInUp} className="glass-card p-6">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Screenshots
            </h2>

            {project.screenshots.length === 0 ? (
              /* Placeholder slots — ready for real images */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="aspect-[9/16] sm:aspect-video rounded-xl border-2 border-dashed border-border-subtle bg-overlay-subtle flex flex-col items-center justify-center gap-3 text-text-muted"
                  >
                    <ImageIcon size={28} className="opacity-40" />
                    <span className="text-xs font-medium tracking-wide uppercase opacity-60">
                      Screenshot coming soon
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              /* Real screenshots */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <div key={src} className="relative aspect-video rounded-xl overflow-hidden border border-border-subtle">
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

