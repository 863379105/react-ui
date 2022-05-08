import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

const defaultProps = {
  onClick: jest.fn()
}

describe('test button component', () => {
  it('should render the correct default button',() => {
    const wrapper = render(<Button {...defaultProps} children={'Default'} />);
    const element = wrapper.getByText('Default');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled;
  })
})