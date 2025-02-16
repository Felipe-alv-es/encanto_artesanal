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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
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
          <Route path="/product-page" exact element={<ProductPage />} />
          <Route
            path="/product-management"
            exact
            element={<ProductManagement />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
