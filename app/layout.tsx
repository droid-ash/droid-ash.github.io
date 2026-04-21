import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Yadav — Co-founder & CTO, FinalRun",
  description:
    "Co-founder and CTO of FinalRun, an AI QA agent for mobile apps. Previously SDE-II at Whatfix and early engineer at Leap and SmartBeings.",
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-[15px] leading-7 text-neutral-600 antialiased dark:bg-neutral-950 dark:text-neutral-400`}
      >
        <div className="mx-auto flex max-w-3xl flex-col p-6 sm:flex-row sm:p-10 md:p-14">
          <Sidebar />
          <main className="relative flex-1 sm:max-w-2xl">
            <div className="absolute right-0 h-px w-full bg-neutral-200 opacity-50 sm:left-0 sm:right-auto sm:h-full sm:w-px sm:opacity-100 dark:bg-neutral-800" />
            <article className="pt-6 pl-0 sm:pt-0 sm:pl-6 md:pl-10">
              {children}
            </article>
          </main>
        </div>
      </body>
    </html>
  );
}
