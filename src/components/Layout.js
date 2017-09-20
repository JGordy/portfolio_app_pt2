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
      margin: '5px 8px',
      padding: '5px 0px'
    }
    return (
      <div className="App">
        <header style={headerStyle}>
          <h1>Joe Gordy</h1>
          <nav style={navStyle}>
            <NavLink style={navStyle} to='/'>Home</NavLink>
            <NavLink style={navStyle} to='/About'>About</NavLink>
            <NavLink style={navStyle} to='/Portfolio'>Portfolio</NavLink>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}
