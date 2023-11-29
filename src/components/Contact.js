const Contact =()=>{
    return (
        <div>
            <h1 className="font-bold p-4 m-4">Contact us</h1>
            <form>
                <input type="text" placeholder="username" className="border border-black p-2 m-2"/>
                <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
                <button className="border border-black bg-gray-100 rounded-md p-2 m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact