import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class About extends Component {
  render() {
    return(
      <div className='about'>
        <h2 className="event_heading">Some of my recent non work / school related events</h2>
        <div className="event_container">
          <img className="fitz" src={require("../images/Fitz.jpg")}/>
          <div className="event_info">
            <h3>Meet Fitz</h3>
            <h5 className="date">9/17/17</h5>
            <p>This is the new addition to the family. My wife and I rescued him from a shelter in Alpharetta. Fitz is a two month old hound/pointer mix who loves sticks larger than he is, loves to cuddle on the couch, and take walks with us by the river. He is especially quiet for a hound, which are known for thier howling.</p>
          </div>
        </div>
        <div className="event_reverse">
          <div className="event_info">
            <h3>Apple picking</h3>
            <h5 className="date">8/27/17</h5>
            <p>Road trips are always great! This one was to north Georgia at Merciers Orchard. After picking our own apples in the orchard we settled  down for a fantastic lunch, and topped it off with a fudge covered granny smith apple. Yum!</p>
          </div>
            <img className="apples" src={require("../images/apple_picking.jpg")}/>

        </div>
        <div className="event_container">
          <img className="balloon" src={require("../images/hot_air_balloon.jpg")}/>
          <div className="event_info">
            <h3>Hot Air Balloon ride</h3>
            <h5 className="date">9/1/17</h5>
            <p>First hot air balloon ride for both my wife and I at Calloway Gardens. We only got about 40ft in the air, but the views were still great.</p>
          </div>
        </div>
        <div className="event_reverse">
          <div className="event_info">
            <h3>Watching a movie</h3>
            <h5 className="date">8/26/17</h5>
            <p>This was a fun night at campus. A movie scene from Ant Man 2 was being filmed on the bottom floor of my school building. Sadly, I didn't see Paul Rudd or Evangeline Lily. :(</p>
          </div>
          <img className="movie" src={require("../images/movie_set.jpg")}/>
        </div>
      </div>
    );
  }
}
