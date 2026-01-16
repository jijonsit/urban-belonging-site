import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <nav className="text-sm text-zinc-600">
        <Link className="hover:text-zinc-900" href="/">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Contact</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
      </header>

      <section className="mt-8 max-w-2xl space-y-3 text-base leading-7 text-zinc-800">
        <p>
          For more information on the research project, please email{" "}
          <a className="font-medium text-blue-700 hover:underline" href="mailto:mappingurbanbelonging@gmail.com">
            mappingurbanbelonging@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
