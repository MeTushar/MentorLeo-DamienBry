import React from 'react'
import fetchJsonp from 'fetch-jsonp'

import Job from './Job'

class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      posts: []
    }
	}

  componentDidMount() {
    fetchJsonp('https://jobs.github.com/positions.json?callback=jsonp&description=html+css',
      {mode: 'no-cors'}
      )
      .then(response => response.json())
      .then(responseDetails => {
        this.setState({posts: responseDetails})
      })
      .catch(error => {
        console.log('Error fetching & parsing data', error);
      });
  }

  render() {
  	return (
  		<div className="job-section">
				<h1>Job Offers</h1>
        <div></div>
				<div id="jobList" className="jobList">
					<Job posts={this.state.posts}/>
				</div>
			</div>
  	)
  }
}

export default Jobs