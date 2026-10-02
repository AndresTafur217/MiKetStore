import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { checkoutCart, demoUser, getLocalCart, removeFromCart, updateCartQuantity } from "./data/catalog";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useAuthModal } from "./auth/AuthModalContext";

const formatPrice = (value) => new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
}).format(value);

export function Shoppings() {
  const user = useCurrentUser();
  const { requestLogin } = useAuthModal();
  const [cart, setCart] = useState(() => user ? getLocalCart(user.id) : []);
  const [completedOrder, setCompletedOrder] = useState(null);

  useEffect(() => {
    setCart(user ? getLocalCart(user.id) : []);
    setCompletedOrder(null);
  }, [user]);

  const refreshQuantity = (productId, quantity) => {
    setCart(updateCartQuantity(productId, quantity, user.id));
  };

  const removeProduct = (productId) => {
    setCart(removeFromCart(productId, user.id));
  };

  const confirmOrder = (userId) => {
    const order = checkoutCart(userId);
    if (order) {
      setCompletedOrder(order);
      setCart([]);
    }
  };

  const placeOrder = () => {
    if (!user) {
      requestLogin({ onSuccess: () => confirmOrder(demoUser.id) });
      return;
    }
    confirmOrder(user.id);
  };

  const total = cart.reduce((sum, item) => sum + item.producto.precio * item.quantity, 0);

  if (!user) {
    return (
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Carrito de compras</h1>
        <p className="text-gray-600">Inicia sesión para consultar tu carrito.</p>
        <Link to="/perfil" className="border border-gray-400 px-4 py-2 hover:bg-store-items2">Ir a mi cuenta</Link>
      </section>
    );
  }

  if (completedOrder) {
    return (
      <section className="mx-auto flex max-w-2xl flex-col items-center gap-4 py-12 text-center">
        <span className="text-4xl text-emerald-700">✓</span>
        <h1 className="text-2xl font-bold">Pedido confirmado</h1>
        <p>Tu pedido {completedOrder.id} quedó registrado por {formatPrice(completedOrder.total)}.</p>
        <Link to="/orders" className="border border-gray-400 px-4 py-2 hover:bg-store-items2">Ver mis pedidos</Link>
        <Link to="/products" className="text-sm underline">Seguir comprando</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Carrito de compras</h1>
          <p className="mt-1 text-sm text-gray-600">{cart.length} productos distintos</p>
        </div>
        <Link to="/products" className="text-sm underline">Seguir comprando</Link>
      </div>

      {cart.length === 0 ? (
        <div className="border-y border-gray-300 py-12 text-center">
          <p className="text-lg font-medium">Tu carrito está vacío</p>
          <p className="mt-2 text-sm text-gray-600">Añade productos del catálogo para preparar un pedido.</p>
          <Link to="/products" className="mt-5 inline-block border border-gray-400 px-4 py-2 hover:bg-store-items2">Explorar productos</Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_19rem]">
          <div className="divide-y divide-gray-300 border-y border-gray-300">
            {cart.map(({ producto, quantity }) => (
              <article key={producto.id} className="grid grid-cols-[5rem_1fr] gap-4 py-4 sm:grid-cols-[7rem_1fr_auto]">
                <img
                  src={producto.imagenes[0]?.url}
                  alt={producto.imagenes[0]?.alt || producto.nombre}
                  className="aspect-square w-full object-cover"
                />
                <div className="flex min-w-0 flex-col justify-center gap-1">
                  <h2 className="font-semibold">{producto.nombre}</h2>
                  <p className="line-clamp-2 text-sm text-gray-600">{producto.descripcion}</p>
                  <button type="button" onClick={() => removeProduct(producto.id)} className="mt-1 w-fit text-sm text-red-700 underline">Quitar</button>
                </div>
                <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end sm:justify-center">
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label={`Quitar una unidad de ${producto.nombre}`} disabled={quantity <= 1} onClick={() => refreshQuantity(producto.id, quantity - 1)} className="size-8 border border-gray-300 disabled:opacity-40">−</button>
                    <span className="min-w-6 text-center">{quantity}</span>
                    <button type="button" aria-label={`Añadir una unidad de ${producto.nombre}`} disabled={quantity >= producto.stock} onClick={() => refreshQuantity(producto.id, quantity + 1)} className="size-8 border border-gray-300 disabled:opacity-40">+</button>
                  </div>
                  <strong>{formatPrice(producto.precio * quantity)}</strong>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit border-y border-gray-300 py-4">
            <h2 className="text-lg font-semibold">Resumen</h2>
            <div className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
            <div className="mt-2 flex justify-between text-sm"><span>Envío</span><span>Gratis</span></div>
            <div className="mt-4 flex justify-between border-t border-gray-300 pt-4 text-lg font-bold"><span>Total</span><span>{formatPrice(total)}</span></div>
            <button type="button" onClick={placeOrder} className="mt-5 w-full bg-store-items px-4 py-3 font-semibold hover:bg-store-items2">Confirmar pedido</button>
          </aside>
        </div>
      )}
    </section>
  );
}