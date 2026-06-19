import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/data/imagery";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
        priority
      />
      <div aria-hidden="true" className="photo-overlay absolute inset-0 -z-10" />

      <div className="mx-auto max-w-xl px-6 py-28 text-center">
        <p className="eyebrow !text-sand-200">Error 404</p>
        <h1 className="mt-3 text-display-lg font-medium text-white drop-shadow-sm">
          You&apos;ve drifted off course
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-sand-50/90">
          We can&apos;t find that page — it may have moved or been retired. Let&apos;s get you
          back on the water.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/rentals" className="btn-ghost-light">
            Browse rentals
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-sand-100/80">
          <Link href="/patios" className="hover:text-white hover:underline">
            Patios
          </Link>
          <Link href="/storage" className="hover:text-white hover:underline">
            Storage
          </Link>
          <Link href="/faqs" className="hover:text-white hover:underline">
            FAQs
          </Link>
          <Link href="/contact" className="hover:text-white hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
