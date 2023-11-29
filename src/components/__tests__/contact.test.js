import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("should loadcontact page",()=>{

    it("should loading contact us component",()=>{
        render(<Contact/>)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    
    })
    it("should load button inside component",()=>{
        render(<Contact/>)
        const button = screen.getByRole("button")
        expect (button).toBeInTheDocument() 
    })
    
    it("should load input name",()=>{
        render(<Contact/>)
        const inputName =screen.getByPlaceholderText("username");
        expect(inputName).toBeInTheDocument()
    })
    
    it("should 2input element",()=>{
        render(<Contact/>)
        const inpuNames = screen.getAllByRole('textbox')
        expect(inpuNames.length).toBe(2)
    })
})
