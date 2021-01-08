import React from 'react'
import Game from '../Game/Game'
import Details from '../Details/Details'
 

class Finish extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>Hello from Finish</h1>
                <Game/>
                <Details/>
            </div>
        )
    }
}

export default Finish 