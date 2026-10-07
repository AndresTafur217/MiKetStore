import {
    getLocalCart,
    getLocalFavorites,
    getLocalOrders,
    logoutDemoUser,
} from "./data/catalog";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useAuthModal } from "./auth/AuthModalContext";
import { Link, useNavigate } from "react-router-dom";

export function User() {
    const user = useCurrentUser();
    const { requestLogin } = useAuthModal();
    const navigate = useNavigate();
    const favoritesCount = user ? getLocalFavorites(user.id).length : 0;
    const cartCount = user ? getLocalCart(user.id).reduce((total, item) => total + item.quantity, 0) : 0;
    const ordersCount = user ? getLocalOrders(user.id).length : 0;

    const handleLogout = () => {
        logoutDemoUser();
        navigate("/", { replace: true });
    };

    if (!user) {
        return (
            <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 py-16 text-center">
                <h1 className="text-2xl font-bold">Inicia sesión en tu cuenta</h1>
                <p className="max-w-md text-gray-600">Accede para consultar tus favoritos, carrito y pedidos.</p>
                <button type="button" onClick={() => requestLogin()} className="mt-2 px-4 py-2 font-semibold">Iniciar sesión</button>
            </section>
        );
    }

    return (
        <section className="mx-auto w-full max-w-3xl py-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-300 pb-5">
                <div>
                    <p className="text-sm text-gray-500">Mi cuenta</p>
                    <h1 className="mt-1 text-2xl font-bold">{user.nombre}</h1>
                    <p className="mt-1">{user.email}</p>
                </div>
                <span className="border border-emerald-700 px-3 py-1 text-sm text-emerald-800">Sesión activa</span>
            </div>

            <dl className="grid gap-x-8 gap-y-4 border-b border-gray-300 py-5 sm:grid-cols-2">
                <div>
                    <dt className="text-sm text-gray-500">Nombre completo</dt>
                    <dd className="mt-1 font-medium">{user.nombre}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Correo electrónico</dt>
                    <dd className="mt-1 font-medium">{user.email}</dd>
                </div>
                <div>
                    <dt className="text-sm text-gray-500">Tipo de cuenta</dt>
                    <dd className="mt-1 font-medium">Cliente</dd>
                </div>
            </dl>

            <div className="grid grid-cols-3 gap-3 py-5 text-center">
                <div className="border-y border-gray-300 py-3">
                    <strong className="block text-xl">{favoritesCount}</strong>
                    <span className="text-sm text-gray-600">Favoritos</span>
                </div>
                <div className="border-y border-gray-300 py-3">
                    <strong className="block text-xl">{cartCount}</strong>
                    <span className="text-sm text-gray-600">En el carrito</span>
                </div>
                <div className="border-y border-gray-300 py-3">
                    <strong className="block text-xl">{ordersCount}</strong>
                    <span className="text-sm text-gray-600">Pedidos</span>
                </div>
            </div>

            <button type="button" onClick={handleLogout} className="mt-2 border border-gray-400 px-4 py-2">Cerrar sesión</button>
            <Link to="/" className="ml-4 text-sm underline">Volver a la tienda</Link>
        </section>
    );
}