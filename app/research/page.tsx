import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-10">
      <nav className="text-sm text-zinc-600">
        <Link className="hover:text-zinc-900" href="/">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-900">Research</span>
      </nav>

      <header className="mt-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Research</h1>
        
        <div className="mt-6 overflow-hidden rounded-md border border-zinc-200 bg-zinc-50">
          <img
            src="/images/lkycic/MUB_Cover_15_April_2025.png"
            alt="Mapping Urban Belonging in Places of Flux: Singapore (Cover)"
            className="h-auto w-full"
          />
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Mapping Urban Belonging in Places of Flux: Singapore
        </h2>
        <div className="mt-2 text-sm font-medium text-zinc-600">
          
        </div>
      
      </header>

      <section className="mt-8 space-y-5 text-base leading-7 text-zinc-800">
        <h2 className="text-lg font-semibold tracking-tight">Project Overview</h2>
        <p>
          Urban change in the next two decades in Singapore will be socio-spatial and multi-sourced as urban
          redevelopment will grow in scope and extent as the city’s built environment ages. Urban redevelopment is
          formidable and can exact emotional and social costs on individuals and groups as places, routines, and
          belongings become dislocated and disrupted.
        </p>
        <p>
          The project sets out to gain a better grasp of how urban residents perceive, conceive, and experience change
          in their neighborhoods, and in this context how they form their belongings in the city under conditions of
          change arising from redevelopment of their everyday urban environment.
        </p>
        <p>
          The data will be collected using digital cognitive mapping interviewing, a method valuable for accessing
          spatial consciousness, with urban residents from different demographic groups in selected neighborhoods.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight">LinkedIn Post</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-700">
          <a
            className="font-medium text-blue-700 hover:underline"
            href="https://www.linkedin.com/posts/world-cities-summit_world-cities-summit-2024-science-of-cities-activity-7298181419862827008-bWbx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAA3zv5gBL0lwswBoaHnH-wRNWYxHLi4zS2s"
            target="_blank"
            rel="noreferrer"
          >
            Project presentation
          </a>
          {" "}by Dr Felicity Chan at the Science of Cities Symposium of the World Cities Summit 2024.
        </p>
      </section>
    </main>
  );
}
