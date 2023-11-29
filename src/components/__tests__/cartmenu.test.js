import { act } from "react-dom/test-utils"
import RestaurantMenuCard from "../RestaurantMenuCard"
import { fireEvent, render, screen } from "@testing-library/react"
import MOCK_DATA from "../Mocks/RestaurantMenuListMock.json"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should load the RestaurantMenu component",async()=>{
     await act(()=>render(<BrowserRouter><Provider store={appStore}><Header/><RestaurantMenuCard/></Provider></BrowserRouter>))
     const accordionHeader= screen.getByText("Continental(4)")
     fireEvent.click(accordionHeader)
   
     expect(screen.getAllByTestId("item").length).toBe(4)

    const addbtns= screen.getAllByRole("button", {name:"Add +"})
    fireEvent.click(addbtns[0])
    const cartText= screen.getByText("Cart 1 items")
    expect(cartText).toBeInTheDocument()

})