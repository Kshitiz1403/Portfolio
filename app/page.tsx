import Link from 'next/link'
import TypewriterTitle from '@/components/typewriter-title'

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

const skills: Record<string, string[]> = {
  Languages: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python'],
  Infrastructure: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'AWS', 'Azure'],
  'Data & Messaging': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
  Frameworks: ['React.js', 'GraphQL', 'gRPC', 'OpenTelemetry', 'Temporal'],
}

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section>
        <h1 className="text-2xl font-semibold mb-2 tracking-tight bg-gradient-to-r from-stone-900 via-stone-800 to-emerald-800 dark:from-zinc-50 dark:via-zinc-100 dark:to-emerald-300 bg-clip-text text-transparent">
          Kshitiz Agrawal
        </h1>
        <TypewriterTitle />
        <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm border-l-2 border-emerald-600/30 dark:border-emerald-500/25 pl-4">
          Building reliable infrastructure at FinBox — internal proxies, workflow engines, webhook
          platforms. Interested in how systems fail and how to make them not.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/Kshitiz1403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 dark:text-zinc-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kshitizagrawal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 dark:text-zinc-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kshitizagrawal@outlook.com"
            className="text-stone-500 dark:text-zinc-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="/resume"
            className="text-stone-500 dark:text-zinc-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          Experience
        </h2>
        {experience.map((job) => (
          <div key={job.company}>
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
            <div className="divide-y divide-stone-100 dark:divide-zinc-900 mt-6">
              {job.projects.map((project) => (
                <div key={project.name} className="py-8 px-6 -mx-6 rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-900/50 hover:-translate-y-0.5 transition-all duration-200">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/link inline-flex items-center gap-1.5 text-base font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200 mb-1.5"
                  >
                    {project.name}
                    <span className="text-stone-400 dark:text-zinc-700 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-500 transition-colors duration-200 text-xs">↗</span>
                  </Link>
                  <p className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed mb-3">{project.description}</p>
                  <ul className="space-y-1.5 mb-3">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-stone-500 dark:text-zinc-600 leading-relaxed">
                        <span className="text-stone-300 dark:text-zinc-700 shrink-0 select-none mt-px">—</span>
                        <span>{boldify(point)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-stone-500 dark:text-zinc-600 bg-stone-100 dark:bg-zinc-900 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.name} className="px-4 -mx-4 py-4 rounded-lg hover:bg-stone-50 dark:hover:bg-zinc-900/50 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-baseline justify-between mb-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group/link inline-flex items-center gap-1.5 font-medium text-stone-800 dark:text-zinc-200 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200"
                >
                  {project.name}
                  <span className="text-stone-400 dark:text-zinc-700 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-500 transition-colors duration-200 text-xs">↗</span>
                </Link>
                <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono ml-4 shrink-0">
                  {project.period}
                </span>
              </div>
              <p className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed mb-3">{project.description}</p>
              <div className="flex items-center gap-4 mb-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    className="text-xs font-mono text-stone-500 dark:text-zinc-600 bg-stone-100 dark:bg-zinc-900 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          Skills
        </h2>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex gap-6">
              <span className="text-xs text-stone-400 dark:text-zinc-700 w-32 shrink-0 pt-0.5">{category}</span>
              <p className="text-xs font-mono text-stone-500 dark:text-zinc-500 leading-relaxed">
                {items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
