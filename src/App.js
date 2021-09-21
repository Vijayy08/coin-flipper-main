import React,{Component} from 'react'
import Coin from './components/coin'
import "./App.css"

class App extends Component {
  state = { 
    face:0,
    count:0,
    countHead:0,
    countTail:0
   }

   toss = () =>{
     let countTail=this.state.countTail
     let countHead=this.state.countHead
     
     const face=Math.floor(Math.random() * 2)
     if(face===0){
       countTail+= 1
       alert("It is Tails!")
     }
     else{
       countHead+=1
       alert("It is Heads!")
     }
     this.setState({
       face,
       count: this.state.count + 1,
       countTail,
       countHead
     })
   }

  render() { 
    return ( 
      <div className="wrapper">
        <Coin face={this.state.face}/>
        <div className="contain">
          <button className="toss-btn" onClick={this.toss}>TOSS</button>
          <h1 className="text"> Out of {this.state.count} tosses, {this.state.countHead} were head
           and {this.state.countTail} were tails.</h1>
        </div>
      </div>
     );
  }
}
 
export default App