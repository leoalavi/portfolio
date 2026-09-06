"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import type { Project } from "@/lib/data";

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeInUp} className="glass-card p-6 md:p-8">
      <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </motion.div>
  );
}

function SubSection({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
    </div>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const cs = project.caseStudy;

  const problem = cs?.context ?? project.context;
  const whatIBuilt = cs?.whatIBuilt ?? project.fullDescription;
  const showOverview = Boolean(problem || whatIBuilt || cs?.contribution);

  const currentStatus = cs?.currentStatus ?? project.impact;
  const showOutcome = Boolean(
    cs?.stakeholderImpact ||
      currentStatus ||
      cs?.nextSteps ||
      (!cs && project.highlights && project.highlights.length > 0)
  );

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

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6">
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

        {/* 1. Project Overview — Problem, What I Built, My Contribution */}
        {showOverview && (
          <SectionCard title="Project Overview">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {problem && <SubSection title="Problem" text={problem} />}
              {whatIBuilt && <SubSection title="What I Built" text={whatIBuilt} />}
            </div>
            {cs?.contribution && (
              <div className="pt-6 border-t border-border-subtle">
                <SubSection title="My Contribution" text={cs.contribution} />
              </div>
            )}
          </SectionCard>
        )}

        {/* 2. Engineering — Architecture, Tech Stack, Testing & Delivery */}
        <SectionCard title="Engineering">
          {cs?.architecture && (
            <SubSection title="Architecture & Decisions" text={cs.architecture} />
          )}

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h3>
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
          </div>

          {(cs?.testing || cs?.deployment) && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Testing &amp; Delivery
              </h3>
              <div className="space-y-2">
                {cs?.testing && (
                  <p className="text-sm text-text-secondary leading-relaxed">{cs.testing}</p>
                )}
                {cs?.deployment && (
                  <p className="text-sm text-text-secondary leading-relaxed">{cs.deployment}</p>
                )}
              </div>
            </div>
          )}
        </SectionCard>

        {/* 3. Outcome, Current Status & Future Direction */}
        {showOutcome && (
          <SectionCard title="Outcome & Current Status">
            {cs?.stakeholderImpact && (
              <SubSection title="Stakeholder & User Impact" text={cs.stakeholderImpact} />
            )}
            {currentStatus && <SubSection title="Current Status" text={currentStatus} />}
            {!cs && project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {cs?.nextSteps && (
              <SubSection title={cs.nextStepsLabel ?? "Future Direction"} text={cs.nextSteps} />
            )}
          </SectionCard>
        )}

        {/* Screenshots — only rendered when the field is present */}
        {project.screenshots !== undefined && (
          <motion.div variants={fadeInUp} className="glass-card p-6 md:p-8">
            <h2 className="text-xs font-semibold text-accent uppercase tracking-widest mb-6">
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
