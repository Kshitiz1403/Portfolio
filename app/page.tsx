'use client'

import { useState } from 'react'
import Link from 'next/link'
import TypewriterTitle from '@/components/typewriter-title'
import FadeIn from '@/components/fade-in'
import posthog from 'posthog-js'

function boldify(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-medium text-stone-800 dark:text-zinc-200">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  )
}

const experience = [
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
          'Core developer on one of FinBox\'s most critical platforms — a **Temporal-based orchestrator** executing durable business workflows',
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
      }
    ],
  },
]

const projects = [
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
]

const faqs = [
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
      'Selectively. I take on short-term engagements for backend architecture reviews, reliability audits, or Go mentoring. Reach out and we can see if it\'s a good fit.',
  },
  {
    question: 'What\'s your engineering philosophy?',
    answer:
      'Systems should fail gracefully and loudly. I prefer boring, observable, and replaceable over clever. If it can\'t be debugged at 2am, it shouldn\'t be in production.',
  },
]

const skills: Record<string, string[]> = {
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python'],
  Infrastructure: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'AWS', 'Azure'],
  'Data & Messaging': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
  Frameworks: ['React.js', 'GraphQL', 'gRPC', 'OpenTelemetry', 'Temporal'],
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="space-y-20">
      {/* Hero */}
      <FadeIn>
        <section>
          {/* Mobile: photo on left fills space, name on right */}
          <div className="flex items-center gap-4 mb-6 sm:hidden">
            <img
              src="/photo.png"
              alt="Kshitiz Agrawal"
              className="flex-1 min-w-0 rounded-xl object-cover object-center"
            />
            <div className="flex flex-col justify-center gap-2 shrink-0">
              <div className="inline-flex items-center gap-2 skill-pill text-xs font-mono text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Backend Engineer · FinBox
              </div>
              <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-stone-900 via-emerald-700 to-stone-900 dark:from-zinc-50 dark:via-emerald-300 dark:to-zinc-100 bg-clip-text text-transparent [background-size:200%_100%] animate-gradient-shift">
                Kshitiz Agrawal
              </h1>
            </div>
          </div>

          {/* Desktop: large photo left, full text right */}
          <div className="hidden sm:flex items-center gap-6">
            <img
              src="/photo.png"
              alt="Kshitiz Agrawal"
              className="w-64 h-64 rounded-2xl object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 skill-pill text-xs font-mono text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Backend Engineer · FinBox
              </div>
              <h1 className="text-4xl font-bold mb-3 tracking-tight bg-gradient-to-r from-stone-900 via-emerald-700 to-stone-900 dark:from-zinc-50 dark:via-emerald-300 dark:to-zinc-100 bg-clip-text text-transparent [background-size:200%_100%] animate-gradient-shift">
                Kshitiz Agrawal
              </h1>
              <p className="text-sm font-mono text-stone-400 dark:text-zinc-600 mb-6 tracking-wide">
                Backend engineer · Distributed systems · Bengaluru, India
              </p>
              <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm border-l-2 border-emerald-600/30 dark:border-emerald-500/25 pl-4">
                Building reliable infrastructure at FinBox — internal proxies, workflow engines, webhook
                platforms. Interested in how systems fail and how to make them not.
              </p>
            </div>
          </div>

          {/* Mobile-only: subtitle + bio */}
          <div className="sm:hidden">
            <p className="text-sm font-mono text-stone-400 dark:text-zinc-600 mb-6 tracking-wide">
              Backend engineer · Distributed systems · Bengaluru, India
            </p>
            <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm border-l-2 border-emerald-600/30 dark:border-emerald-500/25 pl-4">
              Building reliable infrastructure at FinBox — internal proxies, workflow engines, webhook
              platforms. Interested in how systems fail and how to make them not.
            </p>
          </div>
          <div className="flex items-stretch divide-x divide-stone-200 dark:divide-zinc-800 mb-8">
            {[
              { value: '2+', label: 'years at FinBox' },
              { value: 'Go', label: 'primary language' },
              { value: 'BLR', label: 'Bengaluru, India' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col px-5 first:pl-0 last:pr-0">
                <span className="text-xl font-bold text-stone-800 dark:text-zinc-100">{value}</span>
                <span className="text-xs text-stone-400 dark:text-zinc-600 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: 'GitHub', href: 'https://github.com/Kshitiz1403', external: true },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/kshitizagrawal', external: true },
              { label: 'Email', href: 'mailto:kshitizagrawal@outlook.com', external: false },
              { label: 'Resume', href: '/resume', external: false },
            ].map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => posthog.capture('social_link_clicked', { label })}
                className="text-xs font-mono text-stone-500 dark:text-zinc-500 border border-stone-200 dark:border-zinc-800 rounded px-3 py-1.5 hover:border-emerald-600/50 dark:hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="https://cal.com/kshitizagrawal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog.capture('book_call_clicked')}
              className="text-xs font-mono text-stone-500 dark:text-zinc-500 border border-stone-200 dark:border-zinc-800 rounded px-3 py-1.5 hover:border-emerald-600/50 dark:hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-200"
            >
              Book a call →
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          <FadeIn as="span" className="heading-reveal">Experience</FadeIn>
        </h2>
        {experience.map((job) => (
          <div key={job.company}>
            <FadeIn>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold text-stone-800 dark:text-zinc-100">{job.company}</span>
                  <span className="text-stone-400 dark:text-zinc-600 text-sm">·</span>
                  <span className="text-stone-500 dark:text-zinc-500 text-sm">{job.role}</span>
                </div>
                <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono sm:shrink-0 sm:ml-4">
                  {job.location} · {job.period}
                </span>
              </div>
            </FadeIn>
            <div className="divide-y divide-stone-200 dark:divide-zinc-800 mt-6">
              {job.projects.map((project, i) => (
                <FadeIn key={project.name} delay={i * 80}>
                  <div className="relative py-8 px-6 -mx-6 rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-900/50 hover:-translate-y-0.5 transition-all duration-200">
                    <Link
                      href={`/work/${project.slug}`}
                      onClick={() => posthog.capture('work_project_clicked', { project_name: project.name, project_slug: project.slug, company: job.company })}
                      className="inline-flex items-center gap-1.5 text-base font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200 mb-1.5 after:absolute after:inset-0 after:rounded-lg"
                    >
                      {project.name}
                      <span className="text-emerald-600 dark:text-emerald-500 text-xs">↗</span>
                    </Link>
                    <p className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed mb-3">{project.description}</p>
                    <ul className="space-y-2 mb-3">
                      {project.highlights.map((point, j) => (
                        <li key={j} className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed border-l border-emerald-600 dark:border-zinc-700 pl-3">
                          {boldify(point)}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="skill-pill text-xs font-mono text-stone-500 dark:text-zinc-600 px-2 py-0.5 rounded hover:scale-105 hover:text-stone-700 dark:hover:text-zinc-400 transition-all duration-150 cursor-default select-none"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          <FadeIn as="span" className="heading-reveal">Projects</FadeIn>
        </h2>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 80}>
              <div className="relative px-4 -mx-4 py-4 rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-900/50 hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-baseline justify-between mb-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    onClick={() => posthog.capture('open_source_project_clicked', { project_name: project.name, project_slug: project.slug })}
                    className="inline-flex items-center gap-1.5 font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200 after:absolute after:inset-0 after:rounded-lg"
                  >
                    {project.name}
                    <span className="text-emerald-600 dark:text-emerald-500 text-xs">↗</span>
                  </Link>
                  <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono ml-4 shrink-0">
                    {project.period}
                  </span>
                </div>
                <p className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed mb-3">{project.description}</p>
                <div className="relative z-10 flex items-center gap-4 mb-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => posthog.capture('external_project_link_clicked', { project_name: project.name, link_label: link.label, link_href: link.href })}
                      className="text-xs text-emerald-700 dark:text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="skill-pill text-xs font-mono text-stone-500 dark:text-zinc-600 px-2 py-0.5 rounded hover:scale-105 hover:text-stone-700 dark:hover:text-zinc-400 transition-all duration-150 cursor-default select-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          <FadeIn as="span" className="heading-reveal">Skills</FadeIn>
        </h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 60}>
              <div className="flex gap-6">
                <span className="text-xs text-stone-400 dark:text-zinc-700 w-32 shrink-0 pt-0.5">{category}</span>
                <p className="text-xs font-mono text-stone-500 dark:text-zinc-500 leading-relaxed">
                  {items.join(' · ')}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          <FadeIn as="span" className="heading-reveal">Questions</FadeIn>
        </h2>
        <div className="divide-y divide-stone-200 dark:divide-zinc-800">
          {faqs.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <button
                className="w-full text-left py-4 flex items-start justify-between gap-4 group cursor-pointer"
                onClick={() => {
                  const next = openFaq === i ? null : i
                  setOpenFaq(next)
                  if (next !== null) posthog.capture('faq_item_expanded', { question: item.question })
                }}
              >
                <span className="text-sm text-stone-700 dark:text-zinc-300 group-hover:text-stone-900 dark:group-hover:text-zinc-100 transition-colors duration-200">
                  {item.question}
                </span>
                <span className="text-emerald-600 dark:text-emerald-500 font-mono text-sm shrink-0 mt-0.5 select-none">
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <p className="text-sm text-stone-500 dark:text-zinc-500 leading-relaxed pb-4 pr-8">
                  {item.answer}
                </p>
              )}
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
