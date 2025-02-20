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
} from "./Pages/index.ts";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const productRoutes = [
  "velas-moldadas",
  "velas-de-massagem",
  "velas-container",
  "sabonetes-decorativos",
  "geleia-de-banho",
  "sabonetes-de-massagem",
  "joia-de-resina",
];

function App() {
  return (
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
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/product-page" element={<ProductPage />} />
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
  );
}

export default App;
