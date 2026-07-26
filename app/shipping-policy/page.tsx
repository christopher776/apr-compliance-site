import { PolicyPage } from "@/components/policy-page";

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Shipping Policy"
      sections={[
        {
          heading: "Fulfillment Timing",
          body: [
            "Orders are processed within 1–2 business days of qualified-research-use acknowledgment and payment confirmation.",
          ],
        },
        {
          heading: "Carriers",
          body: [
            "Domestic orders ship via major U.S. carriers with tracking provided on dispatch. Expedited options are available at checkout.",
          ],
        },
        {
          heading: "Package Documentation",
          body: [
            "Shipments include order documentation referencing the lot number(s) supplied. Certificates of Analysis are available on request via the Documentation page and are not required to be physically included in the package.",
          ],
        },
        {
          heading: "Labeling",
          body: [
            "Packages are labeled for laboratory research materials only. No consumer-supplement, dosage, or administration language appears on any packaging or shipping documentation.",
          ],
        },
      ]}
    />
  );
}
