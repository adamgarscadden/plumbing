import { render, screen, fireEvent } from "@testing-library/react";
import PageFooterButton from "../components/footer/PageFooterButton";

describe("PageFooterButton", () => {
  it("should call onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(
      <PageFooterButton
        onClick={onClickMock}
        value="testValue"
        buttonText="Testing the Button"
      />
    );

    const button = screen.getByText("Testing the Button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledWith("testValue");
  });

  it("should render with the correct text", () => {
    render(
      <PageFooterButton
        onClick={() => {}}
        value="testValue"
        buttonText="Testing the Button"
      />
    );

    const button = screen.getByText("Testing the Button");
    expect(button).toBeInTheDocument();
  });
});
