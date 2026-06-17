import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { CANCELLATION_POLICY, OPERATOR_RULES, WHATS_INCLUDED, DAY_USE_FEES } from "@/data/marina";

export const metadata: Metadata = pageMeta({
  title: "Policies & Rules",
  description:
    "Lake Sonoma Marina rental policies — operator requirements, what's included, day-use fees, and cancellation policy.",
  path: "/policies",
});

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-lake-900">{title}</h2>
      <ul className="mt-3 space-y-2 text-pine-900">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="text-lake-600">•</span> {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PoliciesPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">Policies &amp; Rules</h1>
      <div className="max-w-3xl">
        <Section title="Operator requirements" items={OPERATOR_RULES} />
        <Section title="What's included" items={WHATS_INCLUDED} />
        <Section
          title="Day-use fees"
          items={DAY_USE_FEES.map((f) => `${f.label}: $${f.amount}`)}
        />
        <Section title="Cancellation policy" items={CANCELLATION_POLICY} />
      </div>
    </div>
  );
}
