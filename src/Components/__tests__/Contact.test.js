import { screen , render } from "@testing-library/react";
import Contact from '../Contact';
import '@testing-library/jest-dom';


describe("Contact us page test cases",()=>{

    it("Should check header in  contact us component",()=>{
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    })

    it("Should check  button on contact us component",()=>{
        render(<Contact />);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    })

    it("Should check  input on contact us component",()=>{
        render(<Contact />);

        const input = screen.getByPlaceholderText("Name");

        expect(input).toBeInTheDocument();
    })

    it("Should check 2 input boxes on contact us component",()=>{
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox")

        console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);

        
    })
})