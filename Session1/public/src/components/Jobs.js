import React from 'react'
import $ from 'jquery'

import Job from './Job'

class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      posts: []
    }
	}

  componentDidMount() {
    $.ajax({
       url: 'https://jobs.github.com/positions.json?callback=jsonp&description=html+css',
       type: "GET",
       dataType: 'jsonp',
       success: function(data) {
         this.setState({posts: data})
       }.bind(this)
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