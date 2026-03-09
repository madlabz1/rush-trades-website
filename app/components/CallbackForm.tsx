"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    emergencyType: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder - no backend yet
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">✓</div>
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600">
          We'll call you back within 5 minutes. Keep your phone nearby.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="postcode"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Postcode
        </label>
        <input
          type="text"
          id="postcode"
          required
          value={formData.postcode}
          onChange={(e) =>
            setFormData({ ...formData, postcode: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
          placeholder="Your postcode"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="emergencyType"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Emergency Type
        </label>
        <select
          id="emergencyType"
          required
          value={formData.emergencyType}
          onChange={(e) =>
            setFormData({ ...formData, emergencyType: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent"
        >
          <option value="">Select emergency type</option>
          <option value="plumbing">Plumbing</option>
          <option value="locksmith">Locksmith</option>
          <option value="boiler">Boiler</option>
          <option value="electrician">Electrician</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Brief Description
        </label>
        <textarea
          id="description"
          required
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent resize-none"
          placeholder="Tell us what happened..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange hover:bg-orange-dark text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Request Urgent Callback"}
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        We'll call you back within 5 minutes during business hours, or first
        thing the next morning if it's late at night.
      </p>
    </form>
  );
}
