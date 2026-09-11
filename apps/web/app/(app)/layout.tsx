import { AppNavigation } from "@/components/app-navigation";

type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout( {children}: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-950 md:grid md:grid-cols-[240px_1fr]">
            <aside className="border-b border-slate-200 bg-white p-6 md:border-r md:border-b-0">
                <p className="text-xl font-semibold">ResourceFlow</p>
                <AppNavigation />
            </aside>
            <div className="p-6 md:p-10">{children}</div>
        </div>
    )
}