const parent =React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child"},React.createElement('h1',{id:"headi"},"i am h1 tag")),React.createElement('div',{id:"child"},React.createElement('h1',{id:"headi"},"i am h1 tag"))])
const heading= React.createElement("h1",{id:"heading"},"hello")
console.log({parent})
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)