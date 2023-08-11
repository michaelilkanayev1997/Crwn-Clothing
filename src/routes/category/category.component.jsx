import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    // Scroll to the top of the page on render
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log("categoriesMap", categoriesMap);
  console.log("products", products);

  return (
    <Fragment>
      {category && <Title>{category.toUpperCase()}</Title>}
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
