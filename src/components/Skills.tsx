import { DATA } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center rounded-md px-3 py-1 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-black shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
