import Footer from "../Global/Footer/Footer";
import AdsBanner from "./AdsBanner/AdsBanner";
import Banner from "./Banner/Banner";
import Box from "./Box/Box";
import Category from "./Category/Category";
import Futures from "./Futures/Futures";
import Products from "./Products/Products";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Products />
      <Box />
      <AdsBanner />
      <Futures />
      <Footer />
    </>
  );
}
