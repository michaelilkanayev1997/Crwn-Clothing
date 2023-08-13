import CheckoutItem from "../checkout-item.component";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("CheckoutItem tests", () => {
  const cartItem = {
    id: 1,
    name: "Item A",
    imageUrl: "test",
    price: 10,
    quantity: 2,
  };

  it("renders checkout item correctly", () => {
    renderWithProviders(<CheckoutItem cartItem={cartItem} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("10 $")).toBeInTheDocument();
    expect(screen.getByRole("img", { alt: "Item A" })).toBeInTheDocument();
  });
});
