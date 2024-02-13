import Footer from "./Footer";
import Hero from "./Hero";
import HighlightProducts from "./HighlightProducts";
import NewArrivals from "./NewArrivals";
import Products from "./Products";
import TopBrands from "./TopBrands";

const Home = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <Products />
      <TopBrands />
      <HighlightProducts />
      <Footer />
    </>
  );
};

export default Home;
