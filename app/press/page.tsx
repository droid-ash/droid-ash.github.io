type Press = {
  outlet: string;
  title: string;
  date: string;
  url: string;
};

const press: Press[] = [
  {
    outlet: "Android Weekly #723 · Libraries & Code",
    title:
      "FinalRun agent — An AI-driven CLI that tests Android and iOS apps using plain-English YAML specs",
    date: "Apr 2026",
    url: "https://androidweekly.net/issues/issue-723",
  },
  {
    outlet: "Hacker News (Show HN)",
    title:
      "Show HN: FinalRun — Spec-driven testing using English and vision for mobile apps",
    date: "Apr 2026",
    url: "https://news.ycombinator.com/item?id=47676044",
  },
  {
    outlet: "Reddit · r/indianstartups (68k views)",
    title:
      "Two founders from India, no IIT, no big team — topped Google DeepMind's Android World leaderboard",
    date: "Sep 2025",
    url: "https://www.reddit.com/r/indianstartups/comments/1n78bbh/two_founders_from_india_no_iit_no_big_team_top/",
  },
  {
    outlet: "CXO Today",
    title:
      "2-person startup FinalRun sets new global record as top autonomous mobile AI agent, surpassing DeepSeek, Alibaba, and ByteDance",
    date: "Sep 2025",
    url: "https://cxotoday.com/press-release/2-person-startup-finalrun-sets-new-global-record-as-top-autonomous-mobile-ai-agent-surpassing-deepseek-alibaba-and-bytedance/",
  },
  {
    outlet: "TimesTech",
    title:
      "FinalRun sets global record in autonomous AI, surpasses DeepSeek, Alibaba & ByteDance",
    date: "Sep 2025",
    url: "https://timestech.in/finalrun-sets-global-record-in-autonomous-ai-surpasses-deepseek-alibaba-bytedance/",
  },
];

export default function PressPage() {
  return (
    <>
      <h1 className="mb-7 text-balance font-semibold text-neutral-900 dark:text-neutral-100">
        Press
      </h1>
      <p className="mt-7">Mentions, features, and coverage of FinalRun.</p>
      <ul className="mt-10 space-y-6">
        {press.map((p) => (
          <li key={p.url} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="flex-none font-mono text-xs tabular-nums text-neutral-500 sm:w-24 sm:pt-1">
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
              <p className="mt-1 text-xs text-neutral-500">{p.outlet}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
