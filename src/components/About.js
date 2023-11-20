
import { UserContext } from "../utils/UserContext";
import UserClass from "./UserClass";


const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h5>About section of this project</h5>
            <UserClass name="neeharika"/>
            <div>LoggedIn
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        </div>
    )
}

export default About;