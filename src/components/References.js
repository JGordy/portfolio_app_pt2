import React, { Component } from 'react';

export default class References extends Component {
  render() {
    return (
      <div className="reference_container">
        <div className="single_reference">
          <h2 className="reference_name">Groot</h2>
          <h5 className="phone">Phone: I am Groot</h5>
          <p>I am Groot. I am Groot, I am Groot, <em>I am Groooooot</em>.</p>
        </div>
        <div className="single_reference">
          <h2 className="reference_name">Clark Kent</h2>
          <h5 className="phone">Phone: 404-555-6277</h5>
          <p>This is a job for Superman.</p>
        </div>
        <div className="single_reference">
          <h2 className="reference_name">Wesley</h2>
          <h5 className="phone">Phone: 404-555-3375</h5>
          <p>As you wish.</p>
        </div>
        <div className="single_reference">
          <h2 className="reference_name">Tom Bombadil</h2>
          <h5 className="phone">Phone: 404-555-5900</h5>
          <p>Old Tom Bombadil is a merry fellow, Bright blue his jacket is, and his boots are yellow. None has ever caught him yet, for Tom, he is the master: His songs are stronger songs, and his feet are faster.</p>
        </div>
      </div>
    );
  }
}
