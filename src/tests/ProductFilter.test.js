import { render, screen, fireEvent } from "@testing-library/react";
import ProductFilter from "../components/header/ProductFilter";

describe("ProductFilter", () => {
  it("should call the onChange function when a new option is selected", () => {
    const onChangeMock = jest.fn();
    render(
      <ProductFilter val="toilets" category="product" onChange={onChangeMock} />
    );

    const select = screen.getByTestId("product-filter-test");
    fireEvent.change(select, { target: { value: "baths/corner-baths" } });
    expect(onChangeMock).toHaveBeenCalledWith("baths/corner-baths");
  });

  it('should render render the correct options for category "product"', () => {
    render(
      <ProductFilter val="toilets" category="product" onChange={() => {}} />
    );

    const select = screen.getByTestId("product-filter-test");
    expect(select).toHaveValue("toilets");

    const toiletsOption = screen.getByText("Toilets");
    const bathsOption = screen.getByText("Baths");
    expect(toiletsOption).toBeInTheDocument();
    expect(bathsOption).toBeInTheDocument();
  });

  it('renders the correct options for category "sort"', () => {
    render(<ProductFilter val="1" category="sort" onChange={() => {}} />);

    const select = screen.getByTestId("product-filter-test");
    expect(select).toHaveValue("1");

    const recommendedOption = screen.getByText("Recommended");
    const lowestPriceOption = screen.getByText("Lowest Price");
    const highestPriceOption = screen.getByText("Highest Price");
    const highestDiscountOption = screen.getByText("Highest Discount");
    expect(recommendedOption).toBeInTheDocument();
    expect(lowestPriceOption).toBeInTheDocument();
    expect(highestPriceOption).toBeInTheDocument();
    expect(highestDiscountOption).toBeInTheDocument();
  });
});
