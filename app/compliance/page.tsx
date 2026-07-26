import { PolicyPage } from "@/components/policy-page";
import { CORE_DESCRIPTION, CHECKOUT_ACKNOWLEDGMENT } from "@/lib/brand";

export default function CompliancePage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Compliance Policy"
      intro={CORE_DESCRIPTION}
      sections={[
        {
          heading: "Research-Use-Only Positioning",
          body: [
            "Every material on this site is supplied strictly for laboratory research use. Nothing on this site is intended, labeled, or positioned for therapeutic use, clinical use, diagnostic use, dietary supplementation, dosing, injection, ingestion, or administration of any kind to a human or animal.",
          ],
        },
        {
          heading: "Qualified Buyer Policy",
          body: [
            "Materials are sold exclusively to qualified research customers: laboratories, academic researchers, biotech organizations, contract research organizations, and other similarly qualified research entities.",
            "Buyers must confirm they are at least 21 years of age and a qualified research professional before browsing product detail pages, and must separately acknowledge qualified research use again at checkout.",
          ],
        },
        {
          heading: "Prohibited Use",
          body: [
            "Materials may not be used for, or resold for, human or animal consumption, therapeutic use, clinical use, diagnostic use, dietary supplementation, dosing, injection, ingestion, compounding, prescription use, or any other consumer use.",
            "We do not provide dosage information, reconstitution instructions, administration instructions, or any user guidance implying human or animal use.",
          ],
        },
        {
          heading: "Documentation Standards",
          body: [
            "Each reference material is supported by lot-level documentation, including Certificate of Analysis (CoA) access where available. Visit the Documentation page to request current lot documentation before ordering.",
          ],
        },
        {
          heading: "Restricted Product Policy",
          body: [
            "We do not list or knowingly ship SARMs, erectile-dysfunction drug products, enclomiphene/clomiphene variants, methylene blue variants, needles, syringes, or any product positioned for reconstitution-for-injection or other administration use.",
            "Blend reference materials disclose full constituent composition on the applicable product page. Composition is subject to verification against current internal formulation and lot records.",
          ],
        },
        {
          heading: "Checkout Acknowledgment",
          body: [
            `Before any order is submitted, the buyer must check a box confirming: "${CHECKOUT_ACKNOWLEDGMENT}"`,
            "Retatrutide reference material orders carry an additional, more specific acknowledgment on the checkout page.",
          ],
        },
      ]}
    />
  );
}
