import React, { useEffect, useState } from "react";
import {
  ItemDetailsContainer,
  Details,
  BigImage,
  Thumbnails,
  CustomSelect,
  StyledSelect,
  Label,
  TitleLabel,
} from "./item-details.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";

const ItemDetails = () => {
  const location = useLocation();
  const product = location.state.product;

  const [activeIndex, setActiveIndex] = useState(0);
  const [option, setOption] = useState("pick your size");
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleThumbnailClick = (index) => {
    setIsZoomed(false);
    setActiveIndex(index);
  };

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <ItemDetailsContainer>
          <Details>
            <BigImage
              zoomed={isZoomed}
              onClick={() => setIsZoomed(!isZoomed)}
              onMouseDown={(e) => e.preventDefault()}
            >
              <img src={product?.src[activeIndex]} alt="" />
            </BigImage>

            <TitleLabel>
              <h2>{product?.name}</h2>
            </TitleLabel>

            <CustomSelect>
              <Label>Size:</Label>
              <StyledSelect
                onChange={(e) => setOption(e.target.value)}
                value={option}
              >
                {product?.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </StyledSelect>
            </CustomSelect>

            <h2>Price : {product?.price} $</h2>

            <Thumbnails>
              {product?.src.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Thumbnail ${index}`}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </Thumbnails>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              onClick={addProductToCart}
            >
              Add to card
            </Button>
          </Details>
        </ItemDetailsContainer>
      )}
    </>
  );
};

export default ItemDetails;
