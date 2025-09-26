import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, ExternalLink, Cpu, Brain, Zap, Rocket,
  Briefcase, GraduationCap, Code2, TerminalSquare, Database, Globe2,
  ChevronRight, Sparkles,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button, buttonVariants } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

// ---------- Smooth scroll helper ----------
const smoothScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ---------- Small helpers ----------
const Section = ({ id, title, icon: Icon, children }: any) => (
  <section id={id} className="relative scroll-mt-28">
    <div className="sticky top-0 -mx-6 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="px-6 py-3">
        <div className="flex items-center gap-2 text-muted-foreground text-sm tracking-widest uppercase">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>
      </div>
    </div>
    <div className="grid gap-6">{children}</div>
  </section>
);

const Pill = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur bg-background/40 border-white/10">
    {children}
  </span>
);

// ---------- Content data ----------
const LINKS = {
  github: "https://github.com/ronavjaiswal",
  linkedin: "https://www.linkedin.com/in/ronavjaiswal",
  email: "mailto:rjaiswal@andrew.cmu.edu",
};

const TAGS = {
  stack: [
    "C","C++","Python","Java","TypeScript","React","Node.js","PyTorch","OpenCV",
    "Docker","ChromaDB","RAG","MATLAB",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Computer Systems (15-213)",
    "Functional Programming",
    "Computer Security (18-330)",
    "Theoretical CS (15-251)",
    "Math Foundations of CS",
  ],
};

const PROJECTS = [
  {
    title: "Malloc — Dynamic Storage Allocator",
    blurb:
      "Custom malloc/free/realloc/calloc with segregated free lists, coalescing, and footer elimination; balanced ≥74% utilization with strong throughput.",
    bullets: [
      "Segregated free lists & immediate/deferred coalescing",
      "Optimized fragmentation; tested with mem_sbrk harness",
    ],
    tech: ["C", "Valgrind"],
  },
  {
    title: "Shell — Tiny Linux Shell",
    blurb:
      "Job control, I/O redirection, built-ins, and robust signal handling (SIGINT/SIGTSTP/SIGCHLD) with correct reaping to avoid zombies.",
    bullets: ["fork/execve/waitpid/setpgid", "Foreground/background pipeline management"],
    tech: ["C", "Unix"],
  },
  {
    title: "HTTP Proxy Server",
    blurb:
      "Multithreaded web proxy using POSIX threads + RIO. HTTP/1.0 GET parsing, header normalization, response forwarding, and concurrency safety.",
    bullets: ["Thread pool + robust I/O", "Header forwarding (Host, UA, Connection)"],
    tech: ["C", "Pthreads"],
  },
  {
    title: "Cache Simulator",
    blurb:
      "Parametric cache (size/associativity) with LRU; write-back + write-allocate. Matrix transpose optimized using blocking strategies.",
    bullets: ["Hit/miss/eviction/dirty tracking", "Clock-cycle aware analysis"],
    tech: ["C"],
  },
  {
    title: "Game Discover Hub",
    blurb:
      "Scalable, responsive game discovery web app; React + TS + Vite + Chakra; integrates RAWG REST API with search/filter/sort.",
    bullets: ["Axios-powered data fetching", "Responsive grid + virtualized lists"],
    tech: ["React", "TypeScript", "Vite", "Chakra UI", "Axios"],
    link: "https://github.com/ronavjaiswal/Rawg-clone",
  },
];

const EXPERIENCE = [
  {
    role: "Undergraduate Research Fellow",
    org: "Carnegie Mellon — Prof. Tai Sing Lee",
    time: "Feb 2025 – Present",
    points: [
      "Implemented log-Z cortical magnification + foveated blur in OpenCV for gaze-prediction pipelines.",
      "Trained and evaluated saliency models (DeepGaze IIe on MIT1004) with PyTorch; cross-compared with MATLAB legacy baselines.",
    ],
  },
  {
    role: "Applied ML & Knowledge Systems Intern",
    org: "Herbochem Industries (NYC)",
    time: "Jun 2025 – Aug 2025",
    points: [
      "Built a RAG document-intelligence system for GMP/regulatory workflows (FastAPI + Streamlit).",
      "ChromaDB vector store, e5-base + contrastive FT, MMR diversification, cross-encoder re-ranking; cited Q&A over SOPs/CoAs/MSDS.",
    ],
  },
  {
    role: "Hardware & Software Lead",
    org: "BSRC — FIRST Robotics (FRC/FTC)",
    time: "Aug 2017 – May 2024",
    points: [
      "Real-time course correction using odometry + RoadRunner; solved non-linear pose under constant curvature.",
      "TensorFlow + OpenCV object detection for autonomous interaction with game elements.",
    ],
  },
];

const EDUCATION = {
  school: "Carnegie Mellon University",
  degree: "B.S. in Computer Science",
  grad: "Expected 2027",
};

