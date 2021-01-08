import React from 'react'
import Logo from '../Components/Nav/Logo/Logo'
import FinalForm from '../Components/Form/FinalForm/FinalForm'
import Finish from '../Components/Results/Finsh/Finish'

class App extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <div>
        <Logo/>
      </div>
      )
  }
}

export default App;
