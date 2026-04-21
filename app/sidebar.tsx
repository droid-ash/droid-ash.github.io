"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const items = [
  { href: "/", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/press", label: "press" },
  { href: "/work", label: "work" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full sm:mr-10 sm:w-16 md:mr-14">
      <ul className="mb-6 flex justify-end gap-4 text-right lowercase sm:sticky sm:top-10 sm:mb-0 sm:block sm:space-y-1 md:top-14">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  active
                    ? "text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-400 transition-colors hover:text-neutral-700 dark:text-neutral-600 dark:hover:text-neutral-300"
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className="hidden justify-end pt-6 sm:flex">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
