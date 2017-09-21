import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul>
          <li>
            <a href="mailto:jgordy2424@gmail.com">Email: <span>jgordy2424@gmail.com</span></a>
          </li>
          <li>
            <a href="https://www.facebook.com/JaGordy24">Facebook: <span>Joe Gordy</span></a>
          </li>
          <li>
            <a href="https://github.com/JGordy">Github: <span>jgordy</span></a>
          </li>
          <li>
            <a href="tel:1-334-718-6808">Phone: <span>1-334-718-6808</span></a>
          </li>
        </ul>
      </div>
    )
  }
}
