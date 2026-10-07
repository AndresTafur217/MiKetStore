import { Link, useLocation } from "react-router-dom";
import { ProtectedLink } from "./auth/ProtectedLink";

const matchesPath = (pathname, paths) => paths.includes(pathname);

const mobileItemClass = (active) =>
  `size-10 md:size-12 rounded-1xl transition-all duration-300 text-gray-950 hover:bg-accent hover:shadow-md hover:scale-105 ${active ? "bg-accent shadow-md" : "bg-surface"}`;

export function Menu() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isProducts = matchesPath(pathname, ["/products", "/productos"]);
  const isCategories = matchesPath(pathname, ["/categories", "/categorias"]);
  const isShoppings = matchesPath(pathname, ["/shoppings", "/compras"]);
  const isFavorites = matchesPath(pathname, ["/favorites", "/favoritos"]);
  const isOrders = matchesPath(pathname, ["/orders", "/pedidos"]);
  return (
    <div className="h-full flex flex-row justify-center items-end">

      <section className="w-full max-w-3xl border-b-2 pb-2.5 border-b-gray-400 px-3.5 flex flex-row justify-evenly items-center">
        
        <article className={mobileItemClass(isHome)}>
          <Link to="/" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#house" />
            </svg>
          </Link>
        </article>

        <article className={mobileItemClass(isProducts)}>
          <Link to="/products" aria-label="Productos" title="Productos" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#tags" />
            </svg>
          </Link>
        </article>

        <article className={mobileItemClass(isCategories)}>
          <Link to="/categories" aria-label="Categorías" title="Categorías" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#categories" />
            </svg>
          </Link>
        </article>

        <article className={mobileItemClass(isFavorites)}>
          <ProtectedLink to="/favorites" aria-label="Favoritos" title="Favoritos" className="h-full w-full flex justify-center items-center rounded-full">
            <div className="h-full w-full flex justify-center items-center rounded-full">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#bookmark" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

        <article className={mobileItemClass(isShoppings)}>
          <ProtectedLink to="/shoppings" aria-label="Carrito" title="Carrito" className="h-full w-full rounded-full flex justify-center items-center">
            <div className="h-full w-full rounded-full flex justify-center items-center">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#shop" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

        <article className={mobileItemClass(isOrders)}>
          <ProtectedLink to="/orders" aria-label="Pedidos" title="Pedidos" className="h-full w-full rounded-full flex justify-center items-center">
            <div className="h-full w-full rounded-full flex justify-center items-center">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#history" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

      </section>
    </div>
  );
}
