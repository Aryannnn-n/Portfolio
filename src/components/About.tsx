import { DATA } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="space-y-3">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-base leading-relaxed">
        {DATA.summary}
      </p>
    </section>
  );
}
