'use client';

import {
  Github,
  Home,
  Linkedin,
  Moon,
  Notebook,
  Sun,
  Twitter,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Dock() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Home className="size-4" />
        </Link>
        {/* <Link
          href="/"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Notebook className="size-4" />
        </Link> */}
        <div className="w-[1px] h-6 bg-neutral-200 dark:bg-neutral-800 mx-1"></div>
        <Link
          href="https://github.com/Aryannnn-n"
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Github className="size-4" />
        </Link>
        <Link
          href="https://linkedin.com/in/aryan-chavan-"
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Linkedin className="size-4" />
        </Link>
        <Link
          href="https://x.com/Aryan_Chavan_"
          target="_blank"
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Twitter className="size-4" />
        </Link>
        <div className="w-[1px] h-6 bg-neutral-200 dark:bg-neutral-800 mx-1"></div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors relative h-8 w-8 flex items-center justify-center"
        >
          {mounted && theme === 'dark' ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
        </button>
      </div>
    </div>
  );
}
