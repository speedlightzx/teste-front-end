import Banner from "./components/Banner/Banner";
import BrandList from "./components/Brands/BrandList";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import FormNewslatter from "./components/FormNewslatter/FormNewslatter";
import Header from "./components/Header/Header";
import Partners from "./components/Partners/Partners";
import Products from "./components/Products/Products";
import "./style/index.css";

function App() {
  return (
    <body className="app">
      <Header />
      <Banner />
      <Categories />
      <Products categories />
      <Partners />
      <Products />
      <Partners />
      <BrandList />
      <Products />
      <FormNewslatter />
      <Footer />
        <p className="end">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </body>
  );
}

export default App;
