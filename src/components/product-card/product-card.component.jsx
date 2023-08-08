import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  LinkToDetails,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product, title }) => {
  const { id, name, price, imageUrl } = product;

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </Footer>

      <Button buttonType={BUTTON_TYPE_CLASSES.details}>
        <LinkToDetails
          to={title ? `${title}/${id}` : `${id}`}
          state={{ product: product }}
        >
          Details
        </LinkToDetails>
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
