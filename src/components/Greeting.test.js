import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting component', () => {

  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);
  
    // Act
    //...
  
    // Assert
    const helloWorldElement = screen.getByText('Hello World!', { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });
  
})