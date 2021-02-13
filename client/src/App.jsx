import React from "react";
import List from './List.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [{item: 'potater', count: 2}, {item: 'banan', count:4}],
      formItem: '',
      formQuantity: '',
    }
  }

  render () {
    return(
      <div>
        <img src="grocery-bags.png"/>
        <h1> I heard you guys like Groceries </h1>
        <Form></Form>
        <List items = {this.state.list}></List>
      </div>
    )
  }
}

export default App



