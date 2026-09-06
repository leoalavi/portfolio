export interface CaseStudy {
  /** Context / Problem */
  context: string;
  /** What I Built */
  whatIBuilt: string;
  /** My Contribution */
  contribution: string;
  /** Architecture / Engineering Decisions */
  architecture?: string;
  /** Technical Challenges */
  challenges?: string;
  /** Testing */
  testing?: string;
  /** Deployment / Release */
  deployment: string;
  /** Stakeholder / User Impact */
  stakeholderImpact: string;
  /** Current Status */
  currentStatus: string;
  /** What I Would Improve Next — explicitly planned/roadmap items only */
  nextSteps?: string;
  /** Optional custom heading for the nextSteps section (defaults to "Future Direction") */
  nextStepsLabel?: string;
}

export interface Project {
  slug: string;
  title: string;
  category:
    | "Full-Stack Web"
    | "Applied AI Product"
    | "Mobile Development"
    | "AI / Machine Learning";
  /** Concise recruiter-facing status badge, e.g. "Live", "External TestFlight", "Industry Project" */
  status?: string;
  year: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    demoLabel?: string;
    repo?: string;
    repoLabel?: string;
    repoAlt?: string;
    repoAltLabel?: string;
  };
  /** Full structured case study, used by flagship projects with a detail page */
  caseStudy?: CaseStudy;
  /** Legacy / simple fields, used when no full case study is provided */
  context?: string;
  fullDescription?: string;
  impact?: string;
  highlights?: string[];
  /**
   * Screenshot URLs for the project detail page.
   * - Omit (undefined): no screenshots section rendered.
   * - Empty array: placeholder slots rendered, ready for real images later.
   * - Populated array: actual screenshots rendered.
   */
  screenshots?: string[];
  /** When true, this entry is excluded from the resume projects section */
  resumeHide?: boolean;
}

