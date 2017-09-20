import React, { Component } from 'react';

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
              <h3>Project: {repo.name}</h3>
              <h5><a href={repo.html_url}>Repo Url: {repo.html_url}</a></h5>

             </div>
    })
    return(
      <div className='portfolio'>
        {repoData}
      </div>
    );
  }
}
