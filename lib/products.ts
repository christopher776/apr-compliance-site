export interface ProductVariant {
  label: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  variants: ProductVariant[];
  sku: string;
  isRetatrutide?: boolean;
  composition?: { compound: string; note: string }[];
  compositionNote?: string;
  intendedUse: string;
  documentation: string;
  restrictions: string;
}

export const categories = [
  { slug: "all", label: "All Reference Materials" },
  { slug: "growth-axis-research", label: "Growth-Axis Research" },
  { slug: "metabolic-research", label: "Metabolic Research" },
  { slug: "cellular-research", label: "Cellular Research" },
  { slug: "tissue-research", label: "Tissue Research" },
  { slug: "endocrine-immune-research", label: "Endocrine / Immune Research" },
  { slug: "lab-reagents", label: "Laboratory Reagents" },
];

const STANDARD_INTENDED_USE =
  "Supplied for in-vitro research, analytical method development, identity verification, and laboratory evaluation by qualified research customers.";
const STANDARD_DOCUMENTATION =
  "Lot-level documentation and Certificate of Analysis access are available for review. Request the current CoA from the Documentation page before ordering.";
const STANDARD_RESTRICTIONS =
  "Not for human or animal consumption. Not for therapeutic, clinical, diagnostic, dietary supplement, dosing, injection, ingestion, or administration use.";

