import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
  render() {
    return(
      <div className='about'>
        <h2>My non work / school related recent events</h2>
        <div className="event_container">
          <img className="fitz" src={require("../images/Fitz.jpg")}/>
          <div className="event_info">
            <h3>Meet Fitz</h3>
            <p>This is the new addition to the family. My wife and I rescued him from a shelter in Alpharetta. Fitz is a two month old hound/pointer mix who loves sticks larger than he is, loves to cuddle on the couch, and take walks with us by the river. He is especially quiet for a hound, which are known for thier howling.</p>
          </div>
        </div>
        <div className="event_reverse">
          <div className="event_info">
            <h3>Apple picking</h3>
            <p></p>
          </div>
            <img className="apples" src={require("../images/apple_picking.jpg")}/>

        </div>
        <div className="event_container">
          <img className="balloon" src={require("../images/hot_air_balloon.jpg")}/>
          <div className="event_info">
            <h3>Hot Air Balloon ride</h3>
            <p></p>
          </div>
        </div>
        <div className="event_reverse">
          <div className="event_info">
            <h3>Watching a movie</h3>
            <p></p>
          </div>
          <img className="movie" src={require("../images/movie_set.jpg")}/>
        </div>
      </div>
    );
  }
}
