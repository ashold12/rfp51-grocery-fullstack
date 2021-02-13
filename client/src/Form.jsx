import React from "react";

class Form extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      'item': '',
      'count': '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  resetFields(event){
    event.preventDefault();
    this.setState({
      'item': '',
      'count': ''
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
      <button onClick = {(e) => {e.preventDefault(); this.resetFields(e)}}>Add Grocery</button>
    </form>
  );
  }
}

export default Form