// import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import SeacrhBox from './Components/SearchBox/SeacrhBox';

class App extends React.Component{
  //its a class , not a function .Hence we cannot directly return html from here 
  state = {
    //this is an obejct in javascript , object is always a key value pair 
    headerText : 'Name Suggestion App',  
    //lets ssay we want to pass this property as a prop in the Header file 
    headerExpanded : true,
  }

  handleInputChange = (keyword)=>{
    // console.log(keyword);
    this.setState({headerExpanded : !keyword.length}) //state changes to false
  }

  render(){
    return (
      <div>
        <Header headerText= {this.state.headerText} headerExpanded={this.state.headerExpanded}/>
        {/* <h1>{this.state.headerText}</h1> */}
        <SeacrhBox handleInputChange = {this.handleInputChange}/>
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
