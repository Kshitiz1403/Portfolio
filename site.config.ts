// All site content lives here. Edit this file to update the website.
// No content strings should exist in any other .tsx / .ts file.

type Stat = {
  value: string
  label: string
}

type ContactLink = {
  label: string
  href: string
  external: boolean
}

type Hero = {
  name: string
  photo: string
  photoAlt: string
  role: string
  company: string
  subtitle: string
  bio: string
  stats: Stat[]
  contactLinks: ContactLink[]
  calLink: string
}

type WorkProjectLink = {
  label: string
  href: string
}

type WorkProject = {
  slug: string
  name: string
  description: string
  highlights: string[] // supports **bold** markdown syntax
  tech: string[]
}

type Job = {
  company: string
  role: string
  period: string
  location: string
  projects: WorkProject[]
}

type PersonalProject = {
  slug: string
  name: string
  period: string
  description: string
  links: WorkProjectLink[]
  tech: string[]
}

type Faq = {
  question: string
  answer: string
}

type NavLink = {
  label: string
  href: string
}

type SocialLink = {
  label: string
  href: string
}

type SiteMetadata = {
  name: string
  title: string
  description: string
  url: string
  jobTitle: string
  sameAs: string[]
  knowsAbout: string[]
  company: string
  city: string
  country: string
  logo: string
}

type SiteConfig = {
  site: SiteMetadata
  hero: Hero
  nav: {
    links: NavLink[]
    sections: string[]
  }
  footer: {
    socialLinks: SocialLink[]
  }
  experience: Job[]
  projects: PersonalProject[]
  skills: Record<string, string[]>
  faqs: Faq[]
}

