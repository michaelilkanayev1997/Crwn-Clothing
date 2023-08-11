import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageUrl: "test", price: 10, quantity: 1 },
      { id: 2, name: "Item B", imageUrl: "test", price: 10, quantity: 2 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("3");
    expect(cartIconElement).toBeInTheDocument();
  });

  test("CartIconContainer has correct styles", () => {
    const initialCartItems = [];

    const { container } = renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconContainer = container.firstChild; // Get the first child (CartIconContainer)
    const svgElement = cartIconContainer.children[1]; // Get the first second child of CartIconContainer (ItemCount)

    expect(cartIconContainer).toHaveStyle("width: 45px");
    expect(cartIconContainer).toHaveStyle("height: 45px");
    expect(svgElement).toHaveStyle("position: absolute");
    expect(svgElement).toHaveStyle("font-size: 10px");
  });
});
