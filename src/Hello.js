import React from 'react';
import { Button } from 'react-bootstrap';
class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: "Lanchenba", date: new Date()};
        this.handleClick = this.handleClick.bind(this);
        console.log('I am inside constructor')
    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return {};
    }
    componentDidMount() {
      // this.timerID = setInterval(
      //   () => this.tick(),
      //   1000
      // )
        // console.log('componentDidMount')
    }
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
    // tick() {
    //   this.setState({
    //     date:new Date()
    //   })
    // }
    handleClick(){
      this.setState({
        date:new Date()
      })
      console.log('click happened')
    }
    render() {
      console.log("Render")
      return (
        <div>
             <h2>My Name  is {this.state.name}.</h2>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <Button onClick={this.handleClick} variant="secondary">Update Time</Button>
        </div>
      );
    }
  }
export default Hello;