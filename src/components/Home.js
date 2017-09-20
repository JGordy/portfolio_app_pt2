import React, { Component } from 'react';

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
        <div className="pic">
          <img src={this.state.avatarUrl}/>
        </div>
        <div className="info">
          <h3>{this.state.name}</h3>
          <h3>{this.state.website}</h3>
          <h3>{this.state.githubProfile}</h3>
          <h3>Public Repos: {this.state.publicRepos}</h3>
        </div>
        <div>
          <h4>{this.state.bio}</h4>
        </div>
      </div>
    );
  }
}
