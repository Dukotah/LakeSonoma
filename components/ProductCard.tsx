import Image from "next/image";
import Link from "next/link";
import { fromPrice, type Product } from "@/data/marina";
import { singenuityImage } from "@/lib/singenuity";
import { BookButton } from "@/components/BookButton";

export function ProductCard({ product }: { product: Product }) {
  const from = fromPrice(product);
  const unit = product.pricing[0]?.label ?? "";

  return (
    <article className="card flex flex-col">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-lake-50">
          <Image
            src={singenuityImage(product.singenuityId)}
            alt={`${product.name} at Lake Sonoma Marina`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-lake-900">
          <Link href={`/product/${product.slug}`} className="hover:text-lake-700">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-pine-700">
          {product.capacity !== undefined && <span>Up to {product.capacity} people</span>}
          {product.priceTBD ? (
            <span className="font-semibold text-lake-700">Inquire for pricing</span>
          ) : (
            from !== undefined && (
              <span className="font-semibold text-lake-700">
                From ${from} <span className="font-normal">/ {unit.toLowerCase()}</span>
              </span>
            )
          )}
        </div>
        <p className="mt-2 flex-1 text-sm text-pine-900/80">{product.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <BookButton
            singenuityId={product.singenuityId}
            label="Book"
            productName={product.name}
            className="btn-primary px-4 py-2 text-sm"
          />
          <Link href={`/product/${product.slug}`} className="btn-secondary px-4 py-2 text-sm">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
