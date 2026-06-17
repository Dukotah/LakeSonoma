"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fromPrice, type Product } from "@/data/marina";
import { singenuityImage } from "@/lib/singenuity";
import { BookButton } from "@/components/BookButton";

/**
 * Refined rental/patio card: photo (with graceful gradient fallback), serif name,
 * capacity + from-price, blurb, and a deep-linked Book button alongside a Details
 * link. Subtle hover lift. Image errors degrade to a tasteful gradient rather
 * than a broken image.
 */
export function ProductCard({ product }: { product: Product }) {
  const from = fromPrice(product);
  const unit = product.pricing[0]?.label ?? "";
  const [imgOk, setImgOk] = useState(true);

  return (
    <article className="card group flex flex-col hover:-translate-y-1 hover:shadow-lift">
      <Link
        href={`/product/${product.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`${product.name} details`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-lake-100">
          {imgOk ? (
            <Image
              src={singenuityImage(product.singenuityId)}
              alt={`${product.name} at Lake Sonoma Marina`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-soft-out group-hover:scale-105"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div aria-hidden="true" className="photo-fallback absolute inset-0" />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-medium leading-snug text-pine-900">
          <Link href={`/product/${product.slug}`} className="transition-colors hover:text-lake-700">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
          {product.capacity !== undefined && (
            <span className="text-pine-500">Up to {product.capacity} guests</span>
          )}
          {product.priceTBD ? (
            <span className="font-semibold text-lake-700">Inquire for pricing</span>
          ) : (
            from !== undefined && (
              <span className="font-semibold text-lake-700">
                From ${from}
                <span className="font-normal text-pine-500"> / {unit.toLowerCase()}</span>
              </span>
            )
          )}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-pine-600">{product.blurb}</p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <BookButton
            singenuityId={product.singenuityId}
            label="Book"
            productName={product.name}
            className="btn-primary px-5 py-2.5 text-sm"
          />
          <Link href={`/product/${product.slug}`} className="btn-secondary px-5 py-2.5 text-sm">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
