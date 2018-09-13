import React from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
  <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
<input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />

<input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
<input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
handleSubmit = event => {
  event.preventDefault()
  const firstName = event.target.children[0].value
  const lasstName = event.target.children[1].value
  this.sendFormDataSomewhere({ firstName, lastName })
}
 
  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}
// src/components/ControlledInput.js
import React from 'react';
 
class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }
 
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
 
export default ControlledInput;