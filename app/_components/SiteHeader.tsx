import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  const textWithBreaks = "\n\n";

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-20 w-48 sm:h-24 sm:w-56 md:h-28 md:w-64">
            <Image
              src="/images/lkycic/topo-phi-logo.jpg"
              alt="Topo-phi"
              fill
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
              className="object-contain"
            />
          </div>
          <span className="text-xl font-semibold tracking-widest text-zinc-900 sm:text-2xl">
            {textWithBreaks}
          </span>
          {/* <span className="text-sm font-semibold tracking-tight text-zinc-900 sm:text-xl">
            Mapping Urban Belonging
          </span> */}

        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-700">
          <Link className="hover:text-zinc-900" href="/">
            Home
          </Link>
          <Link className="hover:text-zinc-900" href="/research">
            Research
          </Link>
          <Link className="hover:text-zinc-900" href="/team">
            Team
          </Link>
          <Link className="hover:text-zinc-900" href="/publications">
            Publications
          </Link>
          <Link className="hover:text-zinc-900" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
