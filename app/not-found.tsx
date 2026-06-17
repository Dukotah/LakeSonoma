import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-lake-600">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-lake-900">We can&apos;t find that page</h1>
      <p className="mt-3 text-pine-700">It may have moved. Let&apos;s get you back on the water.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/rentals" className="btn-secondary">Browse rentals</Link>
      </div>
    </div>
  );
}
