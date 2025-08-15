import React from 'react';

export default function PricingPage() {
  type Plan = {
    name: string;
    duration: string;
    original?: string;
    price: string;
    cadence: string;
    discount?: string;
    discountIcon?: string;
    buy: string;
    features: string[];
    featured?: boolean;
  };

  const silver: Plan[] = [
    {
      name: "Chart Champions",
      duration: "1 Month",
      original: "$ 280",
      price: "$ 70",
      cadence: "/ month",
      discount: "50% OFF",
      buy: "#",
      features: [
        "24 Hour Customer Support Response time",
        "Beginners Course",
        "Coaches Trade Recaps",
        "Exclusive Partner Deals",
        "Limited Community Discord Server",
        "Spectators",
        "Contenders",
        "Champions",
        "Daily BTC update (Monday Only)",
        "Daily BTC update (Every Weekday)",
        "Daily Stock update (Monday Only)",
        "Daily Stock update (Every Weekday)",
        "Live Weekly Trading AMA",
        "Weekly Trading Lessons",
        "Live Trading Sessions - x4",
        "Weekly BTC Trading Plan",
        "Weekly Altcoin Trading Plan",
        "Coaches Update Channels",
        "On-demand Learning Library",
        "Speedrun Master Class",
        "Daily Trading Sheet",
        "Trading Templates + Strategies",
        "Trading Journal",
        "Trading Assistant",
        "Trading Leaderboard Competition",
      ],
    },
    {
      name: "Pro Traders Lounge",
      duration: "1 Month",
      original: "$ 280",
      price: "$ 70",
      cadence: "/ month",
      discount: "50% OFF",
      buy: "#",
      features: [
        "Pro Academy Education Modules",
        "Access to Pro Traders Academy Discord",
        "3 Live Streams Weekly",
        "Access to PTL Discord",
        "11 Live Streams Weekly",
        "Access to the Live Lounge (Chill with the Pro Traders in Times of Volatility)",
        "Access to Live Trading Rooms",
        "Pro Traders Assistant Access 24/7",
        "Customer Support 24/7",
      ],
    },
    {
      name: "Silver+ Plan",
      duration: "12 Months",
      original: "$ 468",
      price: "$ 199",
      cadence: "/ year",
      discount: "57% OFF",
      buy: "#",
      features: [
        "Signals",
        "Access to 20 VIP channels",
        "Market analysis",
        "Community",
      ],
    },
  ];

  const gold: Plan[] = [
    {
      name: "Gold Plan",
      duration: "1 Month",
      original: "$ 58",
      price: "$ 29",
      cadence: "/ month",
      discount: "50% OFF",
      buy: "#",
      features: [
        "Signals",
        "Access to 50 VIP channels",
        "Market analysis 24/7",
        "Market Scanner",
        "Community",
      ],
    },
    {
      name: "Gold+ Plan (3 Months)",
      duration: "3 Months",
      original: "$ 174",
      price: "$ 79",
      cadence: "/ 3 months",
      discount: "55% OFF",
      buy: "#",
      features: [
        "Signals",
        "Access to 50 VIP channels",
        "Market analysis 24/7",
        "Market Scanner",
        "Community",
      ],
    },
    {
      name: "Gold+ Plan (12 Months)",
      duration: "12 Months",
      original: "$ 696",
      price: "$ 299",
      cadence: "/ year",
      discount: "57% OFF",
      buy: "#",
      features: [
        "Signals",
        "Access to 50 VIP channels",
        "Market analysis 24/7",
        "Market Scanner",
        "Community",
      ],
    },
  ];

  const diamond: Plan[] = [
    {
      name: "Diamond+ Plan",
      duration: "3 Months",
      original: "$ 234",
      price: "$ 99",
      cadence: "/ 3 months",
      discount: "58% OFF",
      discountIcon: "https://ext.same-assets.com/3802943734/699785481.svg",
      buy: "https://kryptokings.org/pricing/?add-to-cart=245",
      features: [
        "Highly profitable trading signals",
        "Exclusive access to 80 VIP channels",
        "Additional 25+ VIP channels!",
        "Crypto market and coin analysis 24/7",
        "Crypto Market Scanner",
        "Helpful community of fellow traders",
      ],
      featured: true,
    },
    {
      name: "Diamond Plan",
      duration: "1 Month",
      original: "$ 78",
      price: "$ 39",
      cadence: "/ month",
      discount: "50% OFF",
      discountIcon: "https://ext.same-assets.com/3802943734/2386656504.svg",
      buy: "https://kryptokings.org/pricing/?add-to-cart=238",
      features: [
        "Highly profitable trading signals",
        "Exclusive access to 80 VIP channels",
        "Crypto market and coin analysis 24/7",
        "Crypto Market Scanner",
        "Helpful community of fellow traders",
      ],
    },
    {
      name: "Diamond+ Plan (12 Months)",
      duration: "12 Months",
      original: "$ 936",
      price: "$ 375",
      cadence: "/ year",
      discount: "60% OFF",
      discountIcon: "https://ext.same-assets.com/3802943734/297971027.svg",
      buy: "https://kryptokings.org/pricing/?add-to-cart=248",
      features: [
        "Highly profitable trading signals",
        "Exclusive access to 80 VIP channels",
        "Additional 25+ VIP channels!",
        "Crypto market and coin analysis 24/7",
        "Crypto Market Scanner",
        "Helpful community of fellow traders",
      ],
    },
  ];

  const Card = ({ p }: { p: Plan }) => (
    <div
      className={`relative rounded-xl border p-6 ${
        p.featured
          ? "border-neutral-700 bg-neutral-900/50 ring-1 ring-white/10"
          : "border-neutral-800 bg-neutral-950/40"
      }`}
    >
      {p.discount && (
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-2 py-1 text-xs text-emerald-300">
          {p.discountIcon ? (
            <img alt="discount" src={p.discountIcon} className="h-4 w-4" />
          ) : null}
          <span>{p.discount}</span>
        </div>
      )}
      {p.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow">
          Most popular
        </div>
      )}
      <h2 className="text-xl font-semibold">{p.name}</h2>

      <p className="mt-1 text-sm text-neutral-400">{p.duration}</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-3xl font-semibold">{p.price}</span>
      </div>
      {p.original ? (
        <p className="mt-1 text-sm text-neutral-500 line-through">{p.original}</p>
      ) : null}
      <ul className="mt-6 space-y-2 text-sm text-neutral-300">
        {p.features.map((f, index) => (
          <li key={`feature-${index}`} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={p.buy}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200"
      >
        Buy now
      </a>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#0b0b0e] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-4 text-neutral-300">Choose a plan. You can edit prices and links later.</p>

        <h2 className="mt-12 text-2xl font-medium">Silver Plans</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {silver.map((p) => (
            <Card key={`${p.name}-${p.duration}`} p={p} />
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-medium">Gold Plans</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gold.map((p) => (
            <Card key={`${p.name}-${p.duration}`} p={p} />
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-medium">Diamond Plans</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diamond.map((p) => (
            <Card key={`${p.name}-${p.duration}`} p={p} />
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          Prices and checkout are handled on Krypto Kings via their cart (for Diamond plans). 
          Other plan links are placeholders you can update later.
        </p>
      </div>
    </main>
  );
}