// ---------- App ----------
export default function App() {
  return (
    <div className="min-h-screen w-full text-foreground bg-gradient-to-b from-background via-background/60 to-background relative overflow-x-clip">
      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-80 w-80 rounded-full blur-3xl opacity-30 bg-cyan-500" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-fuchsia-500" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-20 bg-indigo-500" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-white/10">
        <div className="w-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <Sparkles className="h-5 w-5" /> Ronav.J
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => smoothScrollTo("about")} className="hover:text-foreground">About</button>
            <button onClick={() => smoothScrollTo("experience")} className="hover:text-foreground">Experience</button>
            <button onClick={() => smoothScrollTo("projects")} className="hover:text-foreground">Projects</button>
            <button onClick={() => smoothScrollTo("skills")} className="hover:text-foreground">Skills</button>
            <button onClick={() => smoothScrollTo("contact")} className="hover:text-foreground">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="w-full px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-24 grid md:grid-cols-[1.2fr,0.8fr] gap-10 place-items-center"
        >
          {/* Left: centered */}
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">robust systems</span>{" "}
              &<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">intelligent ML tools</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              I’m Ronav Jaiswal — CS @ Carnegie Mellon (’27). I design performant systems in C and craft applied-ML products
              (RAG, saliency, gaze) with PyTorch & OpenCV.
            </p>

            {/* Buttons with left icons */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button onClick={() => smoothScrollTo("projects")}>
                <ChevronRight className="w-4 h-4 mr-2" /> See projects
              </Button>

              <a
                className={buttonVariants({ variant: "outline" })}
                href={LINKS.github} target="_blank" rel="noreferrer"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>

              <a
                className={buttonVariants({ variant: "outline" })}
                href={LINKS.linkedin} target="_blank" rel="noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              <Pill><Cpu className="w-3 h-3 mr-1" /> Systems</Pill>
              <Pill><Brain className="w-3 h-3 mr-1" /> ML / Vision</Pill>
              <Pill><Zap className="w-3 h-3 mr-1" /> Product</Pill>
              <Pill><Rocket className="w-3 h-3 mr-1" /> Startups</Pill>
            </div>
          </div>

          {/* Right card */}
          <Card className="border-white/10 bg-background/50 backdrop-blur w-full max-w-md">
            <CardContent className="p-6">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 flex items-center justify-center text-sm text-muted-foreground">
                <span>Drop a headshot here</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg border border-white/10 p-3">
                  <div className="text-xs text-muted-foreground">Education</div>
                  <div className="font-medium">{EDUCATION.school}</div>
                  <div className="text-xs">{EDUCATION.degree}</div>
                </div>
                <div className="rounded-lg border border-white/10 p-3">
                  <div className="text-xs text-muted-foreground">Graduation</div>
                  <div className="font-medium">{EDUCATION.grad}</div>
                  <div className="text-xs">Pittsburgh, PA</div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <a className={buttonVariants()} href={LINKS.email}>
                  <Mail className="w-4 h-4 mr-2" /> Contact
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* About */}
        <Section id="about" title="About" icon={GraduationCap}>
          <Card className="border-white/10 bg-background/50 backdrop-blur">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                I’m a systems + ML engineer who loves clean abstractions and measurable impact. Recently, I’ve been exploring
                retino-cortical transforms (log-Z), foveated blur, and gaze-prediction pipelines; and building a RAG doc-intelligence
                stack tailored to regulated workflows. Previously, I led software & hardware for an FRC/FTC team, shipping robust autonomy with odometry and CV.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.coursework.map((c) => (
                  <Badge key={c} variant="secondary" className="border-white/10">{c}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={Briefcase}>
          <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((exp) => (
              <Card key={exp.role + exp.time} className="border-white/10 bg-background/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium leading-tight">{exp.role}</h3>
                      <div className="text-sm text-muted-foreground">{exp.org}</div>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.time}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex gap-2"><span className="mt-1">•</span><span>{p}</span></li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={Code2}>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, idx) => (
              <Card key={p.title + idx} className="group border-white/10 bg-background/50 backdrop-blur hover:border-white/20 transition">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium leading-tight">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{p.blurb}</p>
                    </div>
                    {(p as any).link ? (
                      <a className="opacity-80 hover:opacity-100" href={(p as any).link} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2"><span className="mt-1">–</span><span>{b}</span></li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-white/10">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" icon={TerminalSquare}>
          <Card className="border-white/10 bg-background/50 backdrop-blur">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Core Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.stack.map((s) => (
                      <Badge key={s} className="border-white/10" variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3">Domains</h3>
                  <div className="flex flex-wrap gap-2">
                    <Pill><Cpu className="w-3 h-3 mr-1" /> Systems</Pill>
                    <Pill><Brain className="w-3 h-3 mr-1" /> ML/AI</Pill>
                    <Pill><Database className="w-3 h-3 mr-1" /> Data</Pill>
                    <Pill><Globe2 className="w-3 h-3 mr-1" /> Web</Pill>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={Mail}>
          <Card className="border-white/10 bg-background/50 backdrop-blur">
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-medium">Let’s build something</h3>
                <p className="text-sm text-muted-foreground">Open to internships and collaborations in systems, ML, and intelligent tooling.</p>
              </div>
              <div className="flex gap-2">
                <a className={buttonVariants()} href={LINKS.email}><Mail className="w-4 h-4 mr-2" /> Email</a>
                <a className={buttonVariants({ variant: "outline" })} href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
                <a className={buttonVariants({ variant: "outline" })} href={LINKS.github} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        </Section>

        <footer className="py-16 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ronav Jaiswal · Built with React, Tailwind, shadcn/ui, and Framer Motion
        </footer>
      </main>
    </div>
  );
}
