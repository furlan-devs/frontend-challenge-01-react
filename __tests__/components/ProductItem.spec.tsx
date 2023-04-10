import React from "react";
import { render } from "@testing-library/react";
import { ProductItem } from "../../src/components/Filters/components/ProductItem";

describe("ProductItem", () => {
  it("renders correctly with props", () => {
    const props = {
      name: "Plant 1",
      price: 50,
      imageUrl: "https://image.com",
    };
    const { getByTestId } = render(<ProductItem {...props} />);
    expect(getByTestId("product-item-container")).toBeInTheDocument();
    expect(getByTestId("product-item-name")).toHaveTextContent(props.name);
    expect(getByTestId("product-item-price")).toHaveTextContent(
      `$ ${props.price}`
    );
    expect(getByTestId("product-item-image")).toHaveAttribute(
      "src",
      props.imageUrl
    );
  });
});
