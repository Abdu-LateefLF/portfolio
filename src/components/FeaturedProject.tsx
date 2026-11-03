import { FiArrowUpRight, FiAward, FiExternalLink } from "react-icons/fi";
import type { FeaturedProject as FeaturedProjectData, Recognition } from "../data/classwise";

function RecognitionCard({ item }: { item: Recognition }) {
  const isLogo = item.image?.endsWith(".svg");
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col">
      {item.image && (
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full ${
              isLogo ? "object-contain p-8 bg-white" : "object-cover object-center"
            }`}
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <h5 className="text-sm font-bold text-slate-800 leading-snug">{item.title}</h5>
        <p className="text-xs text-slate-400 font-mono">
          {item.org}
          {item.period && ` · ${item.period}`}
        </p>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.description}</p>
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-1 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            Read the story <FiArrowUpRight size={12} />
          </a>
        )}
      </div>
    </div>
  );
}

function RecognitionRow({ item }: { item: Recognition }) {
  return (
    <div className="flex gap-3 bg-white rounded-xl border border-slate-200 p-4">
      <span className="w-8 h-8 rounded-md bg-accent/10 text-accent grid place-items-center shrink-0">
        <FiAward size={14} />
      </span>
      <div className="min-w-0">
        <h5 className="text-sm font-bold text-slate-800 leading-snug">{item.title}</h5>
        <p className="text-xs text-slate-400 font-mono mt-0.5">
          {item.org}
          {item.period && ` · ${item.period}`}
        </p>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">{item.description}</p>
      </div>
    </div>
  );
}

export default function FeaturedProject({ project, id }: { project: FeaturedProjectData; id: string }) {
  const withImages = project.recognition.filter((r) => r.image);
  const withoutImages = project.recognition.filter((r) => !r.image);
  const [primaryLink, ...otherLinks] = project.links;

  return (
    <article
      id={id}
      className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
    >
      <div className="relative aspect-video bg-slate-100 border-b border-slate-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      <div className="p-5 sm:p-8">
        <p className="text-accent font-mono text-[11px] sm:text-xs font-medium tracking-wide uppercase">
          Flagship Project
        </p>
        <h3 className="mt-1.5 text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">{project.role}</p>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-snug">{project.tagline}</p>

        <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-accent/5 border border-accent/15 px-4 py-3">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl sm:text-2xl font-extrabold text-accent leading-none">{stat.value}</dd>
              <dd className="mt-1.5 text-xs text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 space-y-3">
          {project.intro.map((para, i) => (
            <p key={i} className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <h4 className="mt-7 text-sm font-semibold text-slate-700">What I built</h4>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-xs font-mono bg-slate-100 text-slate-600 rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
          >
            {primaryLink.label}
            <FiExternalLink size={14} />
          </a>
          {otherLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-accent transition-colors"
            >
              {link.label}
              <FiArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-8">
        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <FiAward size={14} className="text-accent" />
          Recognition
        </h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {withImages.map((item) => (
            <RecognitionCard key={item.title} item={item} />
          ))}
        </div>
        {withoutImages.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {withoutImages.map((item) => (
              <RecognitionRow key={item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
