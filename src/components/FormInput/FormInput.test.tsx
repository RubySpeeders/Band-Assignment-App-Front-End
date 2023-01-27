import { screen } from "@testing-library/react"
// import { FormInput } from "./FormInput"

describe("FormInput", () => {
  it("name prop is rendered", () => {
    // Arrange
    const message = "Hi, my name is FormInput!"

    // Act
    // const render(<FormInput name="FormInput" />)
    const received = screen.getByText(message)

    // Assert
    expect(received).toBeDefined()
  })
})
