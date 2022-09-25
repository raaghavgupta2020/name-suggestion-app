// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import SeacrhBox from './Components/SearchBox/SeacrhBox';
import Results from './Components/Results/Results';

//this is how to use an npm dependency
const name = require('@rstacruz/startup-name-generator');
//this name will be returning array of various words when anything is inputted in it 

class App extends React.Component{
  //its a class , not a function .Hence we cannot directly return html from here 
  state = {
    //this is an obejct in javascript , object is always a key value pair 
    headerText : 'Name Suggestion App',  
    //lets ssay we want to pass this property as a prop in the Header file 
    headerExpanded : true,
    suggestedNames : [],//created an empty array as we are getting an array of strings 
  }

  handleInputChange = (keyword)=>{
    // console.log(keyword);
    this.setState({
      headerExpanded : !keyword.length,
      suggestedNames : name(keyword),
    }) //state changes to false
    // console.log(name('raghav'))
    
    
  }

  render(){
    return (
      <div>
        <Header headerText= {this.state.headerText} headerExpanded={this.state.headerExpanded}/>
        {/* <h1>{this.state.headerText}</h1> */}
        <SeacrhBox handleInputChange = {this.handleInputChange}/>
        <Results suggestedNames = {this.state.suggestedNames}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       Hey There !
//     </div>
//   );
// }

export default App;
