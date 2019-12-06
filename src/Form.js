import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="Name">
          Name <br/> 
          <input id="name" value={this.props.name} type="text" name="name" onChange={this.props.handleInputChange} />
            <br/>
            <br/>
          </label>
          <label for="Age">
          Age <br/> 
          <input id="age" value={this.props.age} type="number" name="age" onChange={this.props.handleInputChange} />
          </label>
          <br/>
          <br/>
          <label for="Message">
          Message <br/>
          <input id="message" value={this.props.message} type="text" name="message" onChange={this.props.handleInputChange} />
          </label>
          <br/>
          <br/>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;