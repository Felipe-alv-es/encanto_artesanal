import { Box } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/ProductItem.tsx";
import {
  getContainerStyle,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/ProductPageTitle.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import ProductPageSkeleton from "./Components/Skeleton/index.tsx";
import ProductPagePagination from "./Components/ProductPagePagination/ProductPagePagination.tsx";
import {
  pageDescriptions,
  pageMap,
} from "../../assets/Arrays/ProductPageList.tsx";
import { useNavigation } from "../../Context/NavigationContext/NavigationContext.tsx";

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { apiData, isLoading } = useApiData();
  const { currentPageNumber, setCurrentPageNumber } = useNavigation();
  const currentPage = () => pageMap[location.pathname] ?? null;
  const current = currentPage();

  const handlePageChange = (value: number) => {
    setCurrentPageNumber(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeProducts = apiData?.data
    ? [...apiData.data]
        .filter((item) => item.isActive !== false)
        .sort((a, b) => b.id - a.id)
    : [];

  const filteredProducts =
    currentPage() && currentPage() !== "Todos"
      ? currentPage() === "velas_artesanais"
        ? activeProducts.filter((item) =>
            ["velas_moldadas", "velas_container"].includes(item.producttype),
          )
        : activeProducts.filter((item) => item.producttype === currentPage())
      : activeProducts;

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPageNumber - 1) * productsPerPage,
    currentPageNumber * productsPerPage,
  );

  const productPageTitle = current
    ? (pageDescriptions[current]?.title ?? "")
    : "Todos os Produtos";
  const productPageDescription = current
    ? (pageDescriptions[current]?.description ?? "")
    : "Explore nossa coleção completa, onde cada peça é criada com atenção aos detalhes para transformar seus ambientes com charme, personalidade e um toque único de cuidado artesanal.";

  const handleOnClickItem = (id: number) => {
    localStorage.setItem("lastVisitedPage", currentPageNumber.toString());
    navigate(`/produto/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <Box>
        <ProductPageTitle
          title={productPageTitle}
          subtitle={productPageDescription}
        />
        <Box sx={getContainerStyle}>
          <Box>
            <Box sx={productPageGridStyle}>
              {isLoading ? (
                <ProductPageSkeleton />
              ) : (
                currentProducts.map((item) => (
                  <Box key={item.id}>
                    <ProductItem
                      title={item.title}
                      price={item.description}
                      imageSrc={item.imagesrc[0]}
                      onClick={() => handleOnClickItem(item.id)}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <ProductPagePagination
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={handlePageChange}
        totalPages={totalPages}
      />
      <Footer />
    </>
  );
};

export default ProductPage;
