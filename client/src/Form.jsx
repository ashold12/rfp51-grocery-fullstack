import React from "react";

class Form extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      item: '',
      count: '',
    }
  }

  setStateString(e, state) {
    this.setState({
      state: e.target.value
    })
  }

render() {
  return (
    <form>
      <label> Item:
        <input name="item" value= {this.state.item}/>
      </label>
      <label> Count:
        <input name="count" value={this.state.count}/>
      </label>
      <button>Add Grocery</button>
    </form>
  );
  }
}

export default Form