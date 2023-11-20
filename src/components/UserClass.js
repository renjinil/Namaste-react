import React from "react";

class UserClass extends React.Component{
    constructor(props){

        super(props)
this.state={
  data:null
}

    }
    async componentDidMount(){
        const datajson= await fetch("https://api.github.com/users/renjinil")
        const dataj= await datajson.json();
        console.log({dataj})
        this.setState({
            data: dataj
        })

    }
    
    render(){

const {name,avatar_url,created_at}= this?.state?.data||{}
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>Name: {name}</h1>
                <h2>Location:{created_at}</h2>
            </div>
        )
    
    }
}
export default UserClass;