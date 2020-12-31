import logo from './logo.svg';
import { Component } from 'react';

import './App.css';


import Blogitem from './BlogCard'; //functional component
import { isArrayEmpty } from './Utils'; // Here we have to use the same exact name or alternate is 

// import {isArrayEmpty as isEmpty} from './Utils';



/*
  components - stateful(class based,these are keeping track of the changing data via state object) and stateless(function based , print out what is given to them via props)
  state is similar to the props ,but state is private and fully controlled by the component
*/





class App extends Component {
  state ={
    showblocks:true
  }
  //this component has render method in place of the return which is helpful as,render is called every time there is component updated (it is rendered(render method called) by updating the state or adding the new state using setState only) or component created

  blogArr = [
    {
      blogHeading:"Heading 1",
      id:1,
      para:'loro dolar espum loro dolar espum loro dolar espum loro dolar espum '
    },
    {
      id:2,
      blogHeading:"Heading 2",
      para:'body of the second card'
    },
    {
      id:3,
      blogHeading:"Heading 3",
      para:'body of the third card'
    }
  ]


   blogCard = isArrayEmpty(this.blogArr)?this.blogArr.map((item, pos) => {

  return(
  
      <Blogitem key={pos} text={item.blogHeading} description={item.para} id={item.id}/>
  
  
    );

    
  }): console.log('Array is empty')

  //showblocks = true;
  //above type of the code will not re-render for re-render we have to use the state 

  hideFunction = () => {
    //this.showblocks= false;

    // let updatedState = !this.state.showblocks;
    // this.setState({showblocks: updatedState}) 
    
    //this setState() method is Asynchrounus method
    //setState() can accept the anoynumous function as an parameter which contains the currentState,current Props

    this.setState((prevState,prevProps) => {
      return {showblocks: !prevState.showblocks}
    })

    console.log(this.state.showblocks)
  }
  

render(){
  return(
    <div className="App">
      <button onClick={this.hideFunction}>{this.state.showblocks ? "Hide blocks" : "Show blocks"}</button>
      {this.state.showblocks?this.blogCard:null}
   </div>
  );
  }

}

export default App;
