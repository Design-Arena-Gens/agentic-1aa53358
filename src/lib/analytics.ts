import { platforms as allPlatforms, WallArtIdea } from "@/data/wallArtNiches";

export type FilterState = {
  query: string;
  platform: string | null;
  niche: string | null;
  persona: string | null;
  minEvergreen: number;
  minTrend: number;
  maxListingCount: number | null;
};

const normalize = (value: number, min: number, max: number) => {
  if (max === min) return 0;
  return (value - min) / (max - min);
};

export const filterIdeas = (ideas: WallArtIdea[], filters: FilterState) => {
  return ideas.filter((idea) => {
    const matchesQuery =
      filters.query.trim().length === 0 ||
      [idea.title, idea.shortDescription, idea.keywords.join(" "), idea.brandAngle].some((field) =>
        field.toLowerCase().includes(filters.query.toLowerCase()),
      );

    if (!matchesQuery) return false;

    if (filters.niche && idea.nicheCategory !== filters.niche) return false;
    if (filters.persona && idea.targetPersona !== filters.persona) return false;
    if (filters.minEvergreen > idea.evergreenScore) return false;
    if (filters.minTrend > idea.trendMomentum) return false;

    if (filters.platform) {
      const hasPlatform = idea.platforms.some((p) => p.platform === filters.platform);
      if (!hasPlatform) return false;
      if (filters.maxListingCount !== null) {
        const platformMeta = idea.platforms.find((p) => p.platform === filters.platform);
        if (!platformMeta || platformMeta.listingCount > filters.maxListingCount) return false;
      }
    } else if (filters.maxListingCount !== null) {
      const bestPlatform = idea.platforms.reduce((prev, platform) =>
        platform.listingCount < prev.listingCount ? platform : prev,
      );
      if (bestPlatform.listingCount > filters.maxListingCount) return false;
    }

    return true;
  });
};

export const scoreIdea = (idea: WallArtIdea) => {
  const conversionStats = idea.platforms.map((p) => p.conversionRate);
  const avgConversion =
    conversionStats.reduce((total, rate) => total + rate, 0) / idea.platforms.length;
  const lowestListing = Math.min(...idea.platforms.map((p) => p.listingCount));
  const highestVolume = Math.max(...idea.platforms.map((p) => p.searchVolume));

  const conversionScore = normalize(avgConversion, 2, 7) * 0.35;
  const trendScore = normalize(idea.trendMomentum, 50, 100) * 0.22;
  const evergreenScore = normalize(idea.evergreenScore, 60, 95) * 0.18;
  const socialScore = normalize(idea.socialVirality, 50, 95) * 0.12;
  const lowCompetitionScore = normalize(4000 - lowestListing, 0, 4000) * 0.08;
  const volumeScore = normalize(highestVolume, 1000, 15000) * 0.05;

  return Math.round((conversionScore + trendScore + evergreenScore + socialScore + lowCompetitionScore + volumeScore) * 100);
};

export const getAggregateMetrics = (ideas: WallArtIdea[]) => {
  if (ideas.length === 0) {
    return {
      totalIdeas: 0,
      platformInsights: [],
      highestTrend: null,
      highestEvergreen: null,
      keywordCount: 0,
      recommendedPlatforms: allPlatforms.slice(0, 3),
    };
  }

  const totalIdeas = ideas.length;
  const platformSet = new Map<string, { conversion: number; volume: number; count: number }>();

  ideas.forEach((idea) => {
    idea.platforms.forEach((platform) => {
      const current = platformSet.get(platform.platform) ?? { conversion: 0, volume: 0, count: 0 };
      current.conversion += platform.conversionRate;
      current.volume += platform.searchVolume;
      current.count += 1;
      platformSet.set(platform.platform, current);
    });
  });

  const platformInsights = Array.from(platformSet.entries())
    .map(([name, stats]) => ({
      name,
      avgConversion: +(stats.conversion / stats.count).toFixed(1),
      avgVolume: Math.round(stats.volume / stats.count),
      focusShare: Math.round((stats.count / ideas.length) * 100),
    }))
    .sort((a, b) => b.avgConversion - a.avgConversion);

  const highestTrend = ideas.reduce((best, idea) => {
    if (!best) return idea;
    return idea.trendMomentum > best.trendMomentum ? idea : best;
  }, ideas[0]);

  const highestEvergreen = ideas.reduce((best, idea) => {
    if (!best) return idea;
    return idea.evergreenScore > best.evergreenScore ? idea : best;
  }, ideas[0]);

  const totalKeywords = ideas.reduce((set, idea) => {
    idea.keywords.forEach((keyword) => set.add(keyword));
    return set;
  }, new Set<string>());

  return {
    totalIdeas,
    platformInsights,
    highestTrend,
    highestEvergreen,
    keywordCount: totalKeywords.size,
    recommendedPlatforms: allPlatforms.slice(0, 3),
  };
};
