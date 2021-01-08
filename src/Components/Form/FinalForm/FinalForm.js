import React from 'react'
import Age from '../Age/Age/Age'
import Players from '../Nums/Player/Players'
import Choice from '../Skill/Choices/Choice'
import Time from '../Time/Length/Time'

class FinalForm extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        return(
            <div>
                <Age/>
                <Players/>
                <Choice/>
                <Time/>
            </div>
        )
    }
}

export default FinalForm 