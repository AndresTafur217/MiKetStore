import { Link } from "react-router-dom";
import { ProtectedLink } from "./auth/ProtectedLink";

export function Menu() {
  return (
    <div className="h-full p-2.5 flex flex-row justify-center items-center">

      <section className="w-full max-w-3xl border-b-2 pb-2.5 border-b-gray-400 px-3.5 flex flex-row justify-evenly items-center">
        
        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950 
          hover:bg-surface-hover hover:scale-105">
          <Link to="/" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#house" />
            </svg>
          </Link>
        </article>

        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950 
          hover:bg-surface-hover hover:scale-105">
          <Link to="/products" aria-label="Productos" title="Productos" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#tags" />
            </svg>
          </Link>
        </article>

        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950 
          hover:bg-surface-hover hover:scale-105">
          <Link to="/categories" aria-label="Categorías" title="Categorías" className="h-full w-full flex justify-center items-center">
            <svg className="size-7.5 md:size-10">
              <use xlinkHref="/sprite.svg#categories" />
            </svg>
          </Link>
        </article>

        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950
          hover:bg-surface-hover hover:scale-105">
          <ProtectedLink to="/favorites" aria-label="Favoritos" title="Favoritos" className="h-full w-full flex justify-center items-center rounded-full">
            <div className="h-full w-full flex justify-center items-center rounded-full">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#bookmark" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950
          hover:bg-surface-hover hover:scale-105">
          <ProtectedLink to="/shoppings" aria-label="Carrito" title="Carrito" className="h-full w-full rounded-full flex justify-center items-center">
            <div className="h-full w-full rounded-full flex justify-center items-center">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#shop" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

        <article className="size-10 bg-surface sm:size-12 md:size-15 rounded-full transition-all text-gray-950
          hover:bg-surface-hover hover:scale-105">
          <ProtectedLink to="/orders" aria-label="Pedidos" title="Pedidos" className="h-full w-full rounded-full flex justify-center items-center">
            <div className="h-full w-full rounded-full flex justify-center items-center">
              <svg className="size-7.5 md:size-10">
                <use xlinkHref="/sprite.svg#car" />
              </svg>
            </div>
          </ProtectedLink>
        </article>

      </section>
    </div>
  );
}
