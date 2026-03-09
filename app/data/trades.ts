export interface Trade {
  slug: string;
  name: string;
  heroTitle: string;
  services: string[];
  metaTitle: (city: string) => string;
  metaDescription: (city: string) => string;
}

export interface City {
  slug: string;
  name: string;
  areaCode: string;
}

export const cities: City[] = [
  { slug: "london", name: "London", areaCode: "020" },
  { slug: "birmingham", name: "Birmingham", areaCode: "0121" },
  { slug: "manchester", name: "Manchester", areaCode: "0161" },
  { slug: "leeds", name: "Leeds", areaCode: "0113" },
  { slug: "bristol", name: "Bristol", areaCode: "0117" },
];

export const trades: Trade[] = [
  {
    slug: "emergency-plumber",
    name: "Plumber",
    heroTitle: "Emergency Plumber",
    services: [
      "Burst pipes & water leaks",
      "Blocked toilets & drains",
      "No hot water",
      "Boiler leaks & pressure issues",
      "Frozen pipes",
      "Overflowing tanks",
      "Radiator leaks",
      "Emergency stop-tap repairs",
    ],
    metaTitle: (city) => `Emergency Plumber ${city} | 24/7 | Call Now — Rush Trades`,
    metaDescription: (city) =>
      `Need an emergency plumber in ${city}? Rush Trades connects you with vetted, insured plumbers in under 60 seconds. Available 24/7. Call now — it's free.`,
  },
  {
    slug: "emergency-locksmith",
    name: "Locksmith",
    heroTitle: "Emergency Locksmith",
    services: [
      "Locked out of home",
      "Locked out of car",
      "Broken lock replacement",
      "Break-in repairs & security upgrades",
      "Lock changes after moving home",
      "UPVC door lock repairs",
      "Safe opening",
      "Emergency boarding up",
    ],
    metaTitle: (city) => `Emergency Locksmith ${city} | 24/7 | Call Now — Rush Trades`,
    metaDescription: (city) =>
      `Locked out in ${city}? Rush Trades connects you with a local locksmith in under 60 seconds. 24/7, vetted, insured. Free for homeowners.`,
  },
  {
    slug: "emergency-boiler-repair",
    name: "Boiler Engineer",
    heroTitle: "Emergency Boiler Repair",
    services: [
      "Boiler not firing / no heating",
      "No hot water",
      "Boiler leaking water",
      "Low boiler pressure",
      "Strange boiler noises",
      "Error codes / fault lights",
      "Pilot light gone out",
      "Carbon monoxide concerns",
    ],
    metaTitle: (city) => `Emergency Boiler Repair ${city} | 24/7 | Call Now — Rush Trades`,
    metaDescription: (city) =>
      `Boiler broken in ${city}? Speak to a Gas Safe registered engineer in 60 seconds via Rush Trades. 24/7, free for homeowners.`,
  },
];

export const PHONE_NUMBER = "0800 XXX XXXX";
export const PHONE_HREF = "tel:0800XXXXXXXX";

export function getTrade(slug: string): Trade | undefined {
  return trades.find((t) => t.slug === slug);
}

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllRoutes(): { trade: string; city: string }[] {
  const routes: { trade: string; city: string }[] = [];
  for (const trade of trades) {
    for (const city of cities) {
      routes.push({ trade: trade.slug, city: city.slug });
    }
  }
  return routes;
}
