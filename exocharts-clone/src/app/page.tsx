import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b0b1e] via-[#1a0b2e] to-[#2d1b3d] text-white">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight md:text-[50px] md:font-extrabold">
              Professional Softwares and Premiums
            </h1>
            <p className="mt-7 text-xl text-neutral-300 max-w-2xl">
              One-stop solution for evertything.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#join-telegram"
                className="inline-flex items-center gap-2 rounded-md bg-[#26A5E4] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M22.218 2.442c-.61-.52-1.52-.45-2.02-.36L2.77 6.63c-.79.18-1.3.57-1.43 1.06-.14.51.2 1.08.93 1.45l4.58 2.15c.77.35 1.68.08 2.2-.61l5.9-7.48-7.06 8.86c-.35.43-.26 1.05.2 1.36l.02.01c.45.3 1.08.22 1.45-.19l9.1-9.94c.2-.22.53-.23.75-.04.21.19.24.51.07.74l-7.73 10.5c-.43.59-.25 1.42.38 1.76l.02.01c.63.34 1.44.08 1.76-.58l6.45-13.1c.24-.49.27-1.23-.38-1.8z"/></svg>
                <span>Join Telegram</span>
              </a>
              <a
                href="#join-discord"
                className="inline-flex items-center gap-2 rounded-md bg-[#5865F2] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M19.54 5.34A17.5 17.5 0 0 0 15.89 4l-.18.32c1.76.54 2.7 1.34 2.7 1.34-1.18-.61-2.32-.93-3.41-1.05a12.38 12.38 0 0 0-2.32 0C11.6 4.04 10.46 4.36 9.28 4.97c0 0 .94-.8 2.7-1.34L11.8 4A17.5 17.5 0 0 0 8.16 5.34C4.9 10.06 5.7 14.65 5.7 14.65a9.1 9.1 0 0 0 3.2 1.6l.66-.9c-1.16-.35-2.03-1.08-2.03-1.08l.32.18c.02.01.03.02.05.03 0 0 .02 0 .02.02 1.28.71 2.68 1.14 4.19 1.14s2.91-.43 4.19-1.14h.02l.07-.05s-.86.74-2.03 1.08l.66.9a9.1 9.1 0 0 0 3.2-1.6s.8-4.59-2.46-9.31ZM9.85 12.8c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33.67 0 1.21.6 1.19 1.33 0 .73-.52 1.33-1.19 1.33Zm4.3 0c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33s1.19.6 1.19 1.33c0 .73-.52 1.33-1.19 1.33Z"/></svg>
                <span>Join Discord</span>
              </a>
              <a
                href="#join-youtube"
                className="inline-flex items-center gap-2 rounded-md bg-[#FF0000] px-5 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M23.5 6.2s-.23-1.62-.94-2.34c-.9-.94-1.9-.95-2.37-1C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.19.36c-.47.05-1.47.06-2.37 1C-.23 4.58 0 6.2 0 6.2S.23 7.82.94 8.54c.9.94 2.1.91 2.63 1.01C5.3 9.78 12 9.82 12 9.82s4.9 0 8.19-.36c.47-.05 1.47-.06 2.37-1 .71-.72.94-2.34.94-2.34s.23-1.62-.94-2.34c-.9-.94-1.9-.95-2.37-1C16.9 8.3 12 8.3 12 8.3s-6.7-.04-8.43.33c-.53.1-1.73.07-2.63 1.01C-.23 10.4 0 12.02 0 12.02ZM9.55 7.33V4.9l3.81 1.22-3.81 1.21Z"/><path d="M0 12.02s-.23 1.62.94 2.34c.9.94 2.1.91 2.63 1.01C5.3 15.6 12 15.65 12 15.65s4.9 0 8.19-.36c.47-.05 1.47-.06 2.37-1 .71-.72.94-2.34.94-2.34s.23-1.62-.94-2.34c-.9-.94-1.9-.95-2.37-1C16.9 8.3 12 8.3 12 8.3s-6.7-.04-8.43.33c-.53.1-1.73.07-2.63 1.01C-.23 10.4 0 12.02 0 12.02Z"/></svg>
                <span>Join YouTube</span>
              </a>
              <a
                href="#get-started"
                className="ml-auto rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >

              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Total Traders", value: "1K+ traders" },
                { label: "Trades Taken", value: "100+ Learning Resources" },
                { label: "Matches Completed", value: "GPT-5 access to ask questions" },
                { label: "Tournaments Held", value: "Help Forum" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-2xl font-semibold text-white">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Most Competitive Prices", desc: "" },
                { title: "Cutting-edge technical analysis", desc: "" },
                { title: "Track Strategies", desc: "" },
                { title: "Community Learning", desc: "" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-emerald-400" />
                  <div>
                    <div className="text-sm font-medium text-white">{f.title}</div>
                    <div className="text-sm text-neutral-300">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_70%_10%,#1a1f3d_0%,transparent_60%),radial-gradient(60%_40%_at_10%_20%,#0f1b2a_0%,transparent_55%)]" />
          <img
            alt="chart background"
            src="https://images.unsplash.com/photo-1642790106117-cf8fc9b40f35?q=80&w=1887&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e] via-black/10 to-[#0b0b0e]" />
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-xl font-medium text-neutral-200">
            Top Premiums, Easy Access
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              { src: "https://ugc.same-assets.com/xntDDikmwbgVVERqepJzv6A0CCdkWwxp.jpeg", name: "Chart Champions" },
              { src: "https://ugc.same-assets.com/nWlJvUJarE78QCi63qXcL1PMxSbO6dQs.jpeg", name: "Exochart Desktop Pro " },
              { src: "https://ugc.same-assets.com/ps95GK-IfgjG8djby-TYFhwbWCEZ36Mq.png", name: "Pro Traders Lounge" },
              { src: "https://ext.same-assets.com/1159941532/1902774596.jpeg", name: "Credible Academy" },
              { src: "https://ext.same-assets.com/1159941532/2901502568.jpeg", name: "TraderSZ" },
              { src: "https://ext.same-assets.com/1159941532/722921890.jpeg", name: "Yo Crypto Platinum" },
              { src: "https://ext.same-assets.com/1159941532/2516144120.png", name: "Dans Signals" },
              { src: "https://ext.same-assets.com/1159941532/437907161.png", name: "Trading by CF" },
              { src: "https://ext.same-assets.com/1159941532/1640121722.jpeg", name: "Margin Whales" },
              { src: "https://ext.same-assets.com/1159941532/1342270112.jpeg", name: "Crypto Zone VIP" },
              { src: "https://ext.same-assets.com/1159941532/2881319521.png", name: "Crypto King" },
              { src: "https://ext.same-assets.com/1159941532/289527164.jpeg", name: "The Birb Nest" },
              { src: "https://ext.same-assets.com/1159941532/3059663317.jpeg", name: "The Crypto Hounds" },
              { src: "https://ext.same-assets.com/1159941532/2954232116.jpeg", name: "The Hunt" },
              { src: "https://ext.same-assets.com/1159941532/4088475068.jpeg", name: "21M Technicals" },
              { src: "https://ugc.same-assets.com/0fk1I7XiOIZHPCbiylQ9h8RwkTsL8mgO.jpeg", name: "Caixa Trading" },
              { src: "https://ugc.same-assets.com/xl_RbwfhXM5pu29w9DrpiZzLuzhnn6vN.jpeg", name: "Haven Group" },
              { src: "https://ext.same-assets.com/1159941532/870417094.png", name: "Warsnop ICF" },
              { src: "https://ext.same-assets.com/1159941532/2407259232.png", name: "Platter VIP" },
              { src: "https://ext.same-assets.com/1159941532/3961314525.jpeg", name: "Klondike PRO" },
              { src: "https://ext.same-assets.com/1159941532/982377683.jpeg", name: "Whales Guide" },
              { src: "https://ext.same-assets.com/1159941532/1684895320.png", name: "Bitmex Premium" },
              { src: "https://ext.same-assets.com/1159941532/3901026379.jpeg", name: "Crypto VIP Signals" },
              { src: "https://ext.same-assets.com/1159941532/2213053348.jpeg", name: "Ritesh Trades" },
              { src: "https://ext.same-assets.com/1159941532/2435921417.png", name: "Utopia Trading" },
              { src: "https://ext.same-assets.com/1159941532/2129424307.png", name: "Corgi Calls" },
              { src: "https://ext.same-assets.com/1159941532/1174720029.jpeg", name: "Ken Charts" },
              { src: "https://ext.same-assets.com/1159941532/3658969275.png", name: "Doctor Profit" },
              { src: "https://ext.same-assets.com/1159941532/2894105260.jpeg", name: "Rose Premium" },
              { src: "https://ext.same-assets.com/1159941532/2179604625.jpeg", name: "Crypto Cove" },
              { src: "https://ext.same-assets.com/1159941532/3053139934.png", name: "The Bulls" },
              { src: "https://ext.same-assets.com/1159941532/390599703.jpeg", name: "Universal Signals PRO" },
              { src: "https://ext.same-assets.com/1159941532/1177884191.jpeg", name: "Traders Grid" },
              { src: "https://ext.same-assets.com/1159941532/1742573608.png", name: "Signal Express" },
              { src: "https://ext.same-assets.com/1159941532/4006297615.jpeg", name: "Trade Devils" },
              { src: "https://ext.same-assets.com/1159941532/3177441654.png", name: "Crypto Coin Coach" },
            ].map((c) => (
              <div key={c.name} className="group rounded-lg border border-neutral-800 bg-neutral-950/40 p-4 hover:border-neutral-700">
                <div className="relative mx-auto aspect-square w-20 overflow-hidden rounded-md">
                  <Image src={c.src} alt={c.name} fill className="object-cover" />
                </div>
                <p className="mt-3 truncate text-center text-sm text-neutral-300">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
