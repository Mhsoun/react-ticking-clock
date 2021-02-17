import './App.css';
import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state= {
    date: new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(()=> this.setState({date: new Date()}), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render(){
    return(
      <>
      <h1>Simply time now </h1>
    <h1>Time now {this.state.date.toLocaleTimeString()}</h1>
    </>
    )}
}



function App() {
  return (
    <div className="App">
      <Clock />      
    </div>
  );
}

export default App;
