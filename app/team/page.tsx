import Link from "next/link";

export default function TeamPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <nav className="text-sm text-zinc-600">
        <Link className="hover:text-zinc-900" href="/">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">People</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Team</h1>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight">Founder</h2>
        <p className="mt-2 text-base text-zinc-800">Dr Felicity Hwee-Hwa Chan</p>
      </section>

    </main>
  );
}
