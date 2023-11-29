import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load the header component",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
<Header/>
        </Provider>
        </BrowserRouter>
    )

    const LoginButton = screen.getByRole("button")
    expect(LoginButton).toBeInTheDocument()
})
it("should load the cart Item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
<Header/>
        </Provider>
        </BrowserRouter>
    )

    const cartItem = screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument()
})
it("should change login button to logout button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
<Header/>
        </Provider>
        </BrowserRouter>
    )

   const loginbutton = screen.getByRole("button",{name:"Login"})
   fireEvent.click(loginbutton)
   const logoutbutton= screen.getByRole("button",{name:"Log out"})
   expect(logoutbutton).toBeInTheDocument()
})