import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/jgordy/repos?sort=created')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({repos: data});
      console.log(data);
    })
  }

  render() {
    let repoData = this.state.repos.map((repo)=> {
      return <div key={repo.id} className="singleRepo">
              <h2 className="repo_name">{repo.name}</h2>
              <h5 className="language">Language: {repo.language}<span>Last Updated: {repo.updated_at}</span></h5>
              <h5 className="button"><a href={repo.html_url}>Check it out</a></h5>
             </div>
    })
    return(
      <div className='portfolio'>
        {repoData}
      </div>
    );
  }
}
