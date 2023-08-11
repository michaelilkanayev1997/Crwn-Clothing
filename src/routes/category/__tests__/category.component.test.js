import { screen, waitFor } from "@testing-library/react";
import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

// Define the ScrollToTopWrapper component within the test
const ScrollToTopWrapper = ({ children }) => {
  // Mimic the scrollTo behavior for testing
  window.scrollTo = jest.fn();

  return children;
};

describe("Category tests", () => {
  test("It should render the title of the correct category", async () => {
    renderWithProviders(
      <ScrollToTopWrapper>
        <Category />
      </ScrollToTopWrapper>,
      {
        preloadedState: {
          categories: {
            categories: [],
          },
        },
      }
    );

    await waitFor(() => {
      const titleElement = screen.getByText(/mens/i);
      expect(titleElement).toBeInTheDocument();
    });
  });

  test("It should not render the products if there are no products", async () => {
    renderWithProviders(
      <ScrollToTopWrapper>
        <Category />
      </ScrollToTopWrapper>,
      {
        preloadedState: {
          categories: {
            categories: [],
          },
        },
      }
    );

    const dropdownTextElement = screen.queryByText(/details/i);
    expect(dropdownTextElement).toBeNull();
  });

  test("It should render the products if there are products", async () => {
    renderWithProviders(
      <ScrollToTopWrapper>
        <Category />
      </ScrollToTopWrapper>,
      {
        preloadedState: {
          categories: {
            categories: [
              {
                title: "mens",
                items: [
                  { id: 1, name: "Product 1" },
                  { id: 2, name: "Product 2" },
                ],
              },
            ],
          },
        },
      }
    );

    const product1Element = screen.getByText(/product 1/i);
    expect(product1Element).toBeInTheDocument();
    const product2Element = screen.getByText(/product 2/i);
    expect(product2Element).toBeInTheDocument();
  });
});
