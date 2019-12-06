import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      name: '',
      age: '',
      message: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      message: this.state.message
    });
    let newid= this.state.id+1
    this.setState({
      items,
      id: newid,
      name: '',
      age: '',
      message: ''

});
console.log(items)
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

deleteRow=(event)=>{
console.log(event.target.value)
let rowId= event.target.value;
console.log(rowId)
let rowDe=document.getElementById(`${rowId}`);
console.log(rowDe)
rowDe.innerHTML=''
}

  render() {
    return (
      <div>
        
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          name={ this.state.name }
          age={ this.state.age }
          message={ this.state.message } />
          <Table items={ this.state.items } delete={this.deleteRow}/>
          
      </div>
    );
  }
}

export default App;