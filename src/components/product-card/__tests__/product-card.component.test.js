import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "../product-card.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Product Card tests", () => {
  test("it should navigate to the ItemDetails page when Product Card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: 10,
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const detailsButtonElement = screen.getByText(/details/i);

    expect(detailsButtonElement).toBeInTheDocument();
  });
});
