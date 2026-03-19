'use client';

import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function WorkExperience() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="work" className="space-y-4">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {DATA.work.map((role, idx) => {
          const isExpanded = expandedIdx === idx;

          return (
            <div key={idx} className="flex gap-4">
              <div className="mt-1 h-12 w-12 flex-none rounded-full border border-neutral-200 dark:border-neutral-800 bg-white flex items-center justify-center overflow-hidden shadow-sm">
                {role.logoUrl ? (
                  <Image
                    src={role.logoUrl}
                    alt={role.company}
                    width={48}
                    height={48}
                    className="object-contain p-1"
                  />
                ) : (
                  <span className="text-lg font-bold text-black">
                    {role.company[0]}
                  </span>
                )}
              </div>
              <div className="flex-1 space-y-1.5 pt-1">
                <div
                  className="flex items-start justify-between cursor-pointer group"
                  onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-base  decoration-neutral-400 underline-offset-4">
                        {role.company}
                      </h3>
                      {role.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="inline-flex items-center px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800 dark:bg-[#1a1a1a] dark:text-neutral-200 text-xs font-semibold"
                        >
                          {badge}
                        </span>
                      ))}
                      <ChevronRight
                        className={cn(
                          'size-4 text-neutral-500 transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
                          'opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0',
                          isExpanded && 'rotate-90 opacity-100 translate-x-0',
                        )}
                      />
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {role.title}
                    </div>
                  </div>
                  <div className="text-sm text-neutral-400 dark:text-[#a1a1aa] shrink-0 sm:mt-0 font-medium tracking-tight">
                    {role.start} - {role.end}
                  </div>
                </div>

                {isExpanded && role.description && (
                  <div className="text-sm text-neutral-500 dark:text-neutral-300 whitespace-pre-line leading-relaxed mt-2 pt-2 transition-all">
                    {role.description}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