const config = {
  site: {
    name: 'Kshitiz Agrawal',
    title: 'Kshitiz Agrawal',
    description: 'Backend engineer. Distributed systems.',
    url: 'https://kshitizagrawal.in',
    jobTitle: 'Backend Engineer',
    sameAs: [
      'https://github.com/Kshitiz1403',
      'https://linkedin.com/in/kshitizagrawal',
    ],
    knowsAbout: ['Go', 'Distributed Systems', 'Kubernetes', 'Temporal', 'gRPC'],
    company: 'FinBox',
    city: 'Bengaluru',
    country: 'IN',
    logo: 'kshitiz.',
  },

  hero: {
    name: 'Kshitiz Agrawal',
    photo: '/photo.png',
    photoAlt: 'Kshitiz Agrawal',
    role: 'Backend Engineer',
    company: 'FinBox',
    subtitle: 'Backend engineer · Distributed systems · Bengaluru, India',
    bio: 'Building reliable infrastructure at FinBox — internal proxies, workflow engines, webhook platforms. Interested in how systems fail and how to make them not.',
    stats: [
      { value: '2+', label: 'years at FinBox' },
      { value: 'Go', label: 'primary language' },
      { value: 'BLR', label: 'Bengaluru, India' },
    ],
    contactLinks: [
      { label: 'GitHub', href: 'https://github.com/Kshitiz1403', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/kshitizagrawal', external: true },
      { label: 'Email', href: 'mailto:kshitizagrawal@outlook.com', external: false },
      { label: 'Resume', href: '/resume', external: false },
    ],
    calLink: 'https://cal.com/kshitizagrawal',
  },

  nav: {
    links: [
      { label: 'writing', href: '/blog' },
      { label: 'resume', href: '/resume' },
    ],
    sections: ['experience', 'projects', 'skills'],
  },

  footer: {
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/Kshitiz1403' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/kshitizagrawal' },
      { label: 'Email', href: 'mailto:kshitizagrawal@outlook.com' },
    ],
  },

  experience: [
    {
      company: 'FinBox',
      role: 'Backend Engineer',
      period: 'Jan 2024 – Present',
      location: 'Bengaluru',
      projects: [
        {
          slug: 'datadancer',
          name: 'DataDancer',
          description:
            'Go library implementing the Serverless Workflow Specification for in-memory, short-running workflows.',
          highlights: [
            'Implemented the **Serverless Workflow Specification** in pure **Go** — no Temporal, no external orchestration',
            'Powers **ETL pipelines** across 4+ microservices at FinBox with a config-driven JSON transformation engine',
          ],
          tech: ['Go', 'Serverless Workflow', 'OpenTelemetry'],
        },
        {
          slug: 'workflow-orchestration-platform',
          name: 'Workflow Orchestration Platform',
          description:
            'Temporal-based orchestrator that parses Serverless Workflow specs and executes durable business workflows.',
          highlights: [
            "Core developer on one of FinBox's most critical platforms — a **Temporal-based orchestrator** executing durable business workflows",
            'Built a **no-code canvas** where non-developers stitch together activities to define and deploy workflows without engineering involvement',
          ],
          tech: ['Go', 'Temporal', 'Serverless Workflow'],
        },
        {
          slug: 'octopus-octodash',
          name: 'Octopus & OctoDash',
          description:
            'Internal HTTP proxy with a custom DSL for declarative configuration of encryption, auth flows, and routing.',
          highlights: [
            'Designed a **custom DSL** covering encryption, auth flows, and routing — replacing hand-rolled middleware per service',
            'Implemented **adaptive vendor selection** with real-time performance metrics and automatic failover',
          ],
          tech: ['Go', 'React', 'PostgreSQL', 'Redis', 'Kafka', 'OpenTelemetry', 'AWS'],
        },
        {
          slug: 'firefly',
          name: 'Firefly',
          description:
            'Multi-tenant webhook delivery platform with configurable retry strategies and dead letter queues.',
          highlights: [
            'Multi-tenant **webhook delivery** with per-tenant configurable **retry strategies** and dead letter queue handling',
            '**Pluggable queue backend** — backed by SQS and EventBridge Scheduler, designed for easy replacement',
          ],
          tech: ['Go', 'AWS SQS', 'EventBridge', 'OAuth'],
        },
        {
          slug: 'pickle',
          name: 'Pickle',
          description:
            'gRPC microservice extracted from a legacy monolith to own configuration management across all tenants.',
          highlights: [
            '**Namespace-scoped isolation** lets each microservice own its config independently — zero coordination required between services',
            '**gRPC microservice** with version control, scheduled activation, hierarchical RBAC, and a full audit log',
          ],
          tech: ['Go', 'gRPC', 'React', 'Terraform', 'Helm', 'PostgreSQL'],
        },
      ],
    },
  ],

  projects: [
    {
      slug: 'collaborative-ide',
      name: 'Collaborative IDE',
      period: '2022',
      description:
        'Real-time code editor with CRDT-based conflict resolution, Docker-sandboxed execution, and LSP-powered autocomplete. Supports NodeJS, Python, C++, and Java.',
      links: [
        { label: 'Live', href: 'https://ide.kshitizagrawal.in' },
        { label: 'GitHub', href: 'https://github.com/Kshitiz1403/Collaborative-IDE' },
      ],
      tech: ['TypeScript', 'Node.js', 'React', 'Docker', 'WebSocket', 'Redis', 'CRDT', 'YJS'],
    },
  ],

  skills: {
    Languages: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python'],
    Infrastructure: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'AWS', 'Azure'],
    'Data & Messaging': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
    Frameworks: ['React.js', 'GraphQL', 'gRPC', 'OpenTelemetry', 'Temporal'],
  },

  faqs: [
    {
      question: 'What opportunities are you open to?',
      answer:
        'Full-time backend engineering roles focused on distributed systems, infrastructure, or developer tooling. Open to remote or Bengaluru-based positions. Not looking for frontend-heavy or management tracks.',
    },
    {
      question: 'What does your ideal role look like?',
      answer:
        'A small, focused team working on hard infrastructure problems — Go-first codebase, meaningful system design decisions, and the autonomy to own things end-to-end.',
    },
    {
      question: 'Are you available for consulting?',
      answer:
        "Selectively. I take on short-term engagements for backend architecture reviews, reliability audits, or Go mentoring. Reach out and we can see if it's a good fit.",
    },
    {
      question: "What's your engineering philosophy?",
      answer:
        "Systems should fail gracefully and loudly. I prefer boring, observable, and replaceable over clever. If it can't be debugged at 2am, it shouldn't be in production.",
    },
  ],
} satisfies SiteConfig

export default config