export const projects: Record<string, Project> = {
  "syllabus-sync": {
    slug: "syllabus-sync",
    title: "Syllabus Sync: Full-Stack Student Platform with Integrated AI Assistant",
    category: "Full-Stack Web",
    status: "MQ Incubator",
    year: "Dec 2025 – Present",
    description:
      "A full-stack student productivity platform for Macquarie University students, covering academic planning, deadlines and campus information. Sylla, an integrated AI assistant built into the platform, adds AI-assisted explanations, summaries, flashcards, quizzes and study planning. Selected for the Macquarie University Incubator.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Vercel AI SDK",
      "Tailwind CSS",
      "Vitest",
      "Playwright",
    ],
    links: {
      repo: "https://github.com/leoalavi/syllabus-sync",
      demo: "https://syllabus-sync.app",
      demoLabel: "Live Platform",
      repoAlt: "https://github.com/leoalavi/Sylla",
      repoAltLabel: "Sylla (AI Assistant) Repo",
    },
    caseStudy: {
      context:
        "Macquarie University students juggle deadlines, timetables and study material across scattered tools, with no single place that also helps them study more effectively. Syllabus Sync was co-founded to bring academic planning and campus information into one platform, with an integrated AI assistant to help students study within the same product.",
      whatIBuilt:
        "A full-stack web platform built with Next.js, React, TypeScript and Supabase (PostgreSQL), covering academic planning, deadlines, events and campus information, with authentication and a responsive, accessible UI. Sylla, built with the Vercel AI SDK, is integrated directly into the platform and provides AI-assisted explanations, summaries, flashcards, quizzes, study planning and persistent study conversations.",
      contribution:
        "Co-founder and developer. I own the frontend architecture, responsive design and accessibility, the Supabase database and authentication layer, and the integration of the AI assistant into the main product, alongside automated testing and CI/CD.",
      architecture:
        "Next.js App Router with a Supabase Postgres backend for data and authentication, and the Vercel AI SDK for the assistant's streaming responses and persistent conversation history. The AI assistant is built as an integrated feature area within the platform rather than a separate application.",
      challenges:
        "Balancing a broad academic-planning feature set with a genuinely useful AI assistant meant being deliberate about scope, keeping the study tools (summaries, flashcards, quizzes, planning) focused rather than open-ended, and keeping authentication and data access consistent across both the planning and AI-assisted parts of the platform.",
      testing:
        "Automated testing with Vitest and Playwright, with CI/CD via GitHub Actions and Vercel for continuous deployment.",
      deployment: "Live, deployed on Vercel.",
      stakeholderImpact:
        "In active use by students, and presented to Macquarie University academics and stakeholders, leading to selection for the Macquarie University Incubator for further validation, mentoring and product development.",
      currentStatus:
        "Live and actively developed, with the AI assistant available inside the platform.",
      nextSteps:
        "Planned: deeper personalisation of study recommendations and expanded evaluation of the AI assistant's outputs as it develops further. Not yet implemented.",
    },
    fullDescription:
      "Syllabus Sync is a full-stack student productivity platform built with Next.js, React, TypeScript, Tailwind CSS and Supabase (PostgreSQL), covering academic planning, deadlines, events and campus information. An integrated AI assistant, built with the Vercel AI SDK, provides AI-assisted explanations, summaries, flashcards, quizzes, study planning and persistent study conversations directly inside the platform.",
    highlights: [
      "Co-founded and co-developed a full-stack student productivity platform with an integrated AI study assistant",
      "Own frontend architecture, responsive design, accessibility and authentication using Next.js, TypeScript and Supabase",
      "Integrated an AI assistant (Vercel AI SDK) directly into the platform for explanations, summaries, flashcards, quizzes and study planning",
      "Wrote Vitest test coverage and configured GitHub Actions and Vercel CI/CD pipelines for reliable delivery",
      "Presented to Macquarie University academics and stakeholders, leading to selection for the Macquarie University Incubator",
    ],
  },
  "mq-navigation": {
    slug: "mq-navigation",
    title: "MQ Navigation: Campus Navigation Platform",
    category: "Mobile Development",
    status: "Campus Navigation",
    year: "Mar 2026 – Present",
    description:
      "A Flutter-based campus navigation app for Macquarie University, supporting destination discovery, route previews, transport information and deep linking. Designed as a reusable campus navigation platform, with a planned future integration of MQ Journey — an Open Day-focused mobile experience — as an optional event mode within the same app. In development, not yet publicly released.",
    tags: [
      "Flutter",
      "Dart",
      "GoRouter",
      "Deep Linking",
      "Accessibility",
      "Flutter Testing",
      "GitHub Actions",
    ],
    links: {
      repo: "https://github.com/leoalavi/MQ_Navigation",
    },
    caseStudy: {
      context:
        "Finding buildings, transport options and services across a large university campus is a recurring problem for students and visitors. MQ Navigation was built as a reusable Flutter navigation platform to address this, rather than a one-off app tied to a single event or use case.",
      whatIBuilt:
        "A Flutter mobile app with destination discovery, route previews, transport information and access to key university locations, using GoRouter for navigation and deep linking. It receives destination-based deep links from the Syllabus Sync web platform, connecting a web action directly to a mobile navigation flow.",
      contribution:
        "Co-developed the app in Flutter and Dart, contributing the navigation architecture, the deep-linking integration with Syllabus Sync, and the accessibility-focused mobile interface.",
      architecture:
        "Built with Flutter and Dart, using GoRouter for routing and deep linking, with a mobile-first, accessibility-focused interface.",
      testing: "Automated Flutter testing with GitHub Actions CI.",
      deployment: "In development; not yet publicly released.",
      stakeholderImpact:
        "Forms the mobile layer connected to the Syllabus Sync ecosystem via destination deep links.",
      currentStatus:
        "In active development as the core, reusable campus navigation platform.",
      nextSteps:
        "MQ Journey was originally developed as an event-focused experience for Macquarie University Open Day. Rather than maintaining two separate mobile apps, the plan is to integrate MQ Journey into MQ Navigation as an optional Open Day experience: a normal user gets standard campus navigation, while an Open Day visitor could enter an event-specific mode with Open Day destinations and visitor journeys layered on the same navigation, deep-linking and accessibility foundation. This is planned future work and is not yet implemented.",
      nextStepsLabel: "MQ Journey and Open Day",
    },
    fullDescription:
      "MQ Navigation is a Flutter mobile app with destination discovery, route previews, transport information and access to key university locations, using GoRouter for navigation and deep linking. It receives destination-based deep links from the Syllabus Sync web platform, connecting a web action directly to a mobile navigation flow.",
    highlights: [
      "Co-developed a reusable Flutter campus navigation platform covering destination discovery, route previews and transport information",
      "Implemented destination-based deep linking between Syllabus Sync and the mobile app",
      "Designed a mobile-first, accessibility-focused interface with automated Flutter testing via GitHub Actions CI",
    ],
  },
  "astronomy-open-night": {
    slug: "astronomy-open-night",
    title: "Astronomy Open Night: Event Navigation App",
    category: "Mobile Development",
    status: "External TestFlight",
    year: "2026",
    description:
      "A standalone Flutter event navigation app co-developed for Macquarie University's Astronomy Open Night in collaboration with the organiser team and course staff, covering venue navigation, event information and in-app Google Maps walking directions. In external TestFlight review, preparing for App Store and Google Play release. Developed by student app developers, not an official Macquarie University product.",
    tags: [
      "Flutter",
      "Dart",
      "Google Maps SDK",
      "Deep Linking",
      "Xcode",
      "App Store Connect",
      "TestFlight",
      "Google Play Console",
    ],
    links: {},
    caseStudy: {
      context:
        "Astronomy Open Night needed a way for attendees to find venues, sessions and walking routes across campus on the night. I worked with the Astronomy Open Night organiser team and course staff to scope and build a dedicated navigation app for the real event, not a classroom exercise. This is a standalone project, separate from MQ Navigation.",
      whatIBuilt:
        "A Flutter mobile app for event navigation and destination discovery, covering venue and event information, campus locations and directions, and in-app Google Maps integration that provides walking directions from the user's current location to a selected venue. The app supports deep linking, event-specific content, and was built with accessibility considerations throughout.",
      contribution:
        "Co-developed the app in Flutter, contributing navigation, the Google Maps walking-directions integration and event-specific content. I personally led the release engineering: Apple signing, bundle identifier, certificates and provisioning through Xcode and App Store Connect, TestFlight group setup, and the Google Play developer account setup.",
      architecture:
        "Built in Flutter, with in-app Google Maps integration for walking directions and an event-specific content setup scoped to Astronomy Open Night's venues and sessions.",
      challenges:
        "Coordinating a real release timeline against a fixed event date meant getting Apple's signing, provisioning and TestFlight process right under time pressure, and incorporating organiser feedback on content and venues without derailing the release schedule.",
      testing:
        "Final testing and an external organiser review cycle through TestFlight ahead of public release, alongside Apple's standard review process for TestFlight builds.",
      deployment:
        "Apple and Google Play developer accounts set up. The latest iOS build has been approved for external TestFlight, with external organiser review underway. In final release preparation for the App Store and Google Play, including privacy policy, store assets and metadata. Not yet publicly released.",
      stakeholderImpact:
        "Built directly with the Astronomy Open Night organiser team and Macquarie University course staff for a real event, including a stakeholder walkthrough and content updates from organisers.",
      currentStatus: "External TestFlight review; final release preparation.",
      nextSteps:
        "Planned: public release on the Apple App Store and Google Play once organiser review and store submission are complete.",
    },
    fullDescription:
      "A Flutter mobile app for event navigation and destination discovery, covering venue and event information, campus locations and directions, and in-app Google Maps integration that provides walking directions from the user's current location to a selected venue. The app supports deep linking, event-specific content, and was built with accessibility considerations throughout.",
    highlights: [
      "Co-developed the app in Flutter, covering event navigation, venue and destination information, and in-app Google Maps walking directions",
      "Configured Apple signing, bundle identifier, certificates and provisioning through Xcode and App Store Connect, and set up internal and external TestFlight groups",
      "Set up the Google Play developer account and release track alongside the iOS release process",
      "Coordinated a stakeholder walkthrough and organiser review with the Astronomy Open Night team and course staff ahead of submission",
    ],
  },
  "salesforce-ai-retail-agent": {
    slug: "salesforce-ai-retail-agent",
    title: "Salesforce AI Retail Agent",
    category: "Applied AI Product",
    status: "Industry Project",
    year: "2026",
    description:
      "An AI-powered retail assistant developed through Macquarie University's PACE program with Salesforce as the industry partner, focused on structured product recommendations, customer constraints and cross-sell/upsell workflows using external LLM APIs. An active, in-development project shaped by sponsor feedback.",
    tags: ["Python", "LLM APIs", "Retail Domain", "Salesforce PACE"],
    links: {},
    caseStudy: {
      context:
        "Delivered through Macquarie University's PACE program in partnership with Salesforce, the brief was to build a working AI-powered retail assistant that reasons over structured retailer product data rather than acting as a generic chatbot.",
      whatIBuilt:
        "An in-development AI-powered retail assistant designed around structured product data, customer constraints and recommendation workflows such as product recommendations and cross-sell/upsell, using external LLM APIs. The target architecture is intentionally model- and provider-flexible rather than locked to one LLM vendor. This describes the project's direction and target design; specific components such as tool calling, structured outputs and evaluation are still being built and are not yet fully implemented.",
      contribution:
        "Contributing within a Macquarie University PACE team on the industry-sponsored brief, focused on the retail recommendation logic and on keeping the architecture provider-flexible rather than tied to a single LLM vendor.",
      architecture:
        "Planned architecture: user request, then intent and constraint extraction, then tool calling (product search, filter by price, check availability, compare products, find alternatives or complementary products), then recommendation logic, then a structured response. This is the current target design; not all stages are fully implemented yet.",
      challenges:
        "Working with real, structured retailer product data rather than a toy dataset, and designing an architecture that avoids locking into a single LLM provider while still supporting reliable tool calling and recommendations, both current focus areas as the project develops.",
      testing:
        "AI evaluation and testing practices are a current focus area as the implementation matures; not yet fully in place.",
      deployment: "In development; not yet deployed or released.",
      stakeholderImpact:
        "Delivered with Salesforce as the industry sponsor, with sponsor check-ins and iterative feedback shaping scope and direction.",
      currentStatus:
        "Active, in-progress industry project. Capabilities such as tool calling, structured outputs, evaluation and guardrails are current or planned work rather than completed features, and are only described as done once implemented.",
      nextSteps:
        "Planned next milestones: implement and validate tool calling for product search and filtering, structured output handling, and AI evaluation/observability.",
    },
    fullDescription:
      "An in-development AI-powered retail assistant designed around structured product data, customer constraints and recommendation workflows such as product recommendations and cross-sell/upsell, using external LLM APIs, with a target architecture that is model- and provider-flexible rather than locked to one LLM vendor.",
    highlights: [
      "Working within a Macquarie University PACE team on an industry-sponsored brief from Salesforce to build a retail-focused AI assistant",
      "Contributing to a target architecture that keeps the underlying LLM provider flexible rather than fixed to one vendor",
      "Focused on practical retail workflows: product recommendations, customer constraints and cross-sell/upsell suggestions",
      "Participating in sponsor check-ins and iterative feedback as the project develops",
    ],
  },
  "cifar-10-image-classification": {
    slug: "cifar-10-image-classification",
    title: "CIFAR-10 Image Classification: PyTorch Benchmark",
    category: "AI / Machine Learning",
    status: "ML Foundations",
    year: "Apr 2026 – Jul 2026",
    description:
      "An end-to-end image-classification project comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled training and transfer-learning conditions. ResNet-18 achieved 87.48% test accuracy. The project includes Grad-CAM interpretability, INT8 quantisation, CLI inference and a live Gradio deployment.",
    fullDescription:
      "An end-to-end image-classification project comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled training and transfer-learning conditions. ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline. The project includes Grad-CAM visual interpretability, INT8 quantisation, command-line inference tools and a live Gradio demo deployed on Hugging Face Spaces.",
    tags: [
      "Python",
      "PyTorch",
      "torchvision",
      "NumPy",
      "Gradio",
      "Hugging Face Spaces",
      "Grad-CAM",
    ],
    links: {
      repo: "https://github.com/leoalavi/CIFAR-10-Image-Classification",
      demo: "https://cifar10.leoalavi.dev",
    },
    highlights: [
      "Designed and implemented an end-to-end deep learning pipeline comparing a custom CNN, MobileNetV2 and ResNet-18 under controlled conditions; ResNet-18 achieved 87.48% test accuracy using transfer learning, outperforming the custom CNN baseline",
      "Extended the project with Grad-CAM interpretability, INT8 quantisation, command-line inference tools and a Gradio demo deployed on Hugging Face Spaces",
    ],
  },
};

