import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/lkycic/topo-phi-logo.jpg"
            alt="Topo-phi"
            width={200}
            height={30}
            priority
          />
        <span className="text-xl font-semibold tracking-wide text-zinc-900 sm:text-lg">^&emsp;</span>
{/*           <span className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">
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
