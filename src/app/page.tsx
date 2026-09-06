"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Code2,
  Smartphone,
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { projects, skillGroups } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ─── Ticker ─── */
const TICKER = [
  "TypeScript",
"React",
  "Next.js",
  "Flutter",
  "Dart",
  "Python",
  "PyTorch",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Vercel AI SDK",
  "Vitest",
  "Playwright",
  "GitHub Actions",
  "CI/CD",
  "Accessibility",
];

export default function Home() {
  const projectList = Object.values(projects);

  return (
    <div>
      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-secondary/6 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/3 rounded-full blur-[150px]" />
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/8 border border-accent/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-success opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-medium text-text-secondary">
                Available for graduate roles · Australian citizen · Graduating
                November 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="text-gradient">Leo</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary">
                Software Engineer
              </h2>
              <p className="text-sm sm:text-base text-text-muted font-medium">
Full-Stack, Mobile & Applied AI · Graduating November 2026
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-text-secondary leading-relaxed max-w-xl mb-6"
            >
I build full-stack web, Flutter mobile and applied AI products,
              including a live student platform and a mobile app currently in
              external testing for a university event. I&apos;m a final-year IT
              student at{" "}
              <span className="text-foreground font-medium">
                Macquarie University
              </span>
              , Software Intern at{" "}
              <span className="text-foreground font-medium">Calumino</span>,
              and co-founder of{" "}
              <span className="text-foreground font-medium">
                Syllabus Sync
              </span>
              .
            </motion.p>

            {/* Info chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                {
                  icon: GraduationCap,
                  text: "Macquarie University · Bachelor of Information Technology · November 2026",
                },
                { icon: Briefcase, text: "Software Intern @ Calumino" },
                { icon: MapPin, text: "Sydney, Australia" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium"
                >
                  <Icon size={12} />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-overlay hover:bg-overlay-strong text-foreground text-sm font-semibold rounded-xl border border-border-default hover:border-border-accent transition-all duration-300"
              >
                <Download size={16} /> View Resume
              </Link>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-overlay-subtle hover:bg-overlay-hover border border-border-subtle hover:border-accent/30 text-text-muted hover:text-accent transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-overlay-subtle hover:bg-overlay-hover border border-border-subtle hover:border-accent/30 text-text-muted hover:text-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </motion.div>
          </div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center shrink-0"
            >
              <div className="relative">
                {/* Decorative glow ring */}
                <div className="absolute -inset-4 rounded-full bg-linear-to-br from-accent/20 via-secondary/10 to-accent/5 blur-2xl opacity-60" />
                {/* White ring + photo */}
                <div className="relative w-64 h-64 xl:w-72 xl:h-72 rounded-full p-1 bg-linear-to-br from-accent/40 via-secondary/20 to-accent/10">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-border-subtle">
                    <Image
                      src="/leo-profile.jpeg"
                      alt="Leo Alavi, Graduate Software Engineer"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Accent dot */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success border-4 border-background" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium text-text-muted tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-linear-to-b from-accent/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
          TECH TICKER
      ═══════════════════════════════════ */}
      <div
        className="border-y border-border-subtle bg-surface-1/50 py-3 overflow-hidden"
        role="marquee"
        aria-label="Technologies I work with"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0"
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {TICKER.map((item) => (
                <span key={item} className="flex items-center shrink-0">
                  <span className="text-xs font-medium text-text-muted tracking-wide px-6">
                    {item}
                  </span>
                  <span className="text-accent/40 text-[8px]">●</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════
          FEATURED PROJECT
      ═══════════════════════════════════ */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading number="01" label="Featured Work" title="Projects" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projectList.map((project) => (
              <motion.div key={project.slug} variants={fadeInUp} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </section>
      </AnimatedSection>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* ═══════════════════════════════════
          WHAT I DO
      ═══════════════════════════════════ */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading number="02" label="Focus" title="What I Do" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Code2,
                title: "Full-Stack Development",
                desc: "Building accessible, database-driven web applications using React, Next.js, TypeScript, Supabase and PostgreSQL, with authentication, secure data access, testing and CI/CD.",
                color: "text-accent",
                bg: "bg-accent/10",
                border: "border-accent/20",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                desc: "Building cross-platform Flutter applications with Dart, responsive interfaces, app navigation, deep linking, local data and automated testing.",
                color: "text-secondary",
                bg: "bg-secondary/10",
                border: "border-secondary/20",
              },
              {
                icon: Sparkles,
                title: "Applied AI",
                desc: "Developing AI-assisted product experiences and machine-learning projects using Python, PyTorch and the Vercel AI SDK, with streaming interfaces, model evaluation, interpretability and live deployments.",
                color: "text-warm",
                bg: "bg-warm/10",
                border: "border-warm/20",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-5`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* ═══════════════════════════════════
          SKILLS
      ═══════════════════════════════════ */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading
            number="03"
            label="Tech Stack"
            title="Skills & Tools"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="w-32 shrink-0">
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {group.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-overlay-subtle text-text-secondary border border-border-subtle hover:border-accent/30 hover:text-accent hover:bg-accent/4 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* ═══════════════════════════════════
          CTA
      ═══════════════════════════════════ */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="relative glass-card p-10 md:p-16 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-r from-accent/6 via-transparent to-secondary/4 pointer-events-none" />

            <Sparkles className="w-8 h-8 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open to Graduate Software Roles in Sydney
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-relaxed">
              I am looking for graduate and junior engineering roles where I can
              contribute to real product development, learn from experienced
              engineers and continue strengthening my software-engineering
              fundamentals across web, mobile and applied AI.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-overlay hover:bg-overlay-strong text-foreground text-sm font-semibold rounded-xl border border-border-default hover:border-border-accent transition-all duration-300"
              >
                About Me
              </Link>
            </div>
            <p className="relative mt-6 text-xs text-text-muted">
              Australian citizen · Available for Sydney-based on-site, hybrid and
              remote opportunities
            </p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
