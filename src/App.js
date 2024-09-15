import {
  Home,
  Navbar,
  Categories,
  Galery,
  Lançamentos,
  SocialMedia,
  Footer,
} from "./Pages/index.ts";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Categories />
      <Galery />
      <Lançamentos />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
