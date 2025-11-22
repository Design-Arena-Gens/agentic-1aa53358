import { WallArtIdea } from "@/data/wallArtNiches";
import { getAggregateMetrics } from "@/lib/analytics";

type StrategicInsightsProps = {
  ideas: WallArtIdea[];
};

export const StrategicInsights = ({ ideas }: StrategicInsightsProps) => {
  const metrics = getAggregateMetrics(ideas);

  if (metrics.totalIdeas === 0) {
    return (
      <section className="rounded-3xl border border-indigo-200/40 bg-white/10 p-6 text-indigo-100">
        <h2 className="text-lg font-semibold text-white">Strategic Conversion Signals</h2>
        <p className="mt-2 text-sm">
          Adjust filters to surface research-backed opportunities. We hide insight blocks when no
          qualified ideas remain to keep the signal clean.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Strategic Conversion Signals</h2>
          <p className="text-sm text-slate-600">
            Mapping the highest buying intent lanes across creative, channel, and persona angles.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {metrics.totalIdeas} Validated Blueprints
        </span>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Fastest Momentum
          </span>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {metrics.highestTrend?.title}
          </p>
          <p className="text-sm text-slate-600">{metrics.highestTrend?.emotionalHook}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
              Momentum {metrics.highestTrend?.trendMomentum}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
              Virality {metrics.highestTrend?.socialVirality}
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Evergreen Anchor
          </span>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {metrics.highestEvergreen?.title}
          </p>
          <p className="text-sm text-slate-600">{metrics.highestEvergreen?.shortDescription}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
              Durability {metrics.highestEvergreen?.evergreenScore}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
              Keywords {metrics.keywordCount}+ surfaced
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-800">Platform Alignment</h3>
        <div className="mt-2 grid gap-2 md:grid-cols-2">
          {metrics.platformInsights.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{platform.name}</p>
                <p className="text-xs text-slate-500">
                  Avg conversion {platform.avgConversion}% · Avg volume{" "}
                  {platform.avgVolume.toLocaleString()}
                </p>
              </div>
              <span className="text-xs font-semibold text-indigo-600">
                Focus share {platform.focusShare}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <footer className="rounded-2xl border border-indigo-100 bg-white/80 p-4 text-xs text-slate-600">
        Recommended platform stack to test first:{" "}
        <span className="font-semibold text-indigo-600">
          {metrics.recommendedPlatforms.join(" · ")}
        </span>
        . Sequence creative launches with rapid landing page iterations + AI assisted ad copy for
        accelerated validation.
      </footer>
    </section>
  );
};