export const products: Product[] = [
  {
    slug: "retatrutide-reference-material",
    name: "Retatrutide Reference Material",
    shortName: "Retatrutide",
    category: "metabolic-research",
    variants: [
      { label: "10mg", price: 139 },
      { label: "20mg", price: 198 },
      { label: "30mg", price: 258 },
    ],
    sku: "RM-RETA",
    isRetatrutide: true,
    intendedUse:
      "Supplied for qualified laboratory research customers conducting in-vitro analytical evaluation, identity verification, method development, or related non-clinical laboratory work.",
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "tesamorelin-reference-material",
    name: "Tesamorelin Reference Material",
    shortName: "Tesamorelin",
    category: "growth-axis-research",
    variants: [{ label: "10mg", price: 119 }],
    sku: "RM-TESA-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "ghk-cu-bpc-157-tb-500-kpv-reference-blend",
    name: "GHK-Cu + BPC-157 + TB-500 + KPV Reference Material Blend",
    shortName: "GHK-Cu / BPC-157 / TB-500 / KPV Blend",
    category: "tissue-research",
    variants: [{ label: "80mg total", price: 159 }],
    sku: "RM-BLEND-01",
    composition: [
      { compound: "GHK-Cu", note: "copper peptide reference standard" },
      { compound: "BPC-157", note: "pentadecapeptide reference standard" },
      { compound: "TB-500 (Thymosin Beta-4 fragment)", note: "peptide reference standard" },
      { compound: "KPV", note: "tripeptide reference standard" },
    ],
    compositionNote:
      "Composition shown reflects publicly documented constituent research compounds for this catalog entry. Confirm exact ratios and concentrations against current internal formulation and lot records before publishing live.",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "ghk-cu-bpc-157-tb-500-reference-blend",
    name: "GHK-Cu + BPC-157 + TB-500 Reference Material Blend",
    shortName: "GHK-Cu / BPC-157 / TB-500 Blend",
    category: "tissue-research",
    variants: [{ label: "70mg total", price: 139 }],
    sku: "RM-BLEND-02",
    composition: [
      { compound: "GHK-Cu", note: "copper peptide reference standard" },
      { compound: "BPC-157", note: "pentadecapeptide reference standard" },
      { compound: "TB-500 (Thymosin Beta-4 fragment)", note: "peptide reference standard" },
    ],
    compositionNote:
      "Composition shown reflects publicly documented constituent research compounds for this catalog entry. Confirm exact ratios and concentrations against current internal formulation and lot records before publishing live.",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "bpc-157-tb-500-reference-blend",
    name: "BPC-157 + TB-500 Reference Material Blend",
    shortName: "BPC-157 / TB-500 Blend",
    category: "tissue-research",
    variants: [{ label: "20mg total", price: 119 }],
    sku: "RM-BLEND-03",
    composition: [
      { compound: "BPC-157", note: "pentadecapeptide reference standard" },
      { compound: "TB-500 (Thymosin Beta-4 fragment)", note: "peptide reference standard" },
    ],
    compositionNote:
      "Composition shown reflects publicly documented constituent research compounds for this catalog entry. Confirm exact ratios and concentrations against current internal formulation and lot records before publishing live.",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "cjc-1295-ipamorelin-reference-blend",
    name: "CJC-1295 + Ipamorelin Reference Material Blend",
    shortName: "CJC-1295 / Ipamorelin Blend",
    category: "growth-axis-research",
    variants: [{ label: "10mg total", price: 119 }],
    sku: "RM-BLEND-04",
    composition: [
      { compound: "CJC-1295", note: "GHRH-analog reference standard" },
      { compound: "Ipamorelin", note: "GH-secretagogue reference standard" },
    ],
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "nad-reference-material",
    name: "NAD+ Reference Material",
    shortName: "NAD+",
    category: "cellular-research",
    variants: [{ label: "1000mg", price: 98 }],
    sku: "RM-NAD-1000",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "tb-500-reference-material",
    name: "TB-500 Reference Material",
    shortName: "TB-500",
    category: "tissue-research",
    variants: [{ label: "10mg", price: 78 }],
    sku: "RM-TB500-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "ss-31-reference-material",
    name: "SS-31 Reference Material",
    shortName: "SS-31",
    category: "cellular-research",
    variants: [{ label: "10mg", price: 76 }],
    sku: "RM-SS31-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "mots-c-reference-material",
    name: "MOTS-c Reference Material",
    shortName: "MOTS-c",
    category: "metabolic-research",
    variants: [{ label: "10mg", price: 74 }],
    sku: "RM-MOTSC-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "bpc-157-reference-material",
    name: "BPC-157 Reference Material",
    shortName: "BPC-157",
    category: "tissue-research",
    variants: [{ label: "10mg", price: 74 }],
    sku: "RM-BPC157-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "epithalon-reference-material",
    name: "Epithalon Reference Material",
    shortName: "Epithalon",
    category: "cellular-research",
    variants: [{ label: "10mg", price: 74 }],
    sku: "RM-EPI-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "ipamorelin-reference-material",
    name: "Ipamorelin Reference Material",
    shortName: "Ipamorelin",
    category: "growth-axis-research",
    variants: [{ label: "10mg", price: 74 }],
    sku: "RM-IPAM-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "aod-9604-reference-material",
    name: "AOD-9604 Reference Material",
    shortName: "AOD-9604",
    category: "metabolic-research",
    variants: [{ label: "5mg", price: 78 }],
    sku: "RM-AOD-5",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "5-amino-1mq-reference-material",
    name: "5-Amino-1MQ Reference Material",
    shortName: "5-Amino-1MQ",
    category: "metabolic-research",
    variants: [{ label: "10mg", price: 74 }],
    sku: "RM-5A1MQ-10",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "ghk-cu-reference-material",
    name: "GHK-Cu Reference Material",
    shortName: "GHK-Cu",
    category: "tissue-research",
    variants: [{ label: "50mg", price: 59 }],
    sku: "RM-GHKCU-50",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "aicar-reference-material",
    name: "AICAR Reference Material",
    shortName: "AICAR",
    category: "cellular-research",
    variants: [{ label: "50mg", price: 74 }],
    sku: "RM-AICAR-50",
    intendedUse: STANDARD_INTENDED_USE,
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
  {
    slug: "bacteriostatic-water-laboratory-diluent",
    name: "Bacteriostatic Water — Laboratory Diluent",
    shortName: "Bacteriostatic Water",
    category: "lab-reagents",
    variants: [{ label: "10mL", price: 12 }],
    sku: "RM-DIL-10",
    intendedUse:
      "Supplied as a laboratory diluent for analytical sample preparation by qualified research customers. Not supplied, labeled, or positioned for reconstitution-for-injection or any administration use.",
    documentation: STANDARD_DOCUMENTATION,
    restrictions: STANDARD_RESTRICTIONS,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function priceLabel(p: Product) {
  const min = Math.min(...p.variants.map((v) => v.price));
  const max = Math.max(...p.variants.map((v) => v.price));
  return min === max ? `$${min.toFixed(2)}` : `$${min.toFixed(2)} – $${max.toFixed(2)}`;
}
