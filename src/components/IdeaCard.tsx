import { WallArtIdea } from "@/data/wallArtNiches";
import { scoreIdea } from "@/lib/analytics";

type IdeaCardProps = {
  idea: WallArtIdea;
};

const ScoreBadge = ({ score }: { score: number }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
    <span className="h-2 w-2 rounded-full bg-indigo-500" />
    Conversion Confidence {score}/100
  </span>
);

const MetricChip = ({ label, value }: { label: string; value: string }) => (
  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
    {label}
    <span className="ml-2 rounded-full bg-white px-2 py-0.5 text-slate-800 shadow">{value}</span>
  </span>
);

export const IdeaCard = ({ idea }: IdeaCardProps) => {
  const bestPlatform = idea.platforms.reduce((best, platform) =>
    platform.conversionRate > best.conversionRate ? platform : best,
  );
  const score = scoreIdea(idea);

  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{idea.title}</h3>
          <p className="text-sm text-slate-600">{idea.shortDescription}</p>
        </div>
        <ScoreBadge score={score} />
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
        <MetricChip label="Niche" value={idea.nicheCategory} />
        <MetricChip label="Persona focus" value={idea.targetPersona} />
        <MetricChip label="Best platform" value={bestPlatform.platform} />
        <MetricChip label="Evergreen" value={`${idea.evergreenScore}`} />
        <MetricChip label="Momentum" value={`${idea.trendMomentum}`} />
        <MetricChip label="Virality" value={`${idea.socialVirality}`} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <section>
          <h4 className="mb-1 text-sm font-semibold text-slate-800">Revenue Levers</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            {idea.upsellIdeas.map((upsell) => (
              <li key={upsell}>{upsell}</li>
            ))}
          </ul>
        </section>
        <section>
          <h4 className="mb-1 text-sm font-semibold text-slate-800">Proof of Demand</h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
            {idea.proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        <h4 className="mb-2 text-sm font-semibold text-slate-800">Platform Readiness</h4>
        <div className="grid gap-3 md:grid-cols-3">
          {idea.platforms.map((platform) => (
            <div
              key={platform.platform}
              className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50/70 p-3"
            >
              <span className="text-sm font-semibold text-slate-800">{platform.platform}</span>
              <div className="flex flex-wrap justify-between text-xs text-slate-600">
                <span>CVR</span>
                <strong className="text-slate-900">{platform.conversionRate}%</strong>
              </div>
              <div className="flex flex-wrap justify-between text-xs text-slate-600">
                <span>Search volume</span>
                <strong className="text-slate-900">
                  {platform.searchVolume.toLocaleString()}
                </strong>
              </div>
              <div className="flex flex-wrap justify-between text-xs text-slate-600">
                <span>Avg price</span>
                <strong className="text-slate-900">${platform.avgPrice}</strong>
              </div>
              <div className="flex flex-wrap justify-between text-xs text-slate-600">
                <span>Listing count</span>
                <strong className="text-slate-900">{platform.listingCount.toLocaleString()}</strong>
              </div>
              <div className="flex flex-wrap justify-between text-xs text-slate-600">
                <span>CPC</span>
                <strong className="text-slate-900">${platform.adCpc.toFixed(2)}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h4 className="mb-1 text-sm font-semibold text-slate-800">Content Engine Kickstarters</h4>
        <div className="flex flex-wrap gap-2">
          {idea.contentTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
      <div className="border-t border-slate-200 pt-4 text-xs text-slate-500">
        Emotional hook: <span className="text-slate-700">{idea.emotionalHook}</span>
      </div>
    </article>
  );
};
