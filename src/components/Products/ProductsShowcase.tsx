import ProductInfo from "./ProductInfo";
import produtos from "../../json/produtos.json";
import { JSX, useState } from "react";
import arrowLeft from "../../assets/categories/arrowLeft.png";
import arrowRight from "../../assets/categories/arrowRight.png";

//interface que tem todas as informações do json
interface productInfo {
  photo: string;
  productName: string;
  descriptionShort: string;
  price: number;
}

export default function ProductsShowcase() {
  //quantidade minima e maxima de produtos
  const [minProducts, setMinProducts] = useState<number>(0);
  const [maxProducts, setMaxProducts] = useState<number>(4);

  //função para mostrar menos produtos
  const showLessProducts = () => {
    if (minProducts <= 0) return;
    setMinProducts((prevState) => (prevState -= 4));
    setMaxProducts((prevState) => (prevState -= 4));
    if (minProducts <= 0) setMinProducts(0);
    if (maxProducts < 4) setMaxProducts(4);
  };

  //função para mostrar mais produtos
  const showMoreProducts = () => {
    if (maxProducts >= produtos.products.length) return;
    setMinProducts((prevState) => (prevState += 4));
    setMaxProducts((prevState) => (prevState += 4));
    if (maxProducts >= produtos.products.length) {
      setMaxProducts(produtos.products.length);
      setMinProducts(produtos.products.length - 4);
    }
  };

  return (
    <div className="productsShowcase-container">
      <img
        onClick={() => showLessProducts()}
        className="arrowLeft"
        src={arrowLeft}
        alt="arrowLeft"/>

      <section className="productsShowcase">
        {produtos.products
          .slice(minProducts, maxProducts)
          .map((produto: productInfo): JSX.Element => {
            return (
              <ProductInfo
                imagePath={produto.photo}
                name={produto.productName}
                description={produto.descriptionShort}
                price={produto.price} />
            );
          })}
      </section>
      <img
        onClick={() => showMoreProducts()}
        className="arrowRight"
        src={arrowRight}
        alt="arrowRight" />
    </div>
  );
}
