import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    let headerStyle = {
      backgroundColor: 'black',
      color: 'white'
    }

    let navStyle = {
      textDecoration: 'none',
      textTransform: 'uppercase',
      margin: '0px 8px',
      padding: '5px 0px'
    }
    return (
      <div className="App">
        <header style={headerStyle}>
          <h1>Joe Gordy</h1>
        </header>
        <nav>
        <NavLink style={navStyle} to='/'>Home</NavLink>
        <NavLink style={navStyle} to='/About'>About</NavLink>
        <NavLink style={navStyle} to='/Portfolio'>Portfolio</NavLink>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
