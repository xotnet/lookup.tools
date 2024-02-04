import { Logo } from '@/components/logo';
import { TOOLS } from '@/lib/resources/tools';
import { SearchBar } from './_components/search-bar';
import { ToolCard } from './_components/tool-card';

interface HomePageProps {
  searchParams: { q?: string };
}

export default function HomePage({ searchParams }: HomePageProps) {
  const query = searchParams.q?.toLowerCase();
  return (
    <>
      <section className="space-y-6 py-12 sm:py-24">
        <div className="space-y-4">
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-4">
            <Logo className="size-12 shrink-0 sm:size-16" />
            <h1 className="whitespace-nowrap text-5xl font-semibold tracking-tighter md:text-6xl">
              Lookup Tools
            </h1>
          </div>
          <h2 className="mx-auto max-w-lg text-center text-sm font-medium tracking-tight text-muted-foreground sm:text-base">
            The cyber swiss army knife of lookup tools. Research information on
            domains, IP addresses, email addresses, phone numbers, and more.
          </h2>
        </div>
        <SearchBar />
      </section>
      <section className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {TOOLS.filter(
          (tool) =>
            !query ||
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query)
        ).map((tool) => (
          <ToolCard key={tool.slug} {...tool} />
        ))}
      </section>
    </>
  );
}
