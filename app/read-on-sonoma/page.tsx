import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Read On Sonoma — Blog",
  description:
    "Tips, guides, and stories from Lake Sonoma Marina — how to pick the right boat, the best coves to explore, and what to bring for a day on the lake.",
  path: "/read-on-sonoma",
});

/**
 * TODO (owner): migrate existing blog posts here, or connect a simple Markdown
 * folder / headless CMS. Until posts are added this shows a friendly placeholder
 * rather than empty/auto-generated filler.
 */
export default function BlogPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">Read On Sonoma</h1>
      <p className="mt-2 max-w-2xl text-pine-700">
        Guides and stories for making the most of your day on Lake Sonoma — coming soon.
      </p>
      <div className="mt-8 rounded-2xl bg-lake-50 p-6">
        <p className="text-pine-900">
          In the meantime, ready to get on the water?
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/rentals" className="btn-primary">Browse rentals</Link>
          <Link href="/patios" className="btn-secondary">Reserve a patio</Link>
        </div>
      </div>
    </div>
  );
}
