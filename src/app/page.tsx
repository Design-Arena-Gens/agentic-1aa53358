"use client";

import { useMemo, useState } from "react";

import { IdeaCard } from "@/components/IdeaCard";
import { FiltersPanel } from "@/components/FiltersPanel";
import { StrategicInsights } from "@/components/StrategicInsights";
import { wallArtIdeas } from "@/data/wallArtNiches";
import { FilterState, filterIdeas, scoreIdea } from "@/lib/analytics";

const defaultFilters: FilterState = {
  query: "",
  platform: null,
  niche: null,
  persona: null,
  minEvergreen: 70,
  minTrend: 70,
  maxListingCount: null,
};

export default function Home() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredIdeas = useMemo(() => filterIdeas(wallArtIdeas, filters), [filters]);

  const rankedIdeas = useMemo(
    () =>
      [...filteredIdeas].sort((a, b) => {
        const result = scoreIdea(b) - scoreIdea(a);
        if (result !== 0) return result;
        return b.trendMomentum - a.trendMomentum;
      }),
    [filteredIdeas],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-14 text-slate-900">
        <header className="rounded-3xl border border-indigo-200/40 bg-white/10 p-8 shadow-2xl shadow-indigo-500/10 backdrop-blur">
          <div className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-100">
                Conversion Research Lab
              </span>
              <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
                Printable Wall Art Growth Radar
              </h1>
              <p className="text-sm text-indigo-100/80 md:text-base">
                Filter through the highest converting printable art opportunities surfaced from
                cross-platform demand, ad cost, and culture signals. Each blueprint is optimised for
                rapid launch across Etsy, Shopify, and creator commerce funnels.
              </p>
            </div>
            <div className="rounded-2xl border border-white/40 bg-white/10 px-6 py-4 text-xs text-indigo-100">
              <div className="font-semibold uppercase tracking-wide text-white">Playbook</div>
              <p className="mt-1">
                1. Pick a lane & buyer arc. 2. Deploy focused creative with the proven hook. 3.
                Layer upsells + content engine to extend LTV.
              </p>
            </div>
          </div>
        </header>

        <main className="grid gap-10 lg:grid-cols-[320px,1fr]">
          <aside className="flex flex-col gap-4">
            <FiltersPanel
              filters={filters}
              onChange={(update) => setFilters((previous) => ({ ...previous, ...update }))}
            />
            <button
              type="button"
              onClick={() => setFilters(defaultFilters)}
              className="w-full rounded-xl border border-indigo-200 bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
            >
              Reset research lens
            </button>
          </aside>
          <section className="flex flex-col gap-10">
            <StrategicInsights ideas={filteredIdeas} />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Execution-Ready Concepts</h2>
                <p className="text-sm text-indigo-100/80">
                  Ranked by conversion confidence, then trend momentum.
                </p>
              </div>
              <span className="rounded-full border border-indigo-200/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
                {rankedIdeas.length} fits
              </span>
            </div>
            {rankedIdeas.length === 0 ? (
              <div className="rounded-3xl border border-white/30 bg-white/10 p-10 text-center text-sm text-indigo-100">
                No validated combinations match right now. Loosen trend or listing thresholds to see
                more opportunities.
              </div>
            ) : (
              <div className="grid gap-6">
                {rankedIdeas.map((idea) => (
                  <IdeaCard key={idea.id} idea={idea} />
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
