import React from 'react'
import classNames from 'classnames'
class Home extends React.Component {
    exampleMethod(){
        console.log("JS is running")
    }
    render(){
        return(
            <div>
                <h1 className='component'>
                    My Home Page
                </h1>
                <p>Some Content</p>
                <button onClick={()=>this.exampleMethod()}>Console log some text</button>
            </div>
        )
    }
}

export default Home;