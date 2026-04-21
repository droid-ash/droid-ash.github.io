type Post = {
  title: string;
  date: string;
  source: string;
  url: string;
};

const posts: Post[] = [
  {
    date: "Apr 15, 2026",
    title: "Write Your First Mobile E2E Test in YAML with FinalRun",
    source: "FinalRun Blog",
    url: "https://blogs.finalrun.app/write-your-first-mobile-e2e-test-in-yaml-with-finalrun",
  },
  {
    date: "Mar 18, 2026",
    title:
      "FinalRun achieves the New #1 SOTA Mobile Agent Eclipsing Benchmarks at 97.4%",
    source: "FinalRun Blog",
    url: "https://blogs.finalrun.app/finalrun-achieves-the-new-1-sota-mobile-agent-eclipsing-benchmarks-at-97-4",
  },
  {
    date: "Jun 16, 2023",
    title:
      "Harnessing the Power of Kotlin Multiplatform: Elevating Mobile Development to New Heights",
    source: "Medium",
    url: "https://ashish1.medium.com/harnessing-the-power-of-kotlin-multiplatform-elevating-mobile-development-to-new-heights-5c80e590a03b",
  },
  {
    date: "May 30, 2023",
    title: "Intercept Android WebView Request",
    source: "ProAndroidDev",
    url: "https://proandroiddev.com/intercept-android-webview-request-c67b9ed52ef7",
  },
  {
    date: "May 29, 2023",
    title: "Jetpack Compose Rendering Steps: A Beginner's Guide",
    source: "Medium",
    url: "https://ashish1.medium.com/jetpack-compose-rendering-steps-a-beginners-guide-bca877a4fe41",
  },
  {
    date: "May 25, 2023",
    title: "Kotlin Language Features to Improve Your Code",
    source: "Medium",
    url: "https://ashish1.medium.com/kotlin-language-features-to-improve-your-code-ee38a4fd317",
  },
  {
    date: "Jan 14, 2021",
    title: "Build a Simple Networking Library in Android (Part 2)",
    source: "Medium",
    url: "https://ashish1.medium.com/build-a-simple-networking-library-in-android-part-2-372db85e118e",
  },
  {
    date: "Jan 14, 2021",
    title: "Build a Simple Networking Library in Android (Part 1)",
    source: "ProAndroidDev",
    url: "https://proandroiddev.com/build-a-simple-networking-library-in-android-part-1-3ec67a515a8e",
  },
];

export default function BlogPage() {
  return (
    <>
      <h1 className="mb-7 text-balance font-semibold text-neutral-900 dark:text-neutral-100">
        Blog
      </h1>
      <p className="mt-7">
        Writing on mobile engineering, Android, Kotlin, and building FinalRun.
      </p>
      <ul className="mt-10 space-y-6">
        {posts.map((p) => (
          <li key={p.url} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="flex-none font-mono text-xs tabular-nums text-neutral-500 sm:w-28 sm:pt-1">
              {p.date}
            </span>
            <div className="min-w-0">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:text-neutral-200 dark:decoration-neutral-700 dark:hover:decoration-neutral-400"
              >
                {p.title}
              </a>
              <p className="mt-1 text-xs text-neutral-500">{p.source}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
