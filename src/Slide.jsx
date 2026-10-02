import { products } from "./data/catalog";
import { SkeletonImage } from "./Skeletons";

export function Slide() {
  const carouselProducts = [...products, ...products];

  return (
    <div className="h-full w-max overflow-hidden flex flex-row gap-5 items-center animate-slider">
      {carouselProducts.map((p, i) => {
        const firstImage = p.imagenes?.[0];
        return (
          <article
            key={p.id + "-" + i}
            className="relative h-full w-140 rounded-4xl bg-surface flex flex-col justify-center items-center overflow-hidden"
          >
            {firstImage ? (
              <SkeletonImage
                src={firstImage.url}
                alt={firstImage.alt || p.nombre}
                className="w-full h-full object-contain rounded-xl"
              />
            ) : (
              <div className="seze-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-xl">
                Sin imagen
              </div>
            )}
            <h3 className="font-bold absolute bg-white/50 p-2 rounded-xl capitalize">{p.nombre}</h3>
          </article>
        );
      })}
    </div>
  );
}
