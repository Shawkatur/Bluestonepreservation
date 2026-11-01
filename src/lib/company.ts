export const company = {
  name: "Bluestone Home Solutions LLC",
  shortName: "Bluestone Home Solutions",
  legalName: "BLUESTONE HOME SOLUTIONS LLC",
  tagline: "Reliable Property Care. Lasting Solutions.",

  address: {
    street: "4946 Vermack Rd",
    city: "Atlanta",
    state: "GA",
    zip: "30338",
    full: "4946 Vermack Rd, Atlanta, GA 30338",
  },

  contact: {
    email: "service@bluestonehomellc.com",
    // Add phone number when available
    phone: "",
  },

  hours: {
    weekday: "Mon to Fri: 7:00 AM to 6:00 PM",
    saturday: "Sat: 8:00 AM to 2:00 PM",
    sunday: "Sun: Closed",
  },

  seo: {
    title:
      "Bluestone Home Solutions LLC | Property Maintenance & Preservation in Atlanta, GA",
    description:
      "Bluestone Home Solutions LLC provides property maintenance, preservation, repairs, cleanup, and improvement solutions in Atlanta, Georgia. Request an estimate today.",
    url: "https://bluestonehomellc.com",
  },

  serviceAreas: [
    "Atlanta",
    "Dunwoody",
    "Sandy Springs",
    "Brookhaven",
    "Chamblee",
    "Doraville",
    "Tucker",
    "Decatur",
    "Roswell",
    "Alpharetta",
    "Marietta",
    "Smyrna",
    "Kennesaw",
    "Lawrenceville",
    "Stone Mountain",
  ],

  mapCenter: {
    lat: 33.934,
    lng: -84.327,
  },
} as const;
