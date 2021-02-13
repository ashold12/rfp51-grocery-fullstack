import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [{item: 'potater', count: 2}, {item: 'banan', count:4}]
    }
  }

  render () {
    return(
      <div>
        <img src="grocery-bags.png"/>
        <h1> hi guys its me </h1>
      </div>
    )
  }
}

export default App



