import Link from "next/link";

export default function PublicationsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <nav className="text-sm text-zinc-600">
        <Link className="hover:text-zinc-900" href="/">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Publications</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Publications</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700">
          
        </p>
      </header>

      <section className="mt-8 rounded-md border border-zinc-200 bg-zinc-50 p-6">
        <div className="text-sm font-medium text-zinc-900">No publications added yet.</div>
        <div className="mt-1 text-sm text-zinc-600">
          
        </div>
      </section>
    </main>
  );
}
