import { DATA } from '@/data/resume';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="space-y-16 py-12">
      <div className="space-y-4 text-center mx-auto max-w-[600px]">
        <div className="inline-block rounded-lg bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm font-medium">
          Contact
        </div>
        <h2 className="text-4xl font-black tracking-tighter sm:text-6xl">
          Get in Touch
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg/relaxed">
          Want to chat? I love to talk Just shoot me a dm{' '}
          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            with a direct question on linkedin
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
