import {fireEvent, render, screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../Mocks/RestaurantListMockData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
  return Promise.resolve({
        json:  ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

const mockInternetConnection = (status) => {
    const events = {};
    jest.spyOn(window, 'addEventListener').mockImplementation((event, handle, options) => {
        // @ts-ignore
        events[event] = handle;
    });
    const goOffline = new window.Event(status);
    act(() => {
        window.dispatchEvent(goOffline);
    });
};
it("should load the boady component search button",async()=>{
    await act(()=> render(<BrowserRouter><Body/></BrowserRouter>))

    const searchButton = screen.getByRole("button",{name:"Search"})

    expect(searchButton).toBeInTheDocument()
   
})
it("should load the boady component load resaurant card",async()=>{
    await act(()=> render(<BrowserRouter><Body/></BrowserRouter>))

    const cardComponnet = screen.getAllByTestId("rescard");
    expect(cardComponnet?.length).toBe(9) 
})
it("should load the boady component load resaurant card after search",async()=>{
    await act(()=> render(<BrowserRouter><Body/></BrowserRouter>))
    const inputName= screen.getByTestId("input")
    fireEvent.change(inputName,{target:{value:"vani"}})
    const searchButton = screen.getByRole("button",{name:"Search"})
    fireEvent.click(searchButton)
    const cardComponnet = screen.getAllByTestId("rescard");
    expect(cardComponnet?.length).toBe(1) 
})
it("should load the boady component load tp rated restaurant",async()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>))
    
    const cardComponnet = screen.getAllByTestId("rescard");
    expect(cardComponnet?.length).toBe(9) 
    const topratedbtn = screen.getByRole("button",{name:"Top rated resturants"})
   
    fireEvent.click(topratedbtn)
    const cardComponnetaft= screen.getAllByTestId("rescard");
    expect(cardComponnetaft?.length).toBe(4) 
})
it("should load the boady component load tp rated restaurant",async()=>{
    await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>))
const onlineStatus = jest.fn(false)

mockInternetConnection('offline');
       
    const errorText = screen.getByText('System not co-operating, Please check your internet connection.')
    expect(errorText).toBeInTheDocument()
})