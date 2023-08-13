import { screen, waitFor } from "@testing-library/react";
import CategoryPreview from "../category-preview.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("CategoryPreview tests", () => {
  const mockProducts = [
    {
      id: 1,
      name: "Item A",
      imageUrl: "test",
      price: 10,
    },
    {
      id: 2,
      name: "Item B",
      imageUrl: "test",
      price: 10,
    },
    {
      id: 3,
      name: "Item C",
      imageUrl: "test",
      price: 10,
    },
    {
      id: 4,
      name: "Item D",
      imageUrl: "test",
      price: 10,
    },
    {
      id: 5,
      name: "Item E",
      imageUrl: "test",
      price: 10,
    },
  ];

  test("It should render The Category title and product cards", () => {
    renderWithProviders(
      <CategoryPreview title="mens" products={mockProducts} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const titleElement = screen.getByText(/mens/i);
    expect(titleElement).toBeInTheDocument();

    mockProducts.slice(0, 4).forEach((product) => {
      const productCardElement = screen.getByText(product.name);
      expect(productCardElement).toBeInTheDocument();
    });
  });

  test("It should render only up to 4 product cards", async () => {
    renderWithProviders(
      <CategoryPreview title="mens" products={mockProducts} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const productCardElements = screen.queryAllByText(/item /i);
    expect(productCardElements).toHaveLength(4);
  });

  test("It should pass the correct props to ProductCard component", () => {
    renderWithProviders(
      <CategoryPreview title="mens" products={mockProducts} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    mockProducts.slice(0, 4).forEach((product) => {
      const productCardElement = screen.getByText(product.name);
      expect(productCardElement).toBeInTheDocument();
    });
  });
});
