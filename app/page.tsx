import Link from 'next/link'
import TypewriterTitle from '@/components/typewriter-title'
import FadeIn from '@/components/fade-in'
import { getAllPosts } from '@/lib/blog'

function boldify(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-stone-800 dark:text-zinc-200">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  )
}

function getTechClass(tech: string): string {
  const langs = ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python']
  const infra = ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'AWS', 'Azure', 'AWS SQS', 'EventBridge']
  const data = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka']
  const frameworks = [
    'Temporal', 'gRPC', 'GraphQL', 'OpenTelemetry', 'OAuth',
    'Serverless Workflow', 'React', 'React.js', 'WebSocket', 'CRDT', 'YJS', 'Node.js',
  ]
  if (langs.includes(tech))
    return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50'
  if (infra.includes(tech))
    return 'text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/50'
  if (data.includes(tech))
    return 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50'
  if (frameworks.includes(tech))
    return 'text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/50'
  return 'text-stone-600 dark:text-zinc-400 bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800'
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

const skills: Record<string, string[]> = {
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python'],
  Infrastructure: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'AWS', 'Azure'],
  'Data & Messaging': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
  Frameworks: ['React.js', 'GraphQL', 'gRPC', 'OpenTelemetry', 'Temporal'],
}

export default async function Home() {
  const posts = getAllPosts()

  return (
    <div className="space-y-24">
      {/* Hero */}
      <FadeIn>
        <section className="dot-bg -mx-6 px-6 pt-10 pb-14 rounded-b-2xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Backend Engineer · FinBox
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-3 bg-gradient-to-r from-stone-900 via-emerald-700 to-stone-900 dark:from-zinc-50 dark:via-emerald-300 dark:to-zinc-100 bg-clip-text text-transparent [background-size:200%_100%] animate-gradient-shift leading-tight">
            Kshitiz Agrawal
          </h1>

          <TypewriterTitle />

          {/* Bio */}
          <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 text-base border-l-2 border-emerald-600/30 dark:border-emerald-500/25 pl-4 max-w-xl">
            Building reliable infrastructure at FinBox — internal proxies, workflow engines, webhook
            platforms. Interested in how systems fail and how to make them not.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-8">
            <div>
              <div className="text-2xl font-bold text-stone-800 dark:text-zinc-100 font-mono leading-none">2+</div>
              <div className="text-xs text-stone-500 dark:text-zinc-500 mt-1">years at FinBox</div>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-zinc-800" />
            <div>
              <div className="text-2xl font-bold text-stone-800 dark:text-zinc-100 font-mono leading-none">5</div>
              <div className="text-xs text-stone-500 dark:text-zinc-500 mt-1">systems shipped</div>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-zinc-800" />
            <div>
              <div className="text-2xl font-bold text-stone-800 dark:text-zinc-100 font-mono leading-none">Go</div>
              <div className="text-xs text-stone-500 dark:text-zinc-500 mt-1">primary language</div>
            </div>
            <div className="w-px h-8 bg-stone-200 dark:bg-zinc-800 hidden sm:block" />
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-stone-800 dark:text-zinc-100 font-mono leading-none">BLR</div>
              <div className="text-xs text-stone-500 dark:text-zinc-500 mt-1">Bengaluru, India</div>
            </div>
          </div>

          {/* Social links as bordered buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://github.com/Kshitiz1403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-zinc-400 border border-stone-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 hover:border-stone-400 dark:hover:border-zinc-600 hover:text-stone-800 dark:hover:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kshitizagrawal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-zinc-400 border border-stone-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 hover:border-stone-400 dark:hover:border-zinc-600 hover:text-stone-800 dark:hover:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:kshitizagrawal@outlook.com"
              className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-zinc-400 border border-stone-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 hover:border-stone-400 dark:hover:border-zinc-600 hover:text-stone-800 dark:hover:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-1.5 text-sm text-stone-600 dark:text-zinc-400 border border-stone-200 dark:border-zinc-800 rounded-lg px-3 py-1.5 hover:border-stone-400 dark:hover:border-zinc-600 hover:text-stone-800 dark:hover:text-zinc-200 hover:bg-stone-50 dark:hover:bg-zinc-900 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Resume
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Experience */}
      <section id="experience">
        <FadeIn>
          <h2 className="text-lg font-semibold text-stone-800 dark:text-zinc-100 mb-6">Experience</h2>
        </FadeIn>

        {experience.map((job) => (
          <div key={job.company}>
            {/* Company header */}
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold font-mono text-emerald-700 dark:text-emerald-400">FB</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-stone-800 dark:text-zinc-100">{job.company}</span>
                    <span className="text-stone-400 dark:text-zinc-600">·</span>
                    <span className="text-stone-500 dark:text-zinc-500 text-sm">{job.role}</span>
                  </div>
                  <div className="text-xs text-stone-400 dark:text-zinc-600 font-mono mt-0.5">
                    {job.location} · {job.period}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-full px-2.5 py-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Active
                </span>
              </div>
            </FadeIn>

            {/* Timeline */}
            <div className="relative pl-5 space-y-4">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-200 dark:bg-zinc-800" />

              {job.projects.map((project, i) => (
                <FadeIn key={project.name} delay={i * 80}>
                  <div className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#faf8f5] dark:bg-zinc-950 border-2 border-stone-300 dark:border-zinc-600 group-hover:border-emerald-500 transition-colors duration-200" />

                    {/* Card */}
                    <div className="border border-stone-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-emerald-200 dark:hover:border-emerald-800/60 hover:-translate-y-0.5 transition-all duration-200 bg-white/50 dark:bg-zinc-900/20">
                      {/* Accent band */}
                      <div className="h-0.5 bg-gradient-to-r from-emerald-400/0 via-emerald-500/30 to-emerald-400/0 group-hover:via-emerald-500/70 transition-all duration-300" />

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <Link
                            href={`/work/${project.slug}`}
                            className="inline-flex items-center gap-1.5 font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200"
                          >
                            {project.name}
                            <span className="text-emerald-600 dark:text-emerald-500 text-xs">↗</span>
                          </Link>
                        </div>
                        <p className="text-sm text-stone-500 dark:text-zinc-500 leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {project.highlights.map((point, j) => (
                            <li key={j} className="text-sm text-stone-500 dark:text-zinc-500 leading-relaxed flex gap-2">
                              <span className="text-emerald-500 dark:text-emerald-600 shrink-0 mt-0.5 select-none">▸</span>
                              <span>{boldify(point)}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className={`text-xs font-mono px-2 py-0.5 rounded-md transition-all duration-150 ${getTechClass(t)}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
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
        <FadeIn>
          <h2 className="text-lg font-semibold text-stone-800 dark:text-zinc-100 mb-6">Projects</h2>
        </FadeIn>
        <div className={`grid gap-4 ${projects.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 80}>
              <div className="group border border-stone-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-stone-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/50 dark:hover:shadow-none transition-all duration-200 bg-white/50 dark:bg-zinc-900/20 flex flex-col h-full">
                {/* Color header strip */}
                <div className="h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500" />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200"
                    >
                      {project.name}
                    </Link>
                    <span className="text-xs font-mono text-stone-400 dark:text-zinc-600 shrink-0">{project.period}</span>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-zinc-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2.5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-md px-2.5 py-1 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors duration-200"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span key={t} className={`text-xs font-mono px-2 py-0.5 rounded-md ${getTechClass(t)}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <FadeIn>
          <h2 className="text-lg font-semibold text-stone-800 dark:text-zinc-100 mb-6">Skills</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-3">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 60}>
              <div className="border border-stone-200 dark:border-zinc-800 rounded-xl p-4 bg-white/40 dark:bg-zinc-900/20">
                <h3 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className={`text-xs font-mono px-2 py-0.5 rounded-md ${getTechClass(item)}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Writing */}
      {posts.length > 0 && (
        <section id="writing">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-lg font-semibold text-stone-800 dark:text-zinc-100">Writing</h2>
              <Link
                href="/blog"
                className="text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
              >
                All posts →
              </Link>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="border border-stone-200 dark:border-zinc-800 rounded-xl p-5 hover:border-stone-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 hover:bg-stone-50/50 dark:hover:bg-zinc-900/30 transition-all duration-200">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-medium text-stone-800 dark:text-zinc-100 group-hover:text-stone-900 dark:group-hover:text-zinc-50 transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-emerald-600 dark:text-emerald-500 text-sm shrink-0">↗</span>
                    </div>
                    <p className="text-sm text-stone-500 dark:text-zinc-500 leading-relaxed mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-stone-400 dark:text-zinc-600">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                      {post.tags && post.tags.length > 0 && (
                        <>
                          <span>·</span>
                          <span>{post.tags[0]}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
