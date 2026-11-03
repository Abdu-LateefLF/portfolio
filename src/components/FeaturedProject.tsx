import { FiArrowUpRight, FiAward, FiExternalLink } from "react-icons/fi";
import type { FeaturedProject as FeaturedProjectData, Program, Recognition } from "../data/classwise";

function ProgramCard({ program }: { program: Program }) {
  const body = (
    <>
      <div className="h-12 w-full flex items-center justify-center">
        <img
          src={program.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="mt-3 text-[11px] font-semibold text-slate-700 leading-tight">{program.name}</p>
      <p className="mt-1 text-[10px] text-slate-400 leading-snug">{program.detail}</p>
    </>
  );
  const className =
    "h-full flex flex-col items-center text-center bg-white border border-slate-200 px-3 py-4";

  return program.url ? (
    <a
      href={program.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:border-accent/40 transition-colors`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

function RecognitionCard({ item }: { item: Recognition }) {
  const isLogo = item.image?.endsWith(".svg");
  return (
    <div className="bg-white border border-slate-200 overflow-hidden flex flex-col">
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
    <div className="flex gap-3 bg-white border border-slate-200 p-4">
      <span className="w-8 h-8 bg-accent/10 text-accent grid place-items-center shrink-0">
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
            <div key={stat.label} className="bg-accent/5 border border-accent/15 px-4 py-3">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-xl sm:text-2xl font-extrabold text-accent leading-none">{stat.value}</dd>
              <dd className="mt-1.5 text-xs text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 space-y-6">
          {project.overview.map((section) => (
            <div key={section.heading}>
              <h4 className="text-sm font-semibold text-slate-700">{section.heading}</h4>
              <p className="mt-2 text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <h4 className="mt-6 text-sm font-semibold text-slate-700">What I built</h4>
        <ul className="mt-2 space-y-2">
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
              className="text-[11px] sm:text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 sm:px-2.5 sm:py-1"
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent px-4 py-2 hover:opacity-90 transition-opacity"
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
          <div className="mt-4 grid gap-4">
            {withoutImages.map((item) => (
              <RecognitionRow key={item.title} item={item} />
            ))}
          </div>
        )}

        {project.programs.length > 0 && (
          <>
            <h5 className="mt-7 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Programs &amp; selections
            </h5>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.programs.map((program) => (
                <li key={program.name}>
                  <ProgramCard program={program} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
