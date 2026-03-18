import { DATA } from '@/data/resume';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  return (
    <section id="projects" className="space-y-8 py-12">
      <div className="space-y-4 text-center">
        <div className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm font-medium">
          My Projects
        </div>
        <h2 className="text-4xl font-black tracking-tighter sm:text-5xl">
          Check out my latest work
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-[600px] mx-auto text-lg/relaxed">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {DATA.projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#111] transition-all hover:shadow-lg dark:hover:shadow-neutral-900 shadow-sm"
          >
            <div className="w-full h-48 sm:h-52 object-cover overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-4 relative overflow-hidden">
                  <div className="w-full h-6 bg-neutral-200 dark:bg-neutral-800 rounded-sm mb-2 opacity-30 absolute top-4 inset-x-4 max-w-[90%] mx-auto" />
                  <div className="w-full flex-1 bg-neutral-200 dark:bg-neutral-800 rounded-sm opacity-30 absolute top-14 bottom-4 inset-x-4 max-w-[90%] mx-auto" />
                  <span className="z-10 bg-white dark:bg-black px-2 py-1 rounded text-xs font-medium border border-neutral-200 dark:border-neutral-800 shadow-sm">
                    Image Placeholder
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow p-5 space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-xl leading-tight">
                  {project.title}
                </h3>
                <div className="text-sm text-neutral-500 font-medium">
                  {project.dates}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto shrink-0 py-2">
                {project.technologies.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 text-xs font-semibold px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {project.links?.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-black transition-colors h-8 px-3 gap-1.5"
                  >
                    {link.icon ? (
                      <link.icon className="size-3" />
                    ) : (
                      <Globe className="size-3" />
                    )}
                    {link.type}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
