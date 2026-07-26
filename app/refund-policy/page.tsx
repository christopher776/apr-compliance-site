import { PolicyPage } from "@/components/policy-page";
import { SUPPORT_EMAIL } from "@/lib/brand";

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Policy"
      title="Refund & Returns Policy"
      sections={[
        {
          heading: "Damaged Shipments",
          body: [
            `Contact ${SUPPORT_EMAIL} within 7 days of delivery with photos of the damaged item and packaging. We will issue a replacement or refund once the claim is verified.`,
          ],
        },
        {
          heading: "Lost Shipments",
          body: [
            "If tracking shows no movement for 10 business days, contact support and we will open a carrier trace and issue a replacement or refund if the shipment cannot be located.",
          ],
        },
        {
          heading: "Incorrect Shipments",
          body: [
            "If you receive the wrong reference material or lot, contact support before use or disposal. We will arrange correction at no cost.",
          ],
        },
        {
          heading: "Order Cancellations",
          body: [
            "Orders cancelled by us under our Terms of Sale (e.g., failed qualified-buyer verification) are refunded in full to the original payment method.",
          ],
        },
      ]}
    />
  );
}
