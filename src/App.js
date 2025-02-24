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
} from "./Pages/index.ts";
import ProtectedRoute from "./utils/isAutenticated/index.tsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext/AuthContext.tsx";

const queryClient = new QueryClient();

const productRoutes = [
  "velas-moldadas",
  "velas-de-massagem",
  "velas-container",
  "sabonetes-decorativos",
  "geleias-de-banho",
  "sabonetes-de-massagem",
  "joias-de-resina",
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
            </Routes>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
