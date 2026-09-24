"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Employees",
    href: "/employees",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Planning",
    href: "/planning",
  },
  {
    label: "Reports",
    href: "/reports",
  },
];

export function AppNavigation() {
  const pathname = usePathname();

  return (
    <nav className="mt-8" aria-label="Main navigation">
      <ul className="space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {" "}
                {item.label}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