export interface Experience {
  title: string;
  company: string;
  period: string;
  note?: string;
  description: string[];
  type: "technical" | "customer";
  links?: {
    demo?: string;
    demoLabel?: string;
    repo?: string;
    repoLabel?: string;
  };
}

export const experiences: Experience[] = [
  {
    title: "Software Intern",
    company: "Calumino",
    period: "July 2026 – Present",
    type: "technical",
    description: [
      "Debug issues and implement features across internal software tools and computer vision-related workflows, working within an established internal engineering codebase.",
      "Investigated a review-tool issue where runtime behaviour did not match the current code, tracing it through the code and environment to a stale backend process serving an older API version, reinforcing a structured, evidence-based approach to debugging.",
      "Work with Python-based data and machine-learning workflows, including data preparation, model testing and evaluation, and internal review tooling.",
      "Participate in code reviews and technical discussions, contributing to iterative development.",
    ],
  },
  {
    title: "Software Developer & Co-Founder",
    company: "Syllabus Sync",
    period: "December 2025 – Present",
    note: "Selected for the Macquarie University Incubator in May 2026",
    type: "technical",
    links: {
      demo: "https://syllabus-sync.app",
      demoLabel: "syllabus-sync.app",
      repo: "https://github.com/leoalavi/syllabus-sync",
      repoLabel: "GitHub",
    },
    description: [
      "Co-founded and co-developed the Syllabus Sync ecosystem, a full-stack student productivity platform with AI-assisted study tools through Sylla.",
      "Own frontend architecture, responsive design, accessibility and authentication using Next.js, TypeScript and Supabase, alongside automated testing across user-facing features.",
      "Participate in customer discovery, product validation, mentoring and founder development through the Macquarie University Incubator and EDUCATE accelerator.",
    ],
  },
  {
    title: "Web Developer",
    company: "SBR Group",
    period: "October 2023 – December 2024",
    note: "Promoted from a three-month internship to a paid development role",
    type: "technical",
    description: [
      "Improved the company's WordPress website across mobile responsiveness, usability and page performance, delivering a more consistent experience across desktop and mobile.",
      "Automated recurring internal coordination workflows using Monday.com, reducing manual follow-up and giving team members clearer visibility of task ownership and progress.",
      "Collaborated with stakeholders to translate business requirements into practical website and workflow improvements.",
    ],
  },
  {
    title: "Sales Co-worker",
    company: "IKEA Australia",
    period: "May 2025 – Present",
    type: "customer",
    description: [
      "Resolve customer enquiries and coordinate across sales, logistics and warehouse teams in a high-volume retail environment.",
    ],
  },
  {
    title: "Sales Assistant",
    company: "Zara",
    period: "December 2024 – May 2025",
    type: "customer",
    description: [
      "Delivered customer service and supported product enquiries, transactions and stock operations in a high-volume retail environment.",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export const education: Education[] = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Macquarie University",
    period: "July 2023 – November 2026",
    details: [
      "Majors: Artificial Intelligence · Web and Mobile Application Development",
      "Developed practical experience across software engineering, full-stack development, mobile applications, databases, data structures, algorithms and applied AI.",
    ],
  },
  {
    degree: "Certificate IV in Information Technology (Programming)",
    institution: "TAFE NSW",
    period: "July 2022 – July 2023",
    details: [
      "Completed practical training in HTML, CSS, JavaScript, PHP, MySQL, responsive design and database-driven application development.",
    ],
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Dart", "Java", "SQL"],
  },
  {
    label: "Frontend & Mobile",
    skills: [
      "React",
      "Next.js",
      "Flutter",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "Deep Linking",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Row-Level Security",
    ],
  },
  {
    label: "Applied AI",
    skills: [
      "Vercel AI SDK",
      "LLM Integration",
      "PyTorch",
      "Computer Vision",
      "Transfer Learning",
      "Model Evaluation",
      "Grad-CAM",
    ],
  },
  {
    label: "Testing & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Debugging",
      "GitHub Actions",
      "Vitest",
      "Playwright",
      "Flutter Testing",
      "CI/CD",
      "Vercel",
    ],
  },
];
