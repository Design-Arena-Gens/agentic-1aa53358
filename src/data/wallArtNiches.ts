export type PlatformMetric = {
  platform: string;
  conversionRate: number; // percentage 0-100
  searchVolume: number; // monthly searches
  avgPrice: number; // USD
  listingCount: number;
  adCpc: number; // cost-per-click in USD
};

export type WallArtIdea = {
  id: string;
  title: string;
  nicheCategory: string;
  shortDescription: string;
  targetPersona: string;
  emotionalHook: string;
  brandAngle: string;
  visualStyles: string[];
  keywords: string[];
  evergreenScore: number;
  trendMomentum: number;
  socialVirality: number;
  platforms: PlatformMetric[];
  proofPoints: string[];
  upsellIdeas: string[];
  contentTopics: string[];
};

export const wallArtIdeas: WallArtIdea[] = [
  {
    id: "mindful-architecture",
    title: "Mindful Brutalist Meditation Prints",
    nicheCategory: "Mindfulness & Modern Aesthetics",
    shortDescription:
      "Geometric brutalist line work blended with calming mantras tailored to high-performing remote professionals seeking a zen home office.",
    targetPersona: "Remote tech professionals 26-38 balancing productivity with calm",
    emotionalHook:
      "Creates a visual reminder to decompress without breaking professional focus, matching the concrete-and-plant décor trend.",
    brandAngle: "Design-led mindfulness with data-backed affirmations",
    visualStyles: ["Brutalism", "Soft gradients", "San-serif typography"],
    keywords: [
      "mindful wall art",
      "brutalist art print",
      "zen office decor",
      "productivity affirmations",
    ],
    evergreenScore: 83,
    trendMomentum: 72,
    socialVirality: 78,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 4.9,
        searchVolume: 8100,
        avgPrice: 18,
        listingCount: 940,
        adCpc: 0.61,
      },
      {
        platform: "Creative Market",
        conversionRate: 3.4,
        searchVolume: 3200,
        avgPrice: 24,
        listingCount: 210,
        adCpc: 0.45,
      },
      {
        platform: "Shopify (Paid Social)",
        conversionRate: 2.1,
        searchVolume: 5600,
        avgPrice: 26,
        listingCount: 1800,
        adCpc: 0.78,
      },
    ],
    proofPoints: [
      "9% MoM growth in 'mindful office decor' searches across Pinterest Trends.",
      "LinkedIn posts featuring brutalist+green home offices average 4.3k engagements.",
      "Calm app partnership opportunities with shared persona alignment.",
    ],
    upsellIdeas: [
      "Bundle with printable focus planners and digital desk backgrounds.",
      "Offer brand palette customization for corporate gifting.",
      "License to co-working spaces as rotating digital signage.",
    ],
    contentTopics: [
      "Case study: how mindful visuals reduce burnout markers.",
      "Playlist pairings for focus sessions with matching art themes.",
      "Behind-the-scenes of brutalist-inspired sketch process.",
    ],
  },
  {
    id: "astro-nursery",
    title: "Personalized Astro Nursery Guides",
    nicheCategory: "Parenting & Personalized Astrology",
    shortDescription:
      "Birth-chart inspired nursery wall art with guided affirmations and milestone trackers for millennial parents leaning into astrology.",
    targetPersona: "Millennial parents 28-40 with interest in astro-guided parenting",
    emotionalHook:
      "Transforms the nursery into a meaningful ritual space celebrating each child's cosmic story.",
    brandAngle: "Hyper-personalized astrology translated into modern print sets",
    visualStyles: ["Celestial watercolors", "Gold foil textures", "Soft serif fonts"],
    keywords: [
      "personalized nursery art",
      "birth chart wall decor",
      "astrology baby gift",
      "cosmic milestone tracker",
    ],
    evergreenScore: 76,
    trendMomentum: 88,
    socialVirality: 82,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 5.6,
        searchVolume: 12200,
        avgPrice: 28,
        listingCount: 780,
        adCpc: 0.67,
      },
      {
        platform: "Amazon Handmade",
        conversionRate: 3.9,
        searchVolume: 9800,
        avgPrice: 32,
        listingCount: 620,
        adCpc: 0.84,
      },
      {
        platform: "Pinterest",
        conversionRate: 2.7,
        searchVolume: 14300,
        avgPrice: 25,
        listingCount: 1320,
        adCpc: 0.53,
      },
    ],
    proofPoints: [
      "Pinterest searches for 'zodiac nursery decor' up 118% YoY.",
      "TikTok hashtag #cosmicbabyroom surpasses 18M views with consistent growth.",
      "High gifting intent around baby showers and first birthdays with repeat buyers.",
    ],
    upsellIdeas: [
      "Printable milestone cards matched to zodiac archetypes.",
      "Custom lullaby playlists integrated via QR codes on the art.",
      "Seasonal astrology forecast inserts for returning customers.",
    ],
    contentTopics: [
      "How to interpret your baby's moon sign for bedtime routines.",
      "Color psychology aligned with birth chart elements.",
      "Stories from parents building astro nurseries (UGC).",
    ],
  },
  {
    id: "eco-diners",
    title: "Zero-Waste Kitchen Art Blueprint",
    nicheCategory: "Sustainability & Kitchen Lifestyle",
    shortDescription:
      "Restaurant-inspired infographic prints that guide eco-conscious households through zero-waste cooking rituals.",
    targetPersona: "Urban families and foodies prioritizing sustainability and aesthetics",
    emotionalHook:
      "Transforms sustainability into a badge of honor displayed in the heart of the home.",
    brandAngle: "Chef-approved sustainability systems visualized beautifully",
    visualStyles: ["Minimalist line art", "Earthy palettes", "Chalkboard typography"],
    keywords: [
      "kitchen sustainability art",
      "zero waste cooking print",
      "eco kitchen wall decor",
      "low waste household checklist",
    ],
    evergreenScore: 81,
    trendMomentum: 69,
    socialVirality: 65,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 4.1,
        searchVolume: 6400,
        avgPrice: 21,
        listingCount: 540,
        adCpc: 0.49,
      },
      {
        platform: "Shopify (Email)",
        conversionRate: 3.3,
        searchVolume: 4200,
        avgPrice: 23,
        listingCount: 890,
        adCpc: 0.41,
      },
      {
        platform: "Faire Wholesale",
        conversionRate: 2.6,
        searchVolume: 1300,
        avgPrice: 28,
        listingCount: 160,
        adCpc: 0.38,
      },
    ],
    proofPoints: [
      "Whole Foods and Erewhon trending toward sustainability merchandising displays.",
      "Zero-waste influencers average 5.8% engagement on kitchen reveal posts.",
      "High AOV when bundling with pantry labels and printable meal planners.",
    ],
    upsellIdeas: [
      "Companion printable pantry organization labels.",
      "Seasonal farmer's market guides with QR links to recipes.",
      "Affiliate partnership kits for eco-influencers.",
    ],
    contentTopics: [
      "Chef tips for eliminating waste in weeknight cooking.",
      "Pantry restock rituals with before/after transformations.",
      "Email automation: sustainability score audit checklist.",
    ],
  },
  {
    id: "neurodivergent-flow",
    title: "Neurodivergent Flow State Maps",
    nicheCategory: "Productivity & Neurodiversity Support",
    shortDescription:
      "Wall-sized flow maps designed with occupational therapists to help ADHD creators structure deep work blocks.",
    targetPersona: "Creatives and entrepreneurs with ADHD seeking visual systems",
    emotionalHook:
      "Shows clear, compassionate structure that reduces overwhelm and celebrates unique brains.",
    brandAngle: "Clinically informed yet aesthetically elevated productivity art",
    visualStyles: ["Bold color blocking", "Rounded typography", "Infographic elements"],
    keywords: [
      "adhd productivity wall art",
      "neurodivergent planner print",
      "focus map poster",
      "dopamine decor",
    ],
    evergreenScore: 74,
    trendMomentum: 91,
    socialVirality: 87,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 6.1,
        searchVolume: 11500,
        avgPrice: 22,
        listingCount: 370,
        adCpc: 0.57,
      },
      {
        platform: "Gumroad",
        conversionRate: 5.4,
        searchVolume: 5100,
        avgPrice: 17,
        listingCount: 240,
        adCpc: 0.33,
      },
      {
        platform: "TikTok Shop",
        conversionRate: 3.8,
        searchVolume: 8900,
        avgPrice: 19,
        listingCount: 520,
        adCpc: 0.29,
      },
    ],
    proofPoints: [
      "TikTok hashtag #adhddesksetup at 1.4B views with 7-day growth streak.",
      "ADHD coaching newsletters report 38% CTR on flow state framework resources.",
      "Occupational therapists seeking white-label versions for clients.",
    ],
    upsellIdeas: [
      "Printable dopamine menu cards.",
      "Digital Notion dashboard template pairing.",
      "Quarterly live workshops packaged with art bundle.",
    ],
    contentTopics: [
      "How to reset your environment in 90 seconds using the map.",
      "Client wins: before/after workspace transformations.",
      "Expert interviews with occupational therapists and ADHD coaches.",
    ],
  },
  {
    id: "pet-memorial",
    title: "Pet Legacy Storyboards",
    nicheCategory: "Grief Support & Pet Lovers",
    shortDescription:
      "Illustrated celebration boards that weave pet memories, rescue stats, and healing rituals for grieving owners.",
    targetPersona: "Pet parents 30-55 navigating grief and seeking legacy keepsakes",
    emotionalHook:
      "Helps families honor their pets with a storytelling experience that feels therapeutic.",
    brandAngle: "Compassionate storytelling with customizable illustration styles",
    visualStyles: ["Soft watercolor", "Handwritten script", "Mixed photo collage"],
    keywords: [
      "pet memorial wall art",
      "custom pet remembrance",
      "rainbow bridge print",
      "pet loss gift printable",
    ],
    evergreenScore: 89,
    trendMomentum: 64,
    socialVirality: 71,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 7.2,
        searchVolume: 15400,
        avgPrice: 31,
        listingCount: 650,
        adCpc: 0.73,
      },
      {
        platform: "Amazon Handmade",
        conversionRate: 4.8,
        searchVolume: 10200,
        avgPrice: 34,
        listingCount: 410,
        adCpc: 0.91,
      },
      {
        platform: "Facebook Ads",
        conversionRate: 2.4,
        searchVolume: 7600,
        avgPrice: 29,
        listingCount: 980,
        adCpc: 0.88,
      },
    ],
    proofPoints: [
      "Pet loss forums average 2.6k new threads weekly with resource requests.",
      "Grief counselors recommend storytelling rituals; high referral potential.",
      "Gift givers show strong repeat purchase for anniversaries and holidays.",
    ],
    upsellIdeas: [
      "Matching thank-you cards for veterinarians and rescue teams.",
      "Digital photo book templates with shared color palettes.",
      "Guided journal insert that expands the storyboard narrative.",
    ],
    contentTopics: [
      "Healing rituals to pair with the storyboard reveal.",
      "Rescue partnership features with donation call-to-action.",
      "User-generated memory spotlight reels.",
    ],
  },
  {
    id: "motorsport-femmes",
    title: "Women of Motorsports Tribute Prints",
    nicheCategory: "Sports Fandom & Female Empowerment",
    shortDescription:
      "Bold tribute posters celebrating pioneering women across F1, MotoGP, and rally, built for TikTok-fueled fandoms.",
    targetPersona: "Gen Z motorsport fans seeking feminist narratives and merch",
    emotionalHook:
      "Captures the rebellious energy of motorsport culture with feminist storytelling.",
    brandAngle: "Official-feel collectible posters with data-driven storytelling",
    visualStyles: ["High-contrast neon", "Grainy textures", "Bold sans-serif"],
    keywords: [
      "female f1 art print",
      "motorsport wall poster",
      "women racers decor",
      "feminist racing merch",
    ],
    evergreenScore: 62,
    trendMomentum: 95,
    socialVirality: 91,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 3.8,
        searchVolume: 7800,
        avgPrice: 19,
        listingCount: 420,
        adCpc: 0.52,
      },
      {
        platform: "TikTok Shop",
        conversionRate: 4.2,
        searchVolume: 16400,
        avgPrice: 22,
        listingCount: 360,
        adCpc: 0.47,
      },
      {
        platform: "Redbubble",
        conversionRate: 2.9,
        searchVolume: 5400,
        avgPrice: 17,
        listingCount: 660,
        adCpc: 0.36,
      },
    ],
    proofPoints: [
      "Netflix 'Drive to Survive' female viewership up 32% YoY.",
      "TikTok creators covering F1 WAGs and female drivers average 12% engagement.",
      "Partnership potential with women-in-motorsport foundations.",
    ],
    upsellIdeas: [
      "Limited-edition race weekend bundles with printable lanyards.",
      "Augmented reality filter that animates the poster via QR code.",
      "Community membership with race recap downloads.",
    ],
    contentTopics: [
      "Historic firsts for women in motorsports timeline.",
      "Race weekend styling guides featuring the art.",
      "Interviews with female motorsport journalists.",
    ],
  },
  {
    id: "ai-poetry",
    title: "AI-Coauthored Poetry Prints",
    nicheCategory: "AI Personalization & Literary Decor",
    shortDescription:
      "Interactive poetry wall art where customers input prompts and receive AI-assisted verse with bespoke typography.",
    targetPersona: "Gifting market for literary romantics and tech-curious creatives",
    emotionalHook:
      "Transforms personal moments into artful poetry that feels both futuristic and intimate.",
    brandAngle: "Human-AI collaboration showcased through collectible prints",
    visualStyles: ["Custom serif fonts", "Foil accents", "Deep gradients"],
    keywords: [
      "custom poem art print",
      "ai generated poetry gift",
      "anniversary wall decor",
      "love letter poster",
    ],
    evergreenScore: 68,
    trendMomentum: 84,
    socialVirality: 79,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 4.5,
        searchVolume: 6900,
        avgPrice: 27,
        listingCount: 530,
        adCpc: 0.62,
      },
      {
        platform: "Shopify (UGC Influencers)",
        conversionRate: 3.1,
        searchVolume: 4800,
        avgPrice: 31,
        listingCount: 720,
        adCpc: 0.74,
      },
      {
        platform: "Product Hunt Launch",
        conversionRate: 2.3,
        searchVolume: 2500,
        avgPrice: 35,
        listingCount: 120,
        adCpc: 0.41,
      },
    ],
    proofPoints: [
      "Viral TikTok formats around AI love letters exceeding 9M views.",
      "AI art tools experiencing 27% QoQ adoption in gifting segments.",
      "High customization perceived value enabling premium pricing tiers.",
    ],
    upsellIdeas: [
      "Frame mockups optimized for Etsy thumbnails.",
      "Companion video invitation templates showcasing the poem.",
      "Subscription for monthly poetry drops with seasonal themes.",
    ],
    contentTopics: [
      "Prompt library for unforgettable AI Valentine's gifts.",
      "Showcase: couples reacting to their personalized poem reveal.",
      "Behind the scenes: blending human editing with AI drafting.",
    ],
  },
  {
    id: "black-heritage",
    title: "Afrofuturist Heritage Maps",
    nicheCategory: "Cultural Pride & Education",
    shortDescription:
      "Vibrant map series spotlighting African diaspora innovation hubs with QR-linked mini documentaries.",
    targetPersona: "Gen Z & Millennial buyers seeking culturally rich statement art",
    emotionalHook:
      "Combines pride, education, and future-forward storytelling in a gallery-worthy format.",
    brandAngle: "Museum-grade storytelling with community-led research",
    visualStyles: ["Afrofuturist neon", "Cartographic lines", "3D depth shading"],
    keywords: [
      "afrofuturist wall art",
      "black heritage map",
      "diaspora art print",
      "cultural education decor",
    ],
    evergreenScore: 85,
    trendMomentum: 79,
    socialVirality: 88,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 5.2,
        searchVolume: 8600,
        avgPrice: 33,
        listingCount: 380,
        adCpc: 0.58,
      },
      {
        platform: "Shopify (SEO)",
        conversionRate: 3.4,
        searchVolume: 7200,
        avgPrice: 38,
        listingCount: 660,
        adCpc: 0.46,
      },
      {
        platform: "Instagram Shops",
        conversionRate: 2.8,
        searchVolume: 9500,
        avgPrice: 35,
        listingCount: 540,
        adCpc: 0.52,
      },
    ],
    proofPoints: [
      "42% YoY increase in 'Afrofuturism decor' Google searches.",
      "Black history educators seeking visual tools for classroom storytelling.",
      "High resonance during Black History Month and Juneteenth campaigns.",
    ],
    upsellIdeas: [
      "Interactive AR layer unlocking audiovisual histories.",
      "Limited series with NFT authentication for collectors.",
      "Workshop kits for educators featuring printable lesson plans.",
    ],
    contentTopics: [
      "Spotlight on innovators from featured cities.",
      "UGC challenge: share your family's heritage map pin.",
      "Studio tour: blending archival research with illustration.",
    ],
  },
  {
    id: "wellness-hotels",
    title: "Wellness Retreat Mood Boards",
    nicheCategory: "Hospitality & Wellness Tourism",
    shortDescription:
      "High-ticket visual mood boards licensed to boutique hotels showcasing immersive retreat experiences.",
    targetPersona: "Boutique hotel marketers and wellness retreat hosts",
    emotionalHook:
      "Transforms spa packages into immersive storytelling assets that sell the feeling before arrival.",
    brandAngle: "Commercial-ready art with conversion-focused copy overlays",
    visualStyles: ["Luxury minimalism", "Soft motion blur", "Neutral palettes"],
    keywords: [
      "hotel mood board printable",
      "wellness retreat marketing art",
      "spa experience wall decor",
      "boutique hotel storytelling",
    ],
    evergreenScore: 71,
    trendMomentum: 66,
    socialVirality: 58,
    platforms: [
      {
        platform: "Canva Creators",
        conversionRate: 4.6,
        searchVolume: 5400,
        avgPrice: 42,
        listingCount: 270,
        adCpc: 0.49,
      },
      {
        platform: "Faire Wholesale",
        conversionRate: 3.1,
        searchVolume: 2200,
        avgPrice: 47,
        listingCount: 140,
        adCpc: 0.44,
      },
      {
        platform: "LinkedIn Outreach",
        conversionRate: 1.9,
        searchVolume: 3100,
        avgPrice: 58,
        listingCount: 90,
        adCpc: 1.12,
      },
    ],
    proofPoints: [
      "Luxury travel bookings increasing 28% with wellness-focused offerings.",
      "Retreat hosts actively seeking branded collateral for upselling add-ons.",
      "High LTV via licensing deals for chain rollouts.",
    ],
    upsellIdeas: [
      "Editable brochure templates matching the art.",
      "Immersive soundscapes accessible via QR codes.",
      "Annual subscription unlocking seasonal refresh packs.",
    ],
    contentTopics: [
      "Conversion tips from top-grossing retreats.",
      "Moodboard to in-person experience case studies.",
      "How to position wellness stays for corporate offsites.",
    ],
  },
  {
    id: "micro-farmhouse",
    title: "Micro-Farmhouse Homestead Guides",
    nicheCategory: "Rural Lifestyle & DIY",
    shortDescription:
      "Printable illustrated guides for suburban homeowners transforming backyards into micro-farmhouse spaces.",
    targetPersona: "Suburban homeowners 32-50 craving rustic self-sufficiency aesthetics",
    emotionalHook:
      "Delivers step-by-step charm that makes small-space homesteading approachable and Instagrammable.",
    brandAngle: "Architectural clarity meets cozy farmhouse storytelling",
    visualStyles: ["Hand-drawn schematics", "Muted greens", "Vintage typewriter fonts"],
    keywords: [
      "micro homestead art print",
      "farmhouse backyard plan",
      "garden wall decor guide",
      "self sufficiency art",
    ],
    evergreenScore: 86,
    trendMomentum: 74,
    socialVirality: 68,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 4.7,
        searchVolume: 9100,
        avgPrice: 24,
        listingCount: 490,
        adCpc: 0.55,
      },
      {
        platform: "Pinterest",
        conversionRate: 3.2,
        searchVolume: 13400,
        avgPrice: 19,
        listingCount: 1020,
        adCpc: 0.37,
      },
      {
        platform: "Shopify (Blog SEO)",
        conversionRate: 2.4,
        searchVolume: 7800,
        avgPrice: 27,
        listingCount: 730,
        adCpc: 0.49,
      },
    ],
    proofPoints: [
      "Backyard homestead hashtags growing steadily across Instagram and YouTube.",
      "Home improvement retailers seeking affiliate collaborations.",
      "Seasonal kits (spring/fall) drive predictable revenue spikes.",
    ],
    upsellIdeas: [
      "Printable planting calendars and harvest trackers.",
      "Partnership boxes with seed brands for cross-promotions.",
      "VIP membership for quarterly landscaping refreshes.",
    ],
    contentTopics: [
      "Before-and-after backyard transformations.",
      "Sponsorship-ready blog content with SEO clusters.",
      "Email funnel: from first chicken coop idea to launch.",
    ],
  },
  {
    id: "digital-nomad",
    title: "Digital Nomad Passive Income Maps",
    nicheCategory: "Remote Work & Financial Freedom",
    shortDescription:
      "A collection of city-inspired roadmap prints showcasing passive income stacks and local lifestyle metrics.",
    targetPersona: "Digital nomads and aspiring remote founders 24-38",
    emotionalHook:
      "Makes the intangible lifestyle plan visual and shareable, boosting accountability within communities.",
    brandAngle: "Data-backed city blueprints meets aspirational storytelling",
    visualStyles: ["Gradient cityscapes", "Iconography", "Futuristic fonts"],
    keywords: [
      "digital nomad wall art",
      "passive income planner",
      "remote work city guide",
      "financial freedom print",
    ],
    evergreenScore: 79,
    trendMomentum: 83,
    socialVirality: 85,
    platforms: [
      {
        platform: "Etsy",
        conversionRate: 4.3,
        searchVolume: 7200,
        avgPrice: 23,
        listingCount: 510,
        adCpc: 0.59,
      },
      {
        platform: "Gumroad",
        conversionRate: 3.9,
        searchVolume: 4600,
        avgPrice: 21,
        listingCount: 340,
        adCpc: 0.35,
      },
      {
        platform: "Notion Marketplace",
        conversionRate: 5.1,
        searchVolume: 3900,
        avgPrice: 28,
        listingCount: 190,
        adCpc: 0.27,
      },
    ],
    proofPoints: [
      "Remote work community newsletters requesting monetizable assets.",
      "Nomad List communities seeking curated city blueprints.",
      "Affiliate opportunities with travel insurance and coworking brands.",
    ],
    upsellIdeas: [
      "Printable passport-style sticker sets per city.",
      "Email drip: 30-day passive income challenge with art prompts.",
      "In-app community where members share updated income stacks.",
    ],
    contentTopics: [
      "Case studies: from employee to nomad in three prints.",
      "City spotlight reels featuring local creators.",
      "Checklist: legal + financial setup for nomad visas.",
    ],
  },
];

export const niches = Array.from(new Set(wallArtIdeas.map((idea) => idea.nicheCategory))).sort();
export const platforms = Array.from(
  new Set(wallArtIdeas.flatMap((idea) => idea.platforms.map((platform) => platform.platform))),
).sort();
export const personas = Array.from(new Set(wallArtIdeas.map((idea) => idea.targetPersona))).sort();
