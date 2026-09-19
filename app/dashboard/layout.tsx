import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Sidebar } from "@/components/dashboard/sidebar";
import { UserNav } from "@/components/dashboard/user-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const email = user.email || "user@example.com";

  return (
    <div className="flex min-h-screen flex-1">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <div className="md:hidden flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">Copywise</span>
          </div>
          <div className="ml-auto">
            <UserNav email={email} />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-zinc-50 p-6 dark:bg-black">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
