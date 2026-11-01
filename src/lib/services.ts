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
      "Protect vacant and managed properties with securing, winterization, and ongoing preservation services.",
    icon: "Shield",
    items: [
      "Property securing",
      "Lock changes & rekeying",
      "Boarding & emergency securing",
      "Winterization & de-winterization",
      "Vacancy maintenance",
      "General preservation work",
    ],
  },
  {
    id: "maintenance",
    title: "Property Maintenance",
    description:
      "Keep properties in top condition with routine upkeep, landscaping, gutter cleaning, and seasonal care.",
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
      "Handle interior and exterior repairs, from drywall and painting to flooring and general rehabilitation.",
    icon: "Wrench",
    items: [
      "Drywall repair",
      "Interior & exterior painting",
      "Flooring installation",
      "Door & window repairs",
      "Siding & fence repairs",
      "General property rehabilitation",
    ],
  },
  {
    id: "debris",
    title: "Debris Removal & Cleanup",
    description:
      "Clear properties quickly with trash-outs, estate cleanups, yard debris removal, and turnover preparation.",
    icon: "Trash2",
    items: [
      "Interior & exterior debris removal",
      "Trash-outs",
      "Foreclosure cleanup",
      "Estate & rental property cleanup",
      "Yard cleanup",
      "Property turnover preparation",
    ],
  },
  {
    id: "inspections",
    title: "Property Inspections",
    description:
      "Document property conditions with occupancy checks, maintenance inspections, and detailed photo reports.",
    icon: "ClipboardCheck",
    items: [
      "Occupancy inspections",
      "Vacancy checks",
      "Property condition assessments",
      "Maintenance inspections",
      "Exterior inspections",
      "Photo documentation & reporting",
    ],
  },
  {
    id: "emergency",
    title: "Emergency & Specialty Services",
    description:
      "Respond fast to urgent property needs including board-ups, roof tarping, storm damage, and hazard removal.",
    icon: "AlertTriangle",
    items: [
      "Emergency board-ups",
      "Roof tarping",
      "Storm damage cleanup",
      "Hazard removal",
      "Emergency securing",
      "Urgent property protection",
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
      "Dependable maintenance, repairs, and improvements to protect your home and property value.",
    icon: "Home",
  },
  {
    title: "Property Management Companies",
    description:
      "Responsive service coordination for routine maintenance, tenant turnovers, and property upkeep.",
    icon: "Building2",
  },
  {
    title: "Real Estate Investors",
    description:
      "Cost-effective property preservation and rehabilitation to maintain and improve investment assets.",
    icon: "TrendingUp",
  },
  {
    title: "Banks & Mortgage Servicers",
    description:
      "Reliable property preservation, securing, and maintenance for REO and pre-foreclosure assets.",
    icon: "Landmark",
  },
  {
    title: "Asset Management Companies",
    description:
      "Organized field services with detailed documentation and consistent communication across portfolios.",
    icon: "Briefcase",
  },
  {
    title: "National Field Service Companies",
    description:
      "Local execution for national service networks with dependable coverage in the Atlanta metro area.",
    icon: "Globe",
  },
  {
    title: "REO Property Managers",
    description:
      "Comprehensive preservation, inspections, and maintenance services for bank-owned properties.",
    icon: "FileCheck",
  },
  {
    title: "Commercial Property Owners",
    description:
      "Professional maintenance, repairs, and exterior services for commercial properties and facilities.",
    icon: "Building",
  },
];
