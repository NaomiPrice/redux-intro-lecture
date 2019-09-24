import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';



class App extends Component {

  state = {
    somethingToSend: ''
  }

  handleOnChange = (event)=>{
    console.log(event.target.value);
    this.setState({
      somethingToSend: event.target.value
    })
  }

  render(){
    return(
      <div className="App">
        <p>Hello from App.js</p>
        <button onClick ={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button 1</button>
        <button onClick ={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button 2</button>
        <input onChange={this.handleOnChange}></input>
        <button onClick ={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.somethingToSend})}>Add Element</button>
      </div>
    );
  }    
}
  
export default connect()(App);
