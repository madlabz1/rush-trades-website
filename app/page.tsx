import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, PHONE_HREF, trades } from "@/app/data/trades";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/rush-trades-logo.jpg"
              alt="Rush Trades"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/for-tradespeople"
              className="text-gray-600 hover:text-navy font-semibold transition-colors hidden sm:inline"
            >
              For Tradespeople
            </Link>
            <a
              href={PHONE_HREF}
              className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Urgent Jobs. Instant Leads.
            <br />
            <span className="text-orange">No Waiting.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Connect with vetted emergency tradespeople in under 60 seconds.
            <br />
            Available 24/7 across the UK. Free for homeowners.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-orange hover:bg-orange-dark text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors shadow-lg"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Trade Categories */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-12">
            Emergency Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {trades.map((trade) => (
              <Link
                key={trade.slug}
                href={`/${trade.slug}/london`}
                className="bg-white border-2 border-gray-200 hover:border-orange rounded-xl p-8 transition-all hover:shadow-xl group"
              >
                <h3 className="font-heading text-2xl font-bold text-navy mb-4 group-hover:text-orange transition-colors">
                  {trade.heroTitle}
                </h3>
                <ul className="space-y-2 mb-6">
                  {trade.services.slice(0, 4).map((service, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-orange mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="text-orange font-semibold group-hover:underline">
                  Find {trade.name} in London →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Call Us
              </h3>
              <p className="text-gray-600 text-lg">
                Ring our 24/7 hotline and tell us about your emergency. No
                forms, no waiting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Get Matched
              </h3>
              <p className="text-gray-600 text-lg">
                We connect you with a vetted, insured tradesperson in your area
                in under 60 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Problem Solved
              </h3>
              <p className="text-gray-600 text-lg">
                Your tradesperson arrives fast and fixes the issue. You only
                pay them directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-16">
            Why Choose Rush Trades
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Fully Vetted
              </h3>
              <p className="text-gray-300 text-lg">
                All tradespeople are verified, insured, and qualified. Gas Safe
                registered engineers for boiler work.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                24/7 Availability
              </h3>
              <p className="text-gray-300 text-lg">
                Emergencies don't wait. We're here round the clock, every day
                of the year.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💷</div>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Free for Homeowners
              </h3>
              <p className="text-gray-300 text-lg">
                Our service is completely free. You only pay the tradesperson
                for the work they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-orange to-orange-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Need Help Right Now?
          </h2>
          <p className="text-xl sm:text-2xl mb-10 opacity-95">
            Call us now and speak to a real person in seconds.
            <br />
            We'll connect you with a local tradesperson instantly.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-white text-orange hover:bg-gray-100 font-bold text-2xl sm:text-3xl px-12 py-6 rounded-lg transition-colors shadow-2xl"
          >
            {PHONE_NUMBER}
          </a>
          <p className="mt-6 text-lg opacity-90">Open 24/7 • Free to call</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">
                Rush Trades
              </h3>
              <p className="text-gray-400">
                Connecting homeowners with emergency tradespeople across the UK.
                Fast, reliable, available 24/7.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {trades.map((trade) => (
                  <li key={trade.slug}>
                    <Link
                      href={`/${trade.slug}/london`}
                      className="text-gray-400 hover:text-orange transition-colors"
                    >
                      {trade.heroTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">For Tradespeople</h3>
              <p className="text-gray-400 mb-2">Want to receive emergency leads?</p>
              <Link
                href="/for-tradespeople"
                className="text-orange font-bold hover:text-orange-light transition-colors"
              >
                Get 3 Free Leads →
              </Link>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">24/7 Emergency Line:</p>
              <a
                href={PHONE_HREF}
                className="text-orange font-bold text-xl hover:text-orange-light transition-colors"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rush Trades. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
