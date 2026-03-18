import { DATA } from '@/data/resume';

export function Education() {
  return (
    <section id="education" className="space-y-4">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="flex flex-col gap-6">
        {DATA.education.map((edu, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="mt-1 h-12 w-12 flex-none rounded-full border border-neutral-200 dark:border-neutral-800 bg-red-500 flex items-center justify-center text-lg font-bold text-white overflow-hidden">
              {edu.school.substring(0, 3).toUpperCase()}
            </div>
            <div className="flex-1 space-y-1 pt-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-base">{edu.school}</h3>
                  <div className="text-sm text-neutral-500 dark:text-neutral-300 mt-1">
                    {edu.degree}
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 shrink-0">
                  {edu.start} - {edu.end}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
