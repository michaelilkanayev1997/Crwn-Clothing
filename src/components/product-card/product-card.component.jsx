import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  LinkToDetails,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>

      <Button buttonType={BUTTON_TYPE_CLASSES.details}>
        <LinkToDetails to="/itemdetails" state={{ product: product }}>
          Details
        </LinkToDetails>
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
