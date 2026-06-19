import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";
import { LegalContent, type LegalSection } from "@/components/LegalContent";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service — Lake Sonoma Marina",
  description:
    "The terms governing your use of the Lake Sonoma Marina website and services.",
  path: "/terms",
});

const SECTIONS: LegalSection[] = [
  {
    heading: "Our services",
    paragraphs: [
      `Lake Sonoma Marina operates ${SITE.url} and provides boat rentals, patio day-use reservations, and boat storage at Lake Sonoma in Geyserville, California. The information on this site is provided for general informational purposes. Rentals, patios, and bookings are subject to availability and the marina's current rates and policies.`,
    ],
  },
  {
    heading: "Bookings and payments",
    paragraphs: [
      "Reservations and payments for rentals and patios are processed by our third-party booking provider, Singenuity. By booking, you agree to Singenuity's terms in addition to ours. Cancellation, refund, and check-in policies for rentals are described on the relevant pages of this site and at check-in.",
      "Berthing, storage, ramp, and day-use agreements are governed by the specific agreement you sign and by the marina's Policies & Rules.",
    ],
  },
  {
    heading: "Use of the site",
    paragraphs: [
      "You agree to use the site only for lawful purposes and not to misuse it, interfere with its operation, attempt to gain unauthorized access, or infringe the rights of others. The services are intended for users who are at least 18 years old.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The content on this site — including text, graphics, logos, and images — is owned by or licensed to Lake Sonoma Marina and is protected by applicable laws. You may not copy, reproduce, or redistribute it without our permission.",
    ],
  },
  {
    heading: "Reviews and submissions",
    paragraphs: [
      "If you submit a review or other content, it must be truthful, must not be offensive or unlawful, and must not infringe anyone's rights. We may remove or edit submissions at our discretion.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "Our site may link to third-party websites (such as our booking provider and social media). We are not responsible for the content or practices of those sites, and linking does not imply endorsement.",
    ],
  },
  {
    heading: "Disclaimer and limitation of liability",
    paragraphs: [
      "The site and its content are provided on an “as is” and “as available” basis without warranties of any kind. To the fullest extent permitted by law, Lake Sonoma Marina is not liable for any indirect, incidental, or consequential damages arising from your use of the site or services. Boating and water activities carry inherent risks; participants assume those risks and must follow all safety rules and instructions.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the State of California, without regard to its conflict-of-law principles.",
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these Terms from time to time. Changes are effective when posted, indicated by the “Last updated” date above. Your continued use of the site after changes are posted constitutes acceptance.",
    ],
  },
  {
    heading: "Contact us",
    paragraphs: [
      `Questions about these Terms? Contact Lake Sonoma Marina at ${SITE.email}, by phone at ${SITE.phone}, or by mail at ${SITE.address.full}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalContent
      title="Terms of Service"
      updated="May 8, 2025"
      intro={`These Terms of Service govern your access to and use of the Lake Sonoma Marina website at ${SITE.url} and our related services. By accessing the site, you agree to be bound by these Terms. If you do not agree, please discontinue use.`}
      sections={SECTIONS}
    />
  );
}
