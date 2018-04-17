import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'//connect is a function that we place before our app see below...(courieing)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imputElement: '',
    }
  }
  handleClick = () =>{//bypasses binding syntax with arrow function
    this.props.dispatch(
      {type: 'BUTTON_ONE',}//should always have key of type 
    )
  }
  handleOtherClick = () =>{
    this.props.dispatch(
      {type: 'BUTTON_TWO'}
    )
  }
  // handleAddStar = () =>{
  //   this.props.dispatch(
  //     {
  //       type: 'ADD_STAR',
  //       payload: {//this is naming convention to call the data you are sending "payload"
  //         name: 'Hadar',
  //         diameter: 50
  //       }
  //     }
  //   )
  // }
  handleAddElement = () =>{
    this.props.dispatch(
      {
        type: 'ADD_ELEMENT',
        payload: this.state.imputElement
      }
    )
  }
  handleChange = (event) =>{
    this.setState({
      imputElement: event.target.value
    })
  }
  handleClear = () =>{
    this.props.dispatch(
      {
        type: 'CLEAR_ELEMENT_LIST'
      }
    )
  }
  render() {

    return (
      <div className="App">
      {/* SOHW REDUX STATE ON DOM */}
      <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <button onClick={this.handleClick}>Button 1</button>
        <button onClick={this.handleOtherClick}>Button 2</button>
        <button onClick={this.handleAddElement}>Add Element</button>
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleClear}>Clear Element</button>

      </div>
    );
  }
}
//Put redux state on our props
const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

// ability to dispatch
export default connect(mapReduxStateToProps)(App);//courieing connect returns a function and passes App into that function.
