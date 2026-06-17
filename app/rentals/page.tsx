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
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Boat Rentals",
  description:
    "Browse Lake Sonoma Marina boat rentals — pontoons, watersport boats, fishing boats, jet skis, kayaks, paddle boards and canoes. Filter by activity or group size and book online.",
  path: "/rentals",
});

const CATEGORY_FILTERS: Category[] = ["pontoon", "watersport", "sport", "fishing", "jetski", "paddle"];
const ACTIVITY_FILTERS: ActivityTag[] = ["cruising", "fishing", "watersports", "paddling"];

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

  const hasFilter = activeCategory || activeActivity || capacity !== undefined;

  return (
    <div className="container-page py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold text-lake-900">Boat Rentals</h1>
        <p className="mt-2 text-pine-700">
          Pick the right boat for your group and book the exact item — every booking link
          takes you straight to that boat&apos;s availability calendar.
        </p>
      </header>

      {/* Filters */}
      <div className="mt-6 space-y-3" role="group" aria-label="Filter rentals">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-pine-700">Type:</span>
          {CATEGORY_FILTERS.map((c) => (
            <FilterChip key={c} active={activeCategory === c} href={`/rentals?category=${c}`}>
              {CATEGORY_LABELS[c]}
            </FilterChip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-pine-700">Activity:</span>
          {ACTIVITY_FILTERS.map((a) => (
            <FilterChip key={a} active={activeActivity === a} href={`/rentals?activity=${a}`}>
              {ACTIVITY_LABELS[a]}
            </FilterChip>
          ))}
        </div>
        {hasFilter && (
          <Link href="/rentals" className="inline-block text-sm font-semibold text-lake-700 hover:underline">
            Clear filters ✕
          </Link>
        )}
      </div>

      {/* Results */}
      {items.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.singenuityId} product={p} />
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-lake-100 bg-lake-50 p-6 text-pine-700">
          No rentals match that filter.{" "}
          <Link href="/rentals" className="font-semibold text-lake-700 hover:underline">
            See all rentals
          </Link>
          .
        </p>
      )}

      <p className="mt-10 text-sm text-pine-700">
        Looking for a place to gather lakeside?{" "}
        <Link href="/patios" className="font-semibold text-lake-700 hover:underline">
          Reserve a patio or day-use spot →
        </Link>
      </p>
    </div>
  );
}

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
      aria-current={active ? "true" : undefined}
      className={
        "rounded-full border px-3 py-1.5 text-sm font-medium transition " +
        (active
          ? "border-lake-600 bg-lake-600 text-white"
          : "border-lake-200 text-pine-900 hover:border-lake-400 hover:bg-lake-50")
      }
    >
      {children}
    </Link>
  );
}
