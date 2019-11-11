import React from 'react'

class Home extends React.Component {
    exampleMethod(){
        console.log("JS is running")
    }
    render(){
        return(
            <div>
                <h1>
                    My Home Page
                </h1>
                <p>Some Content</p>
                <button onClick={()=>this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default Home;