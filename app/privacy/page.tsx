import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";
import { LegalContent, type LegalSection } from "@/components/LegalContent";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy — Lake Sonoma Marina",
  description:
    "How Lake Sonoma Marina collects, uses, and protects your personal information.",
  path: "/privacy",
});

const SECTIONS: LegalSection[] = [
  {
    heading: "Summary of key points",
    paragraphs: [
      "• We process personal information you provide — such as your name, contact details, and any message — when you contact us, request a reward, or reserve a slip or rental.",
      "• We do not process sensitive personal information (e.g. racial or ethnic origin, sexual orientation, or religious beliefs).",
      "• We do not sell your personal information.",
      "• We use your information to provide and improve our services, communicate with you, and comply with the law.",
    ],
  },
  {
    heading: "What information we collect",
    paragraphs: [
      "We collect personal information that you voluntarily provide to us when you fill out a form on our site (contact, Read On Sonoma reward redemption, or a berthing/storage agreement), make a reservation, or otherwise contact us. This may include your name, email address, phone number, mailing address, and the contents of your message.",
      "Booking and payment for boat and patio rentals is handled by our third-party booking provider, Singenuity. Any payment information you enter is processed by Singenuity under its own privacy policy; this website does not collect or store card data.",
      "When you visit the site we may automatically collect certain technical information such as your IP address, browser type, and pages viewed, for security and analytics.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "We use the information we collect to respond to your inquiries; fulfill reservations and reward requests; administer berthing, storage, and rental agreements; send you service-related communications; maintain the security of our services; and comply with our legal obligations.",
    ],
  },
  {
    heading: "How we share your information",
    paragraphs: [
      "We share information only as needed to operate the marina: with service providers who help us run the business (such as our booking provider Singenuity and our email/form provider), and when required by law or to protect our rights. We do not sell your personal information.",
    ],
  },
  {
    heading: "How we keep your information safe",
    paragraphs: [
      "We use reasonable organizational and technical measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your privacy rights",
    paragraphs: [
      "Depending on where you live, you may have the right to request access to, correction of, or deletion of your personal information, and to opt out of certain processing. California residents have specific rights under the CCPA/CPRA. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `If you have questions about this Privacy Policy, contact Lake Sonoma Marina at ${SITE.email}, by phone at ${SITE.phone}, or by mail at ${SITE.address.full}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalContent
      title="Privacy Policy"
      updated="May 8, 2025"
      intro={`This Privacy Policy describes how Lake Sonoma Marina ("we," "us," or "our") collects, uses, and shares your personal information when you visit ${SITE.url} or otherwise engage with our services. By using our services you agree to the practices described here.`}
      sections={SECTIONS}
    />
  );
}
