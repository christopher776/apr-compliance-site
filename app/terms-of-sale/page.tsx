import { PolicyPage } from "@/components/policy-page";
import { LEGAL_ENTITY } from "@/lib/brand";

export default function TermsOfSalePage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Terms of Sale"
      intro={`These Terms of Sale govern all purchases from ${LEGAL_ENTITY} ("we," "us"). By placing an order, the buyer agrees to the terms below.`}
      sections={[
        {
          heading: "Buyer Representations",
          body: [
            "The buyer represents that they are at least 21 years of age, are a qualified research professional or purchasing on behalf of a qualified research organization, and are acquiring materials solely for in-vitro laboratory research, analytical method development, identity verification, or related non-clinical laboratory work.",
          ],
        },
        {
          heading: "Prohibited Use",
          body: [
            "Materials may not be used for human or animal consumption, therapeutic use, clinical use, diagnostic use, dietary supplementation, dosing, injection, ingestion, administration, compounding, or prescription use.",
            "Materials may not be resold for any consumer use, and may not be relabeled, rebranded, or represented as anything other than a laboratory research material.",
          ],
        },
        {
          heading: "No Resale for Human or Animal Use",
          body: [
            "Buyer agrees not to resell, transfer, or otherwise provide any material purchased from this site to any party for human or animal consumption, administration, or any other prohibited use described in our Compliance Policy.",
          ],
        },
        {
          heading: "Right to Cancel Non-Compliant Orders",
          body: [
            "We reserve the right to refuse, cancel, or refund any order at our discretion, including where we believe the order is inconsistent with our qualified-buyer policy, prohibited-use policy, or applicable law.",
          ],
        },
        {
          heading: "Order Acceptance",
          body: [
            "All orders are subject to acceptance and to the qualified-research-use acknowledgment required at checkout. An order confirmation does not guarantee product availability.",
          ],
        },
        {
          heading: "Governing Terms",
          body: [
            "These Terms of Sale work together with our Compliance Policy, Shipping Policy, and Refund Policy, each of which is incorporated by reference.",
          ],
        },
      ]}
    />
  );
}
