import Link from "next/link";
import type { Metadata } from "next";
import {
  RENTALS,
  CATEGORY_LABELS,
  ACTIVITY_LABELS,
  type Category,
  type ActivityTag,
} from "@/data/marina";
import { ProductCard } from "@/components/ProductCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Boat Rentals — Lake Sonoma Marina",
  description:
    "Browse Lake Sonoma Marina boat rentals — pontoons, watersport boats, fishing boats, jet skis, kayaks, paddle boards and canoes. Filter by activity or group size and book online.",
  path: "/rentals",
});

const CATEGORY_FILTERS: Category[] = [
  "pontoon",
  "watersport",
  "sport",
  "fishing",
  "jetski",
  "paddle",
];
const ACTIVITY_FILTERS: ActivityTag[] = ["cruising", "fishing", "watersports", "paddling"];

const CAPACITY_OPTIONS = [
  { label: "1–5 guests", max: 5 },
  { label: "Up to 10", max: 10 },
  { label: "Groups of 12", max: 12 },
];

type SearchParams = { category?: string; activity?: string; capacity?: string };

export default async function RentalsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const activeCategory = sp.category as Category | undefined;
  const activeActivity = sp.activity as ActivityTag | undefined;
  const capacity = sp.capacity ? Number(sp.capacity) : undefined;

  let items = RENTALS;
  if (activeCategory) items = items.filter((p) => p.category === activeCategory);
  if (activeActivity) items = items.filter((p) => p.activities.includes(activeActivity));
  if (capacity !== undefined && !Number.isNaN(capacity)) {
    items = items.filter((p) => p.capacity !== undefined && p.capacity <= capacity);
  }

  const hasFilter =
    activeCategory !== undefined ||
    activeActivity !== undefined ||
    capacity !== undefined;

  // Build a human-readable active filter label for the results heading
  let activeLabel: string | undefined;
  if (activeCategory) activeLabel = CATEGORY_LABELS[activeCategory];
  else if (activeActivity) activeLabel = ACTIVITY_LABELS[activeActivity];
  else if (capacity !== undefined)
    activeLabel = `Up to ${capacity} guests`;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <Hero
        image="jet-ski"
        eyebrow="Healdsburg, CA"
        title="Find your perfect boat"
        subtitle="Pontoons, sport boats, fishing boats, jet skis, kayaks and more — every booking link takes you straight to that boat's availability calendar."
        height="medium"
      >
        <a href="#fleet" className="btn-ghost-light">
          Browse the fleet
        </a>
      </Hero>

      {/* ── Filter bar ───────────────────────────────────────────── */}
      <Section tone="white" spacing="tight" id="fleet">
        <div className="space-y-5">
          {/* Category chips */}
          <fieldset>
            <legend className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-pine-500">
              By type
            </legend>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by boat type"
            >
              {CATEGORY_FILTERS.map((c) => (
                <FilterChip
                  key={c}
                  active={activeCategory === c}
                  href={`/rentals?category=${c}`}
                >
                  {CATEGORY_LABELS[c]}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          {/* Activity chips */}
          <fieldset>
            <legend className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-pine-500">
              By activity
            </legend>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by activity"
            >
              {ACTIVITY_FILTERS.map((a) => (
                <FilterChip
                  key={a}
                  active={activeActivity === a}
                  href={`/rentals?activity=${a}`}
                >
                  {ACTIVITY_LABELS[a]}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          {/* Capacity chips */}
          <fieldset>
            <legend className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-pine-500">
              Group size
            </legend>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by group size"
            >
              {CAPACITY_OPTIONS.map((g) => (
                <FilterChip
                  key={g.max}
                  active={capacity === g.max}
                  href={`/rentals?capacity=${g.max}`}
                >
                  {g.label}
                </FilterChip>
              ))}
            </div>
          </fieldset>

          {hasFilter && (
            <Link
              href="/rentals"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-lake-700 underline-offset-4 hover:underline"
            >
              <span aria-hidden="true">×</span>
              Clear all filters
            </Link>
          )}
        </div>
      </Section>

      {/* ── Results grid ─────────────────────────────────────────── */}
      <Section tone="default" spacing="loose">
        {/* Results header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-sand-200 pb-6">
          <div>
            {activeLabel ? (
              <>
                <p className="eyebrow mb-1">Filtered results</p>
                <h2 className="text-display-sm font-medium text-pine-900">{activeLabel}</h2>
              </>
            ) : (
              <>
                <p className="eyebrow mb-1">All rentals</p>
                <h2 className="text-display-sm font-medium text-pine-900">Our fleet</h2>
              </>
            )}
            <p className="mt-1 text-sm text-pine-500">
              {items.length} {items.length === 1 ? "rental" : "rentals"} available
            </p>
          </div>
        </div>

        {items.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.singenuityId} delay={i * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          /* Empty state */
          <Reveal>
            <div className="rounded-4xl border border-lake-100 bg-lake-50/60 px-8 py-14 text-center">
              <p className="text-display-sm font-medium text-pine-900">
                No rentals match that filter
              </p>
              <p className="mt-2 text-pine-500">
                Try a different combination, or browse everything.
              </p>
              <Link href="/rentals" className="btn-primary mt-6 inline-block">
                See all rentals
              </Link>
            </div>
          </Reveal>
        )}
      </Section>

      {/* ── Patios cross-sell band ────────────────────────────────── */}
      <Section tone="pine" spacing="loose">
        <Container size="narrow">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow mb-4 !text-sand-300">Also available</p>
              <h2 className="text-display-md font-medium text-white">
                Reserve a lakeside patio
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-sand-200/80">
                Gather your group at one of our reserved day-use patios — BBQ pits, lake
                views, and shaded picnic areas from 8 AM to 8 PM.
              </p>
              <Link href="/patios" className="btn-ghost-light mt-8 inline-block">
                View patios &amp; day-use
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

/* ── Filter chip ──────────────────────────────────────────────────────────── */

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ease-soft-out " +
        (active
          ? "border-lake-700 bg-lake-700 text-white shadow-soft"
          : "border-sand-300 bg-white text-pine-700 hover:border-lake-400 hover:bg-lake-50 hover:text-lake-800")
      }
    >
      {children}
    </Link>
  );
}
