import { Dock } from '@/components/Dock';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aryan Chavan | Portfolio',
  description: 'Full-stack developer specializing in MERN and PostgreSQL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] font-sans antialiased text-neutral-900 dark:text-neutral-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <main className="max-w-[800px] mx-auto px-6 py-12 sm:py-24 flex flex-col gap-16 pb-32">
            {children}
          </main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
