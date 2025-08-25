import { QueryClient, QueryClientProvider } from "react-query";
import {
  Home,
  Navbar,
  Categories,
  Galery,
  Releases,
  SocialMedia,
  Footer,
  ProductPage,
  ProductManagement,
  Login,
  ProductDetail,
} from "./Pages/index.ts";
import ProtectedRoute from "./utils/isAutenticated/index.tsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext/AuthContext.tsx";
import { CartProvider } from "./Context/ShoppingCartContext/CartContext.tsx";
import { NavigationProvider } from "./Context/NavigationContext/NavigationContext.tsx";

const queryClient = new QueryClient();

const productRoutes = [
  "kits-presenteaveis",
  "velas-moldadas",
  "velas-container",
  "cuidados-de-banho",
  "produtos-de-resina",
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <NavigationProvider>
            <div className="App">
              <BrowserRouter>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Navbar />
                        <Home />
                        <Categories />
                        <Galery />
                        <Releases />
                        <SocialMedia />
                        <Footer />
                      </>
                    }
                  />
                  <Route
                    path="/product-management"
                    element={<ProtectedRoute element={<ProductManagement />} />}
                  />
                  <Route path="/product-page" element={<ProductPage />} />
                  <Route path="/login" element={<Login />} />
                  {productRoutes.map((product) => (
                    <Route
                      key={product}
                      path={`/product-page/${product}`}
                      element={<ProductPage />}
                    />
                  ))}
                  <Route path="/produto/:id" element={<ProductDetail />} />
                </Routes>
              </BrowserRouter>
            </div>
          </NavigationProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
