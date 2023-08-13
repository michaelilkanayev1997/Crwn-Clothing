import { screen } from "@testing-library/react";
import CartItem from "../cart-item.comonent";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Cart Item tests", () => {
  test("It should render item with the fields", () => {
    const cartItem = {
      id: 1,
      name: "Item A",
      imageUrl: "test",
      price: 10,
      quantity: 2,
    };

    renderWithProviders(<CartItem cartItem={cartItem} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    expect(screen.getByText("Item A")).toBeInTheDocument();
    expect(screen.getByText("2 x $10")).toBeInTheDocument();
  });

  test("It should display the correct total price for the cart item", () => {
    const cartItem = {
      id: 3,
      name: "Item B",
      imageUrl: "test",
      price: 15,
      quantity: 4,
    };

    renderWithProviders(<CartItem cartItem={cartItem} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    expect(screen.getByText(`${4} x $${15}`)).toBeInTheDocument(); // price * quantity
  });
});
