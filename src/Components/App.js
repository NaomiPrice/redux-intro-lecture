import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import SubmitButton from '../Components/Elements/SubmitButton'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    constrastThreshold: 3,
    tonalOffset: .2
  }
})

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
  handleClick = ()=>{
    this.props.dispatch(
      {type: 'ADD_ELEMENT', payload: this.state.somethingToSend}
      )
  }

  render(){
    return(
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <p>Hello from App.js</p>
        <button onClick ={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button 1</button>
        <button onClick ={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button 2</button>
        <input onChange={this.handleOnChange}></input>
        <SubmitButton copy="Add Element" handleClick={this.handleClick}/>
      <p>{JSON.stringify(this.props.reduxState)}</p>
      </div>
      </MuiThemeProvider>
    );
  }    
}
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})  
export default connect(putReduxStateOnProps)(App);
