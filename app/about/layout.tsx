export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="p-4 max-w-screen-lg pb-10 scroll-smooth">
        {children}
    </section>
}