"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForTradespeople() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trade: "",
    coverage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_TRADESPERSON;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, plan: "free-trial" }),
        });
      } catch {
        // Silent fail — still show success to user
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-heading font-bold text-navy">
            ⚡ RUSH TRADES
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-navy font-semibold transition-colors"
          >
            I Need a Tradesperson
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get Emergency Leads
            <br />
            <span className="text-orange">Sent Straight to Your Phone</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Homeowners with urgent jobs are looking for you right now.
            <br />
            Start with 3 free leads — no commitment, no card required.
          </p>
          <a
            href="#signup"
            className="inline-block bg-orange hover:bg-orange-dark text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors shadow-lg"
          >
            Claim Your 3 Free Leads
          </a>
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
                Sign Up Free
              </h3>
              <p className="text-gray-600 text-lg">
                Tell us your trade and the areas you cover. Takes 30 seconds.
                No card needed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Get 3 Free Leads
              </h3>
              <p className="text-gray-600 text-lg">
                We route real emergency calls to your phone. First to answer
                gets the job. Try it risk-free.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange text-white rounded-full flex items-center justify-center text-3xl font-heading font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Pay Per Lead
              </h3>
              <p className="text-gray-600 text-lg">
                Happy with the results? Keep receiving leads at just £30 each.
                No contracts, cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing — Simple */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            No monthly fees. No contracts. Just pay for the leads you receive.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Trial */}
            <div className="bg-white border-2 border-orange rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white font-bold px-4 py-1 rounded-full text-sm">
                START HERE
              </div>
              <h3 className="font-heading text-3xl font-bold text-navy mb-2">
                Free Trial
              </h3>
              <div className="text-5xl font-heading font-bold text-orange mb-4">
                £0
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  3 free emergency leads
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  No credit card required
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  Real homeowner calls
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  No obligation to continue
                </li>
              </ul>
              <a
                href="#signup"
                className="block w-full bg-orange hover:bg-orange-dark text-white font-bold text-lg text-center px-6 py-4 rounded-lg transition-colors"
              >
                Get Started Free
              </a>
            </div>

            {/* Pay Per Lead */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h3 className="font-heading text-3xl font-bold text-navy mb-2">
                Pay Per Lead
              </h3>
              <div className="text-5xl font-heading font-bold text-navy mb-4">
                £30<span className="text-xl text-gray-500">/lead</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  Unlimited leads
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  Only pay for leads you receive
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  No monthly commitment
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-orange font-bold mr-3">✓</span>
                  Pause or stop anytime
                </li>
              </ul>
              <a
                href="#signup"
                className="block w-full bg-navy hover:bg-navy-light text-white font-bold text-lg text-center px-6 py-4 rounded-lg transition-colors"
              >
                Start Free Trial First
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Average emergency job is worth £150-£500+. One lead can pay for itself 5-15x over.
          </p>
        </div>
      </section>

      {/* Why Rush Trades */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
            Why Tradespeople Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                Calls to Your Phone
              </h3>
              <p className="text-gray-600">
                No app to check. No portal to log into. Leads come straight to your phone as calls.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                Your Area Only
              </h3>
              <p className="text-gray-600">
                Only get leads in the areas you cover. No wasted time on jobs across town.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                Urgent Jobs Only
              </h3>
              <p className="text-gray-600">
                These are homeowners with emergencies — burst pipes, lockouts, boiler failures. High-value, urgent work.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚫</div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3">
                No Shared Leads
              </h3>
              <p className="text-gray-600">
                Unlike Checkatrade or Bark, you're not competing with 10 other tradespeople for the same job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-12">
            Rush Trades vs The Rest
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-4 pr-4 font-heading text-lg"></th>
                  <th className="py-4 px-4 font-heading text-lg text-orange">Rush Trades</th>
                  <th className="py-4 px-4 font-heading text-lg text-gray-400">Checkatrade</th>
                  <th className="py-4 pl-4 font-heading text-lg text-gray-400">Bark</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-4 font-semibold">Cost per lead</td>
                  <td className="py-4 px-4 text-orange font-bold">£30</td>
                  <td className="py-4 px-4">£20-£40</td>
                  <td className="py-4 pl-4">£5-£30</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-4 font-semibold">Shared with others?</td>
                  <td className="py-4 px-4 text-orange font-bold">No — exclusive</td>
                  <td className="py-4 px-4">Yes — 3-10 others</td>
                  <td className="py-4 pl-4">Yes — up to 5</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-4 font-semibold">Monthly fee?</td>
                  <td className="py-4 px-4 text-orange font-bold">No</td>
                  <td className="py-4 px-4">£50-£120/mo</td>
                  <td className="py-4 pl-4">Free + credits</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-4 pr-4 font-semibold">Lead type</td>
                  <td className="py-4 px-4 text-orange font-bold">Urgent / emergency</td>
                  <td className="py-4 px-4">Mixed</td>
                  <td className="py-4 pl-4">Mixed</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold">Free trial?</td>
                  <td className="py-4 px-4 text-orange font-bold">3 free leads</td>
                  <td className="py-4 px-4">No</td>
                  <td className="py-4 pl-4">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section id="signup" className="py-16 sm:py-24 bg-gradient-to-br from-orange to-orange-dark text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-center mb-4">
            Get Your 3 Free Leads
          </h2>
          <p className="text-xl text-center mb-10 opacity-95">
            No card required. No obligation. Just real emergency leads.
          </p>

          {isSubmitted ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">✓</div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                You're In!
              </h3>
              <p className="text-gray-600">
                We'll be in touch within 24 hours to set up your area and start
                routing leads to you. Keep your phone handy!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent text-navy"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent text-navy"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent text-navy"
                  placeholder="07xxx xxx xxx"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="trade" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Trade
                </label>
                <select
                  id="trade"
                  required
                  value={formData.trade}
                  onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent text-navy"
                >
                  <option value="">Select your trade</option>
                  <option value="plumber">Emergency Plumber</option>
                  <option value="locksmith">Emergency Locksmith</option>
                  <option value="boiler-engineer">Boiler / Gas Engineer</option>
                  <option value="electrician">Emergency Electrician</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="coverage" className="block text-sm font-semibold text-gray-700 mb-2">
                  Areas You Cover
                </label>
                <input
                  type="text"
                  id="coverage"
                  required
                  value={formData.coverage}
                  onChange={(e) => setFormData({ ...formData, coverage: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent text-navy"
                  placeholder="e.g. North London, Birmingham, Manchester"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Claim My 3 Free Leads"}
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                After your free trial, leads are just £30 each. No monthly fees. Cancel anytime.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-light text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Rush Trades</h3>
              <p className="text-gray-400">
                Connecting homeowners with emergency tradespeople across the UK.
                Helping tradespeople grow with exclusive, urgent leads.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">For Tradespeople</h3>
              <ul className="space-y-2 text-gray-400">
                <li>3 free leads to start</li>
                <li>£30 per lead after trial</li>
                <li>No monthly fees or contracts</li>
                <li>Exclusive leads — not shared</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-orange transition-colors">
                    I Need a Tradesperson
                  </Link>
                </li>
                <li>
                  <a href="#signup" className="text-gray-400 hover:text-orange transition-colors">
                    Sign Up as a Tradesperson
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rush Trades. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
