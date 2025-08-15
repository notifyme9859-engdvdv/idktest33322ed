export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0e] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">Frequently Asked Questions</h1>
        <p className="mt-3 text-neutral-400">Source: exocharts.com/faq.html (you can edit any answer later).</p>

        <nav aria-label="Table of contents" className="mt-8 rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">On this page</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li><a className="hover:text-white" href="#general">General Questions</a></li>
            <li><a className="hover:text-white" href="#exocharts_application">Exocharts Application</a></li>
            <li><a className="hover:text-white" href="#exocharts_web">Other</a></li>
          </ul>
        </nav>

        <h2 id="general" className="mt-12 text-2xl font-medium">General Questions</h2>
        <div className="mt-6 space-y-6">
          <div id="q-crypto-payments" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Do you accept cryptocurrency payments?</h3>
            <p className="mt-2 text-neutral-300">No, we do not currently accept cryptocurrency payments due to tax legislation requirements. Please use other payment methods such as credit card or PayPal.</p>
          </div>
          <div id="q-discounts" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Do you offer discounts or coupon codes?</h3>
            <p className="mt-2 text-neutral-300">Yes, Exocharts.com offers a discount of 12% for a 3-month subscription and a discount of 23% for a 6-month subscription.</p>
          </div>
          <div id="q-cancel-subscription" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How do I stop my subscription and payments?</h3>
            <p className="mt-2 text-neutral-300">To downgrade your plan to Free Trial, go to your user profile and click on the payment section. You will still be able to use any remaining premium days before the downgrade takes effect.</p>
          </div>
          <div id="q-invoice" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How can I get an invoice?</h3>
            <p className="mt-2 text-neutral-300">After purchasing a premium subscription, open the purchase receipt email and click "View Receipt". Use the "Add Address & VAT Number" button, choose "This is a Business Purchase", fill in the company details, save, then download or print the invoice on the invoice page.</p>
          </div>
          <div id="q-paid-trial" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">I have paid and it still says trial</h3>
            <p className="mt-2 text-neutral-300">Payments are processed by Paddle. Some orders may be flagged for manual approval due to fraud checks, which can take up to 24 hours (typically 1–2 hours). If urgent, contact Paddle support with the purchase email.</p>
          </div>
          <div id="q-reverse-vat" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Can I get reverse charge VAT for business payment?</h3>
            <p className="mt-2 text-neutral-300">Yes. Press "Add VAT number" before payment and fill in the required fields. If the number is validated, VAT will not be charged.</p>
          </div>
        </div>

        <h2 id="exocharts_application" className="mt-12 text-2xl font-medium">Exocharts Application</h2>
        <div className="mt-6 space-y-6">
          <div id="q-geofence-vpn" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">GEOFENCE and VPN issues</h3>
            <p className="mt-2 text-neutral-300">Some users use VPNs which can cause data feed errors due to geofencing or configuration. Web version routes via Exocharts servers without geofencing; Desktop connects directly, so use a VPN only when needed and ensure the server is not in a restricted area. Example configuration is provided for NordVPN; other apps are similar.</p>
          </div>
          <div id="q-macos-security" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">MacOS security issue or app won't start</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/4409011080465-MacOs-security-issue" target="_blank" rel="noreferrer">help article</a> for resolving MacOS security prompts and app start issues.</p>
          </div>
          <div id="q-program-files" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Windows "Program Files" installation folder restrictions</h3>
            <p className="mt-2 text-neutral-300">Do not install ExoCharts in Program Files folders due to OS write restrictions. ExoCharts stores data in its installation folder. You can maintain multiple instances by copying the installation folder. Do not copy the DAO folder when upgrading a copied instance.</p>
          </div>
          <div id="q-dxfeed" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How to connect dxFeed data?</h3>
            <p className="mt-2 text-neutral-300">Refer to the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/4409019317905-How-to-connect-dxFeed-data-" target="_blank" rel="noreferrer">official guide</a> on connecting dxFeed data.</p>
          </div>
          <div id="q-change-timeframe" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">I could not change time frame on Exo desktop</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/7950206034449-I-could-not-change-time-frame-on-Exo-desktop" target="_blank" rel="noreferrer">help article</a> covering time frame changes on Exo desktop.</p>
          </div>
          <div id="q-tick-size" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">What tick size should I use?</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/7550853289233-What-tick-size-should-I-use-" target="_blank" rel="noreferrer">help article</a> covering recommended tick sizes.</p>
          </div>
          <div id="q-markers-different" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Why ExoCharts and TradingView markers are different (VAH/VAL/POC/etc)?</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/7550730748433-Why-ExoCharts-and-Trading-View-markers-are-different-vah-val-poc-etc-" target="_blank" rel="noreferrer">explanation</a> of differences between platforms.</p>
          </div>
          <div id="q-timezone" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How can I change the timezone of the chart?</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/4409276823313-How-can-I-change-the-timezone-of-the-chart-" target="_blank" rel="noreferrer">help article</a> on changing chart timezone.</p>
          </div>
          <div id="q-tpo-diff" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Why TPO POC/VAH/VAL and marker are different?</h3>
            <p className="mt-2 text-neutral-300">See the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/4409276480785-Why-TPO-POC-VAH-VAL-and-marker-are-different-" target="_blank" rel="noreferrer">help article</a> covering differences in TPO-derived markers.</p>
          </div>
        </div>

        <h2 id="exocharts_web" className="mt-12 text-2xl font-medium">Other</h2>
        <div className="mt-6 space-y-6">
          <div id="q-download-desktop" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Where can I download Exocharts Desktop Pro?</h3>
            <p className="mt-2 text-neutral-300">The most up-to-date version is in the Support Center <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/5466518923281-Exocharts-downloads" target="_blank" rel="noreferrer">downloads</a> page. Release notes are available <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/5760224909201-Release-notes" target="_blank" rel="noreferrer">here</a>.</p>
          </div>
          <div id="q-web-vs-desktop" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How is Web different from Desktop?</h3>
            <p className="mt-2 text-neutral-300">Web offers fast snapshots with predefined instruments and cloud processing. Desktop Pro offers deep customization, sessions, DOM, multi-screen workspaces, and an OpenGL engine capable of rendering millions of clusters per frame for advanced order flow analysis.</p>
          </div>
          <div id="q-web-premium-access" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Will Web Premium grant access to Desktop Pro?</h3>
            <p className="mt-2 text-neutral-300">No. Web Premium and Desktop Pro are separate products with separate licenses.</p>
          </div>
          <div id="q-support-manual" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">How to get support and manual?</h3>
            <p className="mt-2 text-neutral-300">Use the support widget (bottom-right), join the Discord community <a className="underline hover:text-white" href="https://discord.gg/tSq8sEM" target="_blank" rel="noreferrer">here</a>, and browse the <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us" target="_blank" rel="noreferrer">Help Center</a> and <a className="underline hover:text-white" href="https://help.exocharts.com/hc/en-us/articles/4408894734609-Exocharts-video-guides" target="_blank" rel="noreferrer">Video Guides</a>.</p>
          </div>
          <div id="q-desktop-features" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">What features will I get with Desktop Pro?</h3>
            <p className="mt-2 text-neutral-300">Desktop Pro includes Orderflow footprint charts, DOM, volume profiles, TPO, composite/dynamic profiles, VWAP, filters, synthetic volume, aggregated orders, multi-tab/screen/group workspaces, session manager, and access to crypto data and dxFeed connectors.</p>
          </div>
          <div id="q-desktop-trading" className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-lg font-medium">Can I trade from Desktop Pro?</h3>
            <p className="mt-2 text-neutral-300">Trading is not yet available on Desktop Pro; integration is in progress.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
