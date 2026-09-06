"use client";

import { Mail, MapPin, GraduationCap, Heart, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GITHUB_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/constants";
import { skillGroups, experiences, education } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function AboutClient() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-secondary/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* ─── HERO ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left content */}
          <motion.div variants={fadeInUp} className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-medium text-accent tracking-widest uppercase">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Leo Alavi
              </h1>
              <p className="text-xl text-accent-light font-medium">
                Graduate Software Engineer
              </p>
              <p className="text-sm text-text-muted font-medium">
Full-Stack, Mobile & Applied AI · Macquarie University
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 space-y-4">
              <p className="text-text-secondary leading-relaxed">
                I am an Australian citizen and final-year Bachelor of Information
                Technology student at{" "}
                <span className="text-foreground font-medium">
                  Macquarie University
                </span>
                , majoring in Artificial Intelligence and Web and Mobile
                Application Development. I am graduating in November 2026 and
                seeking graduate and junior software engineering opportunities
                in Sydney.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My work spans full-stack web development, Flutter mobile
                applications and applied AI. I primarily work with TypeScript,
                React, Next.js, Flutter, Dart, Python, Supabase and
                PostgreSQL, with practical experience in API integration,
                authentication, deep linking, accessibility, automated
                testing and CI/CD.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I am currently a{" "}
                <span className="text-foreground font-medium">
                  Software Intern at Calumino
                </span>
                , where I debug issues and implement features across internal
                software tools and computer vision-related workflows. The
                experience has strengthened my approach to structured
                debugging, testing and working within an established
                engineering codebase.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I also co-founded{" "}
                <span className="text-accent-light font-medium">
                  Syllabus Sync
                </span>
                , a full-stack student productivity platform with integrated
                AI study tools through Sylla, selected for the{" "}
                <span className="text-foreground font-medium">
                  Macquarie University Incubator
                </span>
                .
              </p>
              <p className="text-text-secondary leading-relaxed">
                Alongside this, I&apos;ve worked on Flutter mobile products
                including{" "}
                <span className="text-accent-light font-medium">
                  MQ Navigation
                </span>{" "}
                and the separate{" "}
                <span className="text-accent-light font-medium">
                  Astronomy Open Night event navigation app
                </span>
                , gaining experience in navigation, deep linking,
                accessibility, stakeholder feedback, TestFlight testing and
                mobile release preparation.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m also part of a Macquarie University PACE team
                developing an AI-powered retail assistant with{" "}
                <span className="text-foreground font-medium">
                  Salesforce
                </span>{" "}
                as the industry sponsor.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I care about building software that is maintainable,
                well-tested and useful to real people, with attention to
                product quality, accessibility and reliable engineering.
              </p>
            </div>

            {/* Info row */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium">
                <MapPin size={12} /> Sydney, Australia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium">
                <GraduationCap size={12} /> Macquarie University · November 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-overlay-subtle border border-border-subtle text-text-muted text-xs font-medium">
                <Globe size={12} /> Australian citizen
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/8 border border-accent/20 text-accent text-xs font-medium">
                <Heart size={12} /> Available for graduate roles
              </span>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-overlay-subtle border border-border-subtle hover:border-accent/30 hover:text-accent text-text-secondary text-sm font-medium transition-all"
              >
                <Mail size={16} /> Email
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-accent/25"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-overlay hover:bg-overlay-strong text-foreground text-sm font-semibold rounded-xl border border-border-default hover:border-border-accent transition-all"
              >
                View Resume
              </Link>
            </div>
          </motion.div>

          {/* Right — Photo + Stats */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-linear-to-br from-accent/20 via-secondary/10 to-accent/5 blur-xl opacity-50" />
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl p-0.5 bg-linear-to-br from-accent/40 via-secondary/20 to-accent/10">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white ring-1 ring-border-subtle">
                    <Image
                      src="/leo-profile.jpeg"
                      alt="Leo Alavi"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            {[
{ value: "Nov 2026", label: "Expected Graduation", color: "text-accent" },
              { value: "Web + Mobile", label: "Primary Focus", color: "text-secondary" },
              { value: "Applied AI", label: "Technical Interest", color: "text-warm" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-card p-5 text-center hover:scale-[1.02] transition-transform"
              >
                <div className={`text-2xl font-bold font-mono ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── SKILLS ─── */}
        <AnimatedSection>
          <SectionHeading number="01" label="Technical" title="Skills & Tools" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-5"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.label} variants={fadeInUp}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-36 shrink-0 pt-1">
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* ─── EXPERIENCE ─── */}
        <AnimatedSection>
          <SectionHeading number="02" label="Work" title="Experience" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            {experiences.map((exp) => (
              <motion.div key={`${exp.company}-${exp.title}`} variants={fadeInUp}>
                <div className="glass-card p-6 hover:scale-[1.01] transition-transform">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-accent-light">{exp.company}</p>
                      {exp.note && (
                        <p className="text-xs text-text-muted mt-0.5">{exp.note}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          exp.type === "technical"
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-secondary/10 text-secondary border border-secondary/20"
                        }`}
                      >
                        {exp.type === "technical" ? "Technical" : "Customer-Facing"}
                      </span>
                      <span className="text-xs text-text-muted">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* ─── EDUCATION ─── */}
        <AnimatedSection>
          <SectionHeading number="03" label="Academic" title="Education" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {education.map((edu) => (
              <motion.div key={edu.degree} variants={fadeInUp}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-text-muted">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-xs text-accent-light font-medium mb-3">
                    {edu.period}
                  </p>
                  <ul className="space-y-1.5">
                    {edu.details.map((d) => (
                      <li key={d} className="text-xs text-text-secondary leading-relaxed">
                        • {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
