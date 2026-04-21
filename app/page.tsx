import type { ReactNode } from "react";

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
    >
      {children}
    </a>
  );
}

function IntLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="mb-7 text-balance font-semibold text-neutral-900 dark:text-neutral-100">
        Ashish Yadav
      </h1>
      <p className="mt-7">
        I am the co-founder and CTO of{" "}
        <ExtLink href="https://finalrun.app">FinalRun</ExtLink>, an AI QA agent
        for mobile apps. I live in San Francisco.
      </p>
      <p className="mt-7">
        In 2025, FinalRun topped Google DeepMind&apos;s{" "}
        <ExtLink href="https://google-research.github.io/android_world/">
          Android World
        </ExtLink>{" "}
        leaderboard for autonomous mobile agents with a{" "}
        <ExtLink href="https://docs.google.com/spreadsheets/d/1cchzP9dlTZ3WXQTfYNhh3avxoLipqHN75v1Tb86uhHo/edit?gid=0#gid=0">
          97.4% success rate
        </ExtLink>{" "}
        (113 / 116 tasks) — ahead of DroidRun ($2.1M raised), Minitap&apos;s
        mobile-use ($4.1M raised), and Google&apos;s own Gemini Computer Use.
      </p>
      <p className="mt-7">
        Before FinalRun, I spent eight years on mobile — starting at
        SmartBeings in 2017 on a voice-AI hardware startup, then at Leap
        (acquired by Whatfix in 2022) where I turned a founder POC into the
        shipped product, and finally at Whatfix where I led the enterprise
        Android SDK.
      </p>
      <p className="mt-7">
        You can read what I&apos;ve written in{" "}
        <IntLink href="/blog">blog</IntLink>, find mentions in{" "}
        <IntLink href="/press">press</IntLink>, or see the full history in{" "}
        <IntLink href="/work">work</IntLink>. Reach me on{" "}
        <ExtLink href="https://github.com/droid-ash">GitHub</ExtLink>,{" "}
        <ExtLink href="https://twitter.com/droidash">X/Twitter</ExtLink>,{" "}
        <ExtLink href="https://www.linkedin.com/in/ashdroid/">LinkedIn</ExtLink>
        ,{" "}
        <ExtLink href="https://www.instagram.com/droidash/">Instagram</ExtLink>,
        or by{" "}
        <a
          href="mailto:ashish@finalrun.app"
          className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
        >
          email
        </a>
        .
      </p>
    </>
  );
}
