import { Link } from "react-router-dom";
import { categories, products } from "./data/catalog";

export function Categories({ compact = false }) {
  return (
    <section className={compact ? "w-full overflow-x-auto scrollbar" : "w-full"}>
      {!compact && <h1 className="text-2xl font-bold mb-5">Categorías</h1>}
      <div className={compact ? "flex gap-3 min-w-max pb-2" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"}>
        {categories.map((category) => {
          const productCount = products.filter((product) =>
            product.categorias.some((item) => item.id === category.id),
          ).length;

          return (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className={`flex flex-col justify-between border border-gray-300 bg-white/70 rounded-1xl p-4 transition-colors ${compact ? "w-52 min-h-24" : "min-h-32"}`}
            >
              <span className="font-semibold">{category.nombre}</span>
              <span className="mt-2 text-sm text-gray-600">{category.descripcion}</span>
              <span className="mt-3 text-xs text-gray-500">{productCount} {productCount === 1 ? "producto" : "productos"}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}