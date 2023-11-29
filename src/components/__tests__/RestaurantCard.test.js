import { render, screen } from "@testing-library/react"
import ResturantCards from "../ResturantCards"
import MOCK_DATA from "../Mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"
import {withPromotioCard} from "../ResturantCards"

it("should render restaurantCard component",()=>{
    render(<ResturantCards resData={MOCK_DATA}/>)
    const cardName = screen.getByText("Spices Cafeteria");
    expect(cardName).toBeInTheDocument()
})

it("should render restaurantCard component with promotedlabel",()=>{
   
    const ConditionalComponent = withPromotioCard(ResturantCards);
    render(<ConditionalComponent resData={MOCK_DATA}/>)
    

    const withPromoton = screen.getByText("Promoted")
    expect(withPromoton).toBeInTheDocument()
    
})