import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Content } from "./Content";
import { Products } from "./Products";
import { Categories } from "./Categories";
import { Favorites } from "./Favorites";
import { Shoppings } from "./Shoppings";
import { Orders } from "./Orders";
import { User } from "./User";
import { AuthModalProvider } from "./auth/AuthModalProvider";
import { ProtectedRoute } from "./auth/ProtectedRoute";

export function App() {
  return (
    <Router>
      <AuthModalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Content />} />
            <Route path="products" element={<Products />} />
            <Route path="productos" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categorias" element={<Categories />} />
            <Route path="favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="guardados" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
            <Route path="shoppings" element={<ProtectedRoute><Shoppings /></ProtectedRoute>} />
            <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="pedidos" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="perfil" element={<ProtectedRoute><User /></ProtectedRoute>} />
          </Route>
        </Routes>
      </AuthModalProvider>
    </Router>
  )
}