import { DATA } from '@/data/resume';

export function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-black tracking-tighter sm:text-6xl xl:text-7xl/none">
            Hi, I&apos;m {DATA.name.split(' ')[0]}{' '}
            <span className="inline-block origin-bottom-right hover:animate-pulse">
              👋
            </span>
          </h1>
          <p className="max-w-[600px] text-neutral-600 dark:text-neutral-300 md:text-lg/relaxed xl:text-xl/relaxed">
            {DATA.description}
          </p>
        </div>
        <div className="h-32 w-32 md:h-45 md:w-40 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-800/60 shrink-0">
          <img
            src={DATA.avatarUrl}
            alt={DATA.name}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
