import Link from 'next/link'

const experience = [
  {
    company: 'FinBox',
    role: 'Backend Engineer',
    period: 'Jan 2024 – Present',
    location: 'Bengaluru',
    projects: [
      {
        slug: 'octopus-octodash',
        name: 'Octopus & OctoDash',
        description:
          'Internal HTTP proxy with a custom DSL for declarative configuration of encryption, auth flows, and routing.',
        highlights: [
          'Designed a custom DSL covering encryption protocols, auth flows, webhooks, and routing — replacing hand-rolled middleware per service',
          'Built OctoDash, a full-stack management dashboard for service onboarding and live proxy monitoring',
          'Implemented adaptive vendor selection with real-time performance metrics and automatic failover',
          "Enabled custom code execution via Go's plugin system, avoiding container overhead entirely",
        ],
        tech: ['Go', 'DSL', 'React', 'gRPC'],
      },
      {
        slug: 'datadancer',
        name: 'DataDancer',
        description:
          'Go library implementing the Serverless Workflow Specification for in-memory, short-running workflows.',
        highlights: [
          'Implemented the Serverless Workflow Specification in pure Go — no Temporal, no external orchestration',
          'Built a config-driven JSON transformation engine with support for custom function activities',
          'Powers ETL pipelines and data transformations across 4+ microservices at FinBox',
          'Designed extensible hooks for injecting custom activities, loggers, and OpenTelemetry tracing',
        ],
        tech: ['Go', 'Serverless Workflow', 'OpenTelemetry'],
      },
      {
        slug: 'pickle',
        name: 'Pickle',
        description:
          'gRPC microservice extracted from a legacy monolith to own configuration management across all tenants.',
        highlights: [
          'Extracted config management from a legacy monolith into a standalone gRPC microservice',
          'Added version control, scheduled activation, and strict multi-tenant namespace isolation',
          'Implemented hierarchical RBAC with tenant-scoped permissions and a full audit log',
          'Shipped a React frontend for config versioning, namespace management, and rollback',
        ],
        tech: ['Go', 'gRPC', 'React', 'Terraform', 'Helm', 'PostgreSQL'],
      },
      {
        slug: 'firefly',
        name: 'Firefly',
        description:
          'Multi-tenant webhook delivery platform with configurable retry strategies and dead letter queues.',
        highlights: [
          'Delivered reliable multi-tenant webhook dispatch with per-tenant configurable retry policies',
          'Integrated OAuth authentication and dead letter queue handling for failed deliveries',
          'Built a pluggable queue backend — currently backed by SQS and EventBridge Scheduler',
        ],
        tech: ['Go', 'AWS SQS', 'EventBridge', 'OAuth'],
      },
      {
        slug: 'workflow-orchestration-platform',
        name: 'Workflow Orchestration Platform',
        description:
          'Temporal-based orchestrator that parses Serverless Workflow specs and executes durable business workflows.',
        highlights: [
          'Built a Temporal orchestrator that parses and executes Serverless Workflow specification files',
          'Enables non-engineers to define complex, fault-tolerant business logic through YAML config',
          'Active contributor to the Serverless Workflow Go SDK open source project',
        ],
        tech: ['Go', 'Temporal', 'Serverless Workflow'],
      },
    ],
  },
]

const projects = [
  {
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
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-zinc-50 mb-2 tracking-tight">
          Kshitiz Agrawal
        </h1>
        <p className="text-stone-500 dark:text-zinc-500 mb-6 text-sm font-mono">
          Backend engineer · Distributed systems · Bengaluru, India
        </p>
        <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
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
      <section>
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          Experience
        </h2>
        {experience.map((job) => (
          <div key={job.company}>
            <div className="flex items-baseline justify-between mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-stone-800 dark:text-zinc-100">{job.company}</span>
                <span className="text-stone-400 dark:text-zinc-600 text-sm">·</span>
                <span className="text-stone-500 dark:text-zinc-500 text-sm">{job.role}</span>
              </div>
              <span className="text-xs text-stone-400 dark:text-zinc-700 font-mono shrink-0 ml-4">
                {job.location} · {job.period}
              </span>
            </div>
            <div className="space-y-10">
              {job.projects.map((project) => (
                <div key={project.name}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 dark:text-zinc-300 hover:text-stone-900 dark:hover:text-zinc-50 transition-colors duration-200 mb-1.5"
                  >
                    {project.name}
                    <span className="text-stone-400 dark:text-zinc-700 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-500 transition-colors duration-200 text-xs">↗</span>
                  </Link>
                  <p className="text-sm text-stone-500 dark:text-zinc-600 leading-relaxed mb-3">{project.description}</p>
                  <ul className="space-y-1.5 mb-3">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-stone-500 dark:text-zinc-600 leading-relaxed">
                        <span className="text-stone-300 dark:text-zinc-700 shrink-0 select-none mt-px">—</span>
                        <span>{point}</span>
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
      <section>
        <h2 className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-widest mb-8">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-medium text-stone-800 dark:text-zinc-200">{project.name}</span>
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
      <section>
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
