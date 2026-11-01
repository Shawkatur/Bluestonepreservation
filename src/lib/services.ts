export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    id: "preservation",
    title: "Property Preservation",
    description:
      "We secure, winterize, and maintain vacant and managed properties so they stay in good shape.",
    icon: "Shield",
    items: [
      "Property securing",
      "Lock changes & rekeying",
      "Boarding & emergency securing",
      "Winterization & de-winterization",
      "Vacancy maintenance",
      "Other preservation work",
    ],
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description:
      "Regular upkeep to keep your property looking right: lawn care, landscaping, gutter cleaning, and seasonal work.",
    icon: "Home",
    items: [
      "Routine property maintenance",
      "Lawn mowing & landscaping",
      "Shrub trimming",
      "Gutter cleaning",
      "Pressure washing",
      "Seasonal maintenance",
    ],
  },
  {
    id: "repairs",
    title: "Repairs & Renovations",
    description:
      "Inside and out, we handle it: drywall, painting, flooring, doors, windows, siding, and more.",
    icon: "Wrench",
    items: [
      "Drywall repair",
      "Interior & exterior painting",
      "Flooring installation",
      "Door & window repairs",
      "Siding & fence repairs",
      "Full property rehab",
    ],
  },
  {
    id: "debris",
    title: "Debris Removal & Cleanup",
    description:
      "We clear out properties fast: trash outs, estate cleanups, yard debris, and getting units ready for new tenants.",
    icon: "Trash2",
    items: [
      "Interior & exterior debris removal",
      "Trash-outs",
      "Foreclosure cleanup",
      "Estate & rental property cleanup",
      "Yard cleanup",
      "Move out and turnover prep",
    ],
  },
  {
    id: "inspections",
    title: "Property Inspections",
    description:
      "We check on properties, document their condition, and send you photos and reports so you know exactly what's going on.",
    icon: "ClipboardCheck",
    items: [
      "Occupancy inspections",
      "Vacancy checks",
      "Property condition reports",
      "Maintenance inspections",
      "Exterior inspections",
      "Photo reports",
    ],
  },
  {
    id: "emergency",
    title: "Emergency & Specialty Services",
    description:
      "When something goes wrong, we move fast: board ups, roof tarping, storm damage cleanup, and hazard removal.",
    icon: "AlertTriangle",
    items: [
      "Emergency board-ups",
      "Roof tarping",
      "Storm damage cleanup",
      "Hazard removal",
      "Emergency securing",
      "Urgent property needs",
    ],
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "tree-removal",
    title: "Dead Tree Removal",
    category: "landscaping",
    categoryLabel: "Landscaping",
    beforeImage: "/images/portfolio/tree-before.jpg",
    afterImage: "/images/portfolio/tree-after.jpg",
    beforeAlt: "Dead tree leaning against residential property",
    afterAlt: "Property cleared after tree removal",
  },
  {
    id: "fence-replacement",
    title: "Fence Replacement",
    category: "repairs",
    categoryLabel: "Repairs",
    beforeImage: "/images/portfolio/fence-before.jpg",
    afterImage: "/images/portfolio/fence-after.jpg",
    beforeAlt: "Damaged chain link fence in backyard",
    afterAlt: "New chain link fence installed",
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    category: "maintenance",
    categoryLabel: "Maintenance",
    beforeImage: "/images/portfolio/gutter-before.jpg",
    afterImage: "/images/portfolio/gutter-after.jpg",
    beforeAlt: "House exterior with clogged gutters",
    afterAlt: "Clean gutters after service",
  },
  {
    id: "debris-removal",
    title: "Debris Removal",
    category: "debris",
    categoryLabel: "Debris Removal",
    beforeImage: "/images/portfolio/debris-before.jpg",
    afterImage: "/images/portfolio/debris-after.jpg",
    beforeAlt: "Property yard with scattered debris",
    afterAlt: "Property cleared of all debris",
  },
  {
    id: "shrubs-trimming",
    title: "Shrubs Trimming",
    category: "landscaping",
    categoryLabel: "Landscaping",
    beforeImage: "/images/portfolio/shrubs-before.jpg",
    afterImage: "/images/portfolio/shrubs-after.jpg",
    beforeAlt: "Overgrown shrubs at property entrance",
    afterAlt: "Neatly trimmed shrubs",
  },
  {
    id: "window-seal",
    title: "Window Seal Repair",
    category: "repairs",
    categoryLabel: "Repairs",
    beforeImage: "/images/portfolio/window-before.jpg",
    afterImage: "/images/portfolio/window-after.jpg",
    beforeAlt: "Damaged window seal needing repair",
    afterAlt: "Repaired and sealed window",
  },
  {
    id: "cabinet-repair",
    title: "Cabinet Repair",
    category: "repairs",
    categoryLabel: "Repairs",
    beforeImage: "/images/portfolio/cabinet-before.jpg",
    afterImage: "/images/portfolio/cabinet-after.jpg",
    beforeAlt: "Broken cabinet door hinge",
    afterAlt: "Repaired cabinet doors",
  },
  {
    id: "organic-growth",
    title: "Organic Growth Treatment",
    category: "maintenance",
    categoryLabel: "Maintenance",
    beforeImage: "/images/portfolio/organic-before.jpg",
    afterImage: "/images/portfolio/organic-after.jpg",
    beforeAlt: "Exterior surface with organic growth",
    afterAlt: "Clean surface after growth treatment",
  },
  {
    id: "property-securing",
    title: "Lock Box Installation",
    category: "preservation",
    categoryLabel: "Preservation",
    beforeImage: "/images/portfolio/lockbox-before.jpg",
    afterImage: "/images/portfolio/lockbox-after.jpg",
    beforeAlt: "Door before lock box installation",
    afterAlt: "Lock box installed on property",
  },
];

export const portfolioCategories = [
  { id: "all", label: "All Projects" },
  { id: "landscaping", label: "Landscaping" },
  { id: "maintenance", label: "Maintenance" },
  { id: "repairs", label: "Repairs" },
  { id: "debris", label: "Debris Removal" },
  { id: "preservation", label: "Preservation" },
];

export interface ClientType {
  title: string;
  description: string;
  icon: string;
}

export const clientTypes: ClientType[] = [
  {
    title: "Homeowners",
    description:
      "We take care of the maintenance, repairs, and upgrades so your home stays in great shape.",
    icon: "Home",
  },
  {
    title: "Property Management Companies",
    description:
      "One call for routine maintenance, tenant turnovers, and keeping your properties in good condition.",
    icon: "Building2",
  },
  {
    title: "Real Estate Investors",
    description:
      "Preservation and rehab work that keeps your investment properties in shape without breaking the budget.",
    icon: "TrendingUp",
  },
  {
    title: "Banks & Mortgage Servicers",
    description:
      "We handle preservation, securing, and upkeep for REO and foreclosure properties.",
    icon: "Landmark",
  },
  {
    title: "Asset Management Companies",
    description:
      "Field services with clear reports and good communication, no matter how many properties you manage.",
    icon: "Briefcase",
  },
  {
    title: "National Field Service Companies",
    description:
      "Boots on the ground in Atlanta for national service networks. We show up and get the work done.",
    icon: "Globe",
  },
  {
    title: "REO Property Managers",
    description:
      "Full preservation, inspections, and maintenance for bank owned properties.",
    icon: "FileCheck",
  },
  {
    title: "Commercial Property Owners",
    description:
      "Maintenance, repairs, and exterior work for commercial buildings and facilities.",
    icon: "Building",
  },
];
