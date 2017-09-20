import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Portfolio from './Portfolio';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      website: '',
      githubProfile: '',
      publicRepos: '',
      avatarUrl: '',
      bio: ''
    }
  }


  componentDidMount() {
    fetch('https://api.github.com/users/jgordy')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({name: data.name, website: data.blog, githubProfile: data.html_url, publicRepos: data.public_repos, avatarUrl: data.avatar_url, bio: data.bio });
      console.log(data);
    })
  }

  render() {
    return(
      <div className='home'>
        <div className='home_container'>
          <div className="pic">
            <img src={this.state.avatarUrl}/>
          </div>
          <div className="info">
            <h3>Name: <span>{this.state.name}</span></h3>
            <h3>Website: <span>{this.state.website}</span></h3>
            <h3>Profile: <span>{this.state.githubProfile}</span></h3>
            <h3>Public Repos: <span>{this.state.publicRepos}</span></h3>
            <Link to='/Portfolio'>See my latest repositories</Link>
          </div>
          <div className="bio">
            <h4>{this.state.bio}</h4>
          </div>
        </div>
      </div>
    );
  }
}
