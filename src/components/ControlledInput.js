import React from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }
  <input type="text" id="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
<input type="text" id="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
 
  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    )
  }
}