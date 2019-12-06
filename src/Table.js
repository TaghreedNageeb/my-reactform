import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table" className="mytable">
        <table className='child'>
          <tbody>
            <tr>
                
              <th>Name</th>
              <th>Age</th>
              <th>Message</th>
            </tr>
            {items.map(item => {
              return (
                <tr id={item.id} className='mytable'>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.message}</td>
                  <td><button value={item.id} onClick={this.props.delete} className='mybtn'>delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;