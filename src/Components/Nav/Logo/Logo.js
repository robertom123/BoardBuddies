import React from 'react'

class Logo extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    
    render(){
        return(
            <div>
                <img src='./Images/logo.png' alt = "logo"/>
            </div>
        )
    }
}

export default Logo