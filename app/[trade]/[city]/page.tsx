import Link from "next/link";
import { notFound } from "next/navigation";
import {
  trades,
  cities,
  getTrade,
  getCity,
  getAllRoutes,
  PHONE_NUMBER,
  PHONE_HREF,
  type Trade,
  type City,
} from "@/app/data/trades";
import CallbackForm from "@/app/components/CallbackForm";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    trade: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  return getAllRoutes();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { trade: tradeSlug, city: citySlug } = await params;
  const trade = getTrade(tradeSlug);
  const city = getCity(citySlug);

  if (!trade || !city) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: trade.metaTitle(city.name),
    description: trade.metaDescription(city.name),
  };
}

export default async function TradeCityPage({ params }: PageProps) {
  const { trade: tradeSlug, city: citySlug } = await params;
  const trade = getTrade(tradeSlug);
  const city = getCity(citySlug);

  if (!trade || !city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-navy">
            ⚡ RUSH TRADES
          </Link>
          <a
            href={PHONE_HREF}
            className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Need an Emergency {trade.name} in {city.name}?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Speak to a vetted, local {trade.name.toLowerCase()} in under 60
              seconds. Available 24/7.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-orange hover:bg-orange-dark text-white font-bold text-xl sm:text-2xl px-10 py-5 rounded-lg transition-colors shadow-lg mb-4"
            >
              Call Now: {PHONE_NUMBER}
            </a>
            <div className="mt-4">
              <a
                href="#callback-form"
                className="text-orange-light hover:text-orange underline"
              >
                Or request a callback below
              </a>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center text-sm sm:text-base">
            <div className="flex flex-col items-center">
              <span className="text-orange text-2xl mb-2">✓</span>
              <span className="text-gray-300">Vetted & Insured</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange text-2xl mb-2">⚡</span>
              <span className="text-gray-300">Response in Under 60 Seconds</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange text-2xl mb-2">★</span>
              <span className="text-gray-300">5-Star Rated Pros</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-orange text-2xl mb-2">💷</span>
              <span className="text-gray-300">No Call-Out Fees*</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gray-50">
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
                One number. Tell us what's wrong. Takes 30 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                We Match You
              </h3>
              <p className="text-gray-600 text-lg">
                We instantly connect you with a vetted {trade.name.toLowerCase()}{" "}
                in {city.name} who's available right now.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Job Done
              </h3>
              <p className="text-gray-600 text-lg">
                Your {trade.name.toLowerCase()} arrives, fixes the problem, you
                pay them directly. No middleman fees to you.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={PHONE_HREF}
              className="inline-block bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Get Connected Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Rush Trades */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-4">
            Why Thousands of {city.name} Homeowners
          </h2>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            Trust Rush Trades
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                60-Second Response
              </h3>
              <p className="text-gray-600">
                Call us now and you'll be speaking to a local {trade.name.toLowerCase()} in
                under a minute. No automated menus, no waiting on hold.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                Vetted & Insured Pros Only
              </h3>
              <p className="text-gray-600">
                Every tradesperson in our network is fully insured, qualified,
                and background-checked. Gas Safe registered for boiler work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">💷</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                Free For You
              </h3>
              <p className="text-gray-600">
                Our matching service costs you nothing. You pay the tradesperson
                directly for the work — we don't add a penny.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Emergencies don't wait for business hours. We're here 24/7, 365
                days a year — even Christmas Day.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                No Obligation
              </h3>
              <p className="text-gray-600">
                Get a quote first. If you're not happy with the price or don't
                feel comfortable, there's no obligation to proceed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-3">
                Local to {city.name}
              </h3>
              <p className="text-gray-600">
                All our tradespeople are based in or near {city.name}, so they can
                reach you fast when you need help most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
            {city.name} Emergency {trade.name} Services
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We connect you with qualified {trade.name.toLowerCase()}s who can help with:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
            {trade.services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start bg-navy-light rounded-lg p-4"
              >
                <span className="text-orange text-xl mr-3 mt-1">✓</span>
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={PHONE_HREF}
              className="inline-block bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call Now: {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            What {city.name} Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-orange text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Burst pipe at 2am. Called Rush Trades, had a plumber here in 25
                minutes. Absolute lifesaver."
              </p>
              <p className="font-semibold text-navy">
                — Sarah T., {city.name}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-orange text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Locked out with my kids in the car. They connected me to a
                locksmith who was there in 15 minutes."
              </p>
              <p className="font-semibold text-navy">
                — James R., {city.name}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-orange text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Boiler died on the coldest night of the year. Found a gas
                engineer through Rush Trades within the hour."
              </p>
              <p className="font-semibold text-navy">
                — Michelle D., {city.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form */}
      <section id="callback-form" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-4">
            Can't Call Right Now?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Request a Callback
          </p>
          <CallbackForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>Is this free for me?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, 100% free. Rush Trades is a free matching service for
                homeowners. We connect you with local tradespeople and never
                charge you a penny. You only pay the tradesperson directly for
                the work they do.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>Are the tradespeople vetted?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes. Every tradesperson in our network is fully insured,
                qualified for the work they do, and background-checked. All gas
                engineers are Gas Safe registered, electricians are Part P
                certified, and so on.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>How fast will someone arrive?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most tradespeople in {city.name} arrive within 30-60 minutes,
                depending on your location and the time of day. We'll give you an
                estimated arrival time when we connect you.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>Do I have to use the tradesperson?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                No, there's no obligation. The tradesperson will assess the job
                and give you a quote. If you're not happy with the price or don't
                feel comfortable for any reason, you're free to decline.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>What areas do you cover?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We cover {city.name} and surrounding areas. When you call, we'll
                confirm that we have available tradespeople in your specific
                postcode before connecting you.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-md group">
              <summary className="font-heading text-xl font-bold text-navy cursor-pointer list-none flex items-center justify-between">
                <span>What if it's outside business hours?</span>
                <span className="text-orange text-2xl group-open:rotate-180 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We operate 24/7, including nights, weekends, and bank holidays.
                Emergency tradespeople charge higher rates for out-of-hours work,
                but if it's urgent, we can connect you any time of day or night.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-orange to-orange-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Don't Wait. Get Help Now.
          </h2>
          <p className="text-xl sm:text-2xl mb-10 opacity-95">
            One call connects you with a vetted {trade.name.toLowerCase()} in{" "}
            {city.name}.
            <br />
            Available 24/7. Free for homeowners.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-block bg-white text-orange hover:bg-gray-100 font-bold text-2xl sm:text-3xl px-12 py-6 rounded-lg transition-colors shadow-2xl"
          >
            {PHONE_NUMBER}
          </a>
          <p className="mt-6 text-lg opacity-90">
            Speak to someone in under 60 seconds
          </p>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 p-4 md:hidden z-50 shadow-lg">
        <div className="flex gap-3">
          <a
            href={PHONE_HREF}
            className="flex-1 bg-orange hover:bg-orange-dark text-white font-bold text-center px-4 py-3 rounded-lg transition-colors"
          >
            Call Now
          </a>
          <a
            href="#callback-form"
            className="flex-1 bg-navy hover:bg-navy-light text-white font-bold text-center px-4 py-3 rounded-lg transition-colors"
          >
            Request Callback
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                {trades.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.slug}/${citySlug}`}
                      className="text-gray-400 hover:text-orange transition-colors"
                    >
                      {t.heroTitle}
                    </Link>
                  </li>
                ))}
              </ul>
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
