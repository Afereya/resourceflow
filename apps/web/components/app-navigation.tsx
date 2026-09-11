import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
};

const navigationItems: NavigationItem[] = [
    {
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        label: "Employees",
        href: "/employees"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Planning",
        href: "/planning"
    },
    {
        label: "Reports",
        href: "/reports"
    }
]

export function AppNavigation() {
    return (
        <nav className="mt-8" aria-label="Main navigation">
            <ul className="space-y-1">
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <Link className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                        href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}