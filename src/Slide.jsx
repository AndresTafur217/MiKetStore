import { products } from "./data/catalog";

export function Slide() {
  const carouselProducts = [...products, ...products];

  return (
    <div className="h-full w-max overflow-hidden flex flex-row gap-5 items-center animate-slider">
      {carouselProducts.map((p, i) => {
        const firstImage = p.imagenes?.[0];
        return (
          <article
            key={p.id + "-" + i}
            className="relative h-full w-140 rounded-4xl flex flex-col justify-center items-center overflow-hidden"
          >
            {firstImage ? (
              <img
                src={firstImage.url}
                alt={firstImage.alt || p.nombre}
                className="w-full object-contain mb-3 rounded-xl"
              />
            ) : (
              <div className="seze-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-xl">
                Sin imagen
              </div>
            )}
            <h3 className="font-bold absolute ">{p.nombre}</h3>
          </article>
        );
      })}
    </div>
  );
}
