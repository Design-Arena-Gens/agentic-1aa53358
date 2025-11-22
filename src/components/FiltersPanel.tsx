import { niches, personas, platforms } from "@/data/wallArtNiches";
import { FilterState } from "@/lib/analytics";

type FiltersPanelProps = {
  filters: FilterState;
  onChange: (update: Partial<FilterState>) => void;
};

export const FiltersPanel = ({ filters, onChange }: FiltersPanelProps) => {
  return (
    <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="grid gap-2">
        <label htmlFor="search" className="text-sm font-semibold text-slate-700">
          Search insights
        </label>
        <input
          id="search"
          type="search"
          placeholder="Try “ADHD flow art”, “nursery gifting”, “Afrofuturism”..."
          value={filters.query}
          onChange={(event) => onChange({ query: event.target.value })}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700">Primary platform</label>
          <select
            value={filters.platform ?? ""}
            onChange={(event) => onChange({ platform: event.target.value || null })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">All platforms</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700">Niche lane</label>
          <select
            value={filters.niche ?? ""}
            onChange={(event) => onChange({ niche: event.target.value || null })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">All niches</option>
            {niches.map((niche) => (
              <option key={niche} value={niche}>
                {niche}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700">Buyer persona</label>
          <select
            value={filters.persona ?? ""}
            onChange={(event) => onChange({ persona: event.target.value || null })}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="">All buyer journeys</option>
            {personas.map((persona) => (
              <option key={persona} value={persona}>
                {persona}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-700">Evergreen floor</label>
            <input
              type="range"
              min={60}
              max={95}
              step={5}
              value={filters.minEvergreen}
              onChange={(event) => onChange({ minEvergreen: Number(event.target.value) })}
            />
            <span className="text-xs text-slate-600">{filters.minEvergreen}+ durability score</span>
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-semibold text-slate-700">Trend floor</label>
            <input
              type="range"
              min={60}
              max={100}
              step={5}
              value={filters.minTrend}
              onChange={(event) => onChange({ minTrend: Number(event.target.value) })}
            />
            <span className="text-xs text-slate-600">{filters.minTrend}+ momentum index</span>
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-slate-700">
          Max competition (listing count)
        </label>
        <input
          type="number"
          min={100}
          step={50}
          placeholder="e.g. 500"
          value={filters.maxListingCount ?? ""}
          onChange={(event) =>
            onChange({
              maxListingCount: event.target.value ? Number(event.target.value) : null,
            })
          }
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <span className="text-xs text-slate-500">
          Filters by the selected platform when chosen — otherwise uses the lowest competition lane.
        </span>
      </div>
    </div>
  );
};
