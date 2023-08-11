import { screen, fireEvent, waitFor } from "@testing-library/react";
import ItemDetails from "../item-details.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

const mockProduct = {
  id: 1,
  imageUrl: "test",
  name: "Item A",
  price: 10,
  src: ["test,test"],
  options: ["small", "medium", "large"],
};

// Mock the useLocation hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { product: mockProduct }, // Provide your mock product here
  }),
}));

describe("Item Details tests", () => {
  // Define the ScrollToTopWrapper component within the test
  const ScrollToTopWrapper = ({ children }) => {
    // Mimic the scrollTo behavior for testing
    window.scrollTo = jest.fn();

    return children;
  };

  test("it should add the product item when Item Details button is clicked", async () => {
    const { store } = renderWithProviders(
      <ScrollToTopWrapper>
        <ItemDetails />
      </ScrollToTopWrapper>,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    //wait for the buttom to appear before finding it and clicking on it
    await waitFor(
      () => {
        const addToCartButtonElement = screen.getByRole("button");
        fireEvent.click(addToCartButtonElement);

        expect(store.getState().cart.cartItems.length).toBe(1);
      },
      {
        timeout: 1500,
      }
    );
  });
});
