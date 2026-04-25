import Link from "next/link";

export default function AboutPage() {
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
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
      </header>

      <section className="mt-8">
        <h2 className="text-lg font-semibold tracking-tight">Backstory</h2>
        
        <div className="mt-4 prose prose-zinc max-w-none">
          <h3 className="text-base font-semibold text-zinc-800">How did Topo-phi come about?</h3>
          <p className="mt-2 text-base text-zinc-700 leading-relaxed">
            Topo-phi came about from a simple desire to continue the research and interest in a project that I started <em>Mapping Urban Belonging in Places of Flux in Singapore (MUB)</em> in 2023 beyond its two years of funding from Tote Board. Together with a small team of young researchers, we gathered many interesting and insightful findings about how urban change is perceived and experienced in the city, and within that context, how people form their belonging neighborhoods that are experiencing urban redevelopment in Singapore.
          </p>
          <p className="mt-3 text-base text-zinc-700 leading-relaxed">
            The audience who heard the findings, and everyone who was on the team, encouraged me to not stop here because this research is much needed. I knew too that there was much more life in the project and I was just getting started.
          </p>
          <p className="mt-3 text-base text-zinc-700 leading-relaxed">
            Topo-phi was set up on 1 January 2026 to do that and more. Topo-phi also marks a new season of life as a researcher and educator outside academia. Over the next few months as I work to spruce up the website, I will post more about the research findings. I am mindful to go with the flow and happy to connect if the material presented on this website excites and resonates with you.
          </p>
          
          <h3 className="mt-6 text-base font-semibold text-zinc-800">What does Topo-phi mean?</h3>
          <p className="mt-2 text-base text-zinc-700 leading-relaxed">
            Topo-phi originates from the word "topophilia," a concept I learned as a student of Geography in college when we were introduced to the prolific American geographer, Yi-Fu Tuan, who defined it as "the affective bond between people and place or setting." Topo-phi has a cute ring to it without excessive erudition. A practical hyphen differentiates it from an American outdoor adventure organization.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <img
              src="/Profile Picture _felicity HH Chan WCS24.jpeg"
              alt="Dr Felicity Hwee-Hwa Chan"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold tracking-tight">Founder</h2>
            <p className="mt-2 text-base text-zinc-800">Dr Felicity Hwee-Hwa Chan</p>
            <div className="mt-4 prose prose-zinc max-w-none">
              <p className="text-base text-zinc-700 leading-relaxed">
                Felicity is an educator, urban planner, and social researcher whose work focuses on demographic diversification, inter-group relations, belonging, and public space design. She combines ethnography, interviews, surveys, and mapping to generate socio-spatial insights that can inform inclusive public policies, urban planning and design. She fell in love with the idea of urban planning in junior college and decided to try out physical planning at the Urban Redevelopment Authority of Singapore as her first job after college. She has worked as a planner and an academic in public and non-profit sectors. She is the author of Tensions in Diversity: Spaces for Collective Life in Los Angeles published by the University of Toronto Press.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
