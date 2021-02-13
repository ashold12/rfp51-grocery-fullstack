import React from "react";

class Form extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      'item': '',
      'count': '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

render() {
  return (
    <form>
      <label> Item:
        <input name="item" value= {this.state.item} onChange ={this.handleChange}/>
      </label>
      <label> Count:
        <input name="count" value={this.state.count} onChange = {this.handleChange}/>
      </label>
      <button>Add Grocery</button>
    </form>
  );
  }
}

export default Form