export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className="p-4 max-w-screen-xl pb-10">
        {children}
    </section>
}