import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "../product-card.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Product Card tests", () => {
  test("it should show the details button on the product", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: 10,
    };

    renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const detailsButtonElement = screen.getByText(/details/i);
    expect(detailsButtonElement).toBeInTheDocument();
  });
});
