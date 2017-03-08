import React from 'react'

const Job = ({posts}) => {
	const jobList = posts.map(function(post, key){
		if(post.title.indexOf('Senior') == -1 && post.title.indexOf('Lead') == -1) {
			return (
				<li key={key}>
					<span className='company-name'>{post.company}</span> - <span className='job-title'>{post.title}</span>
				</li>
			)
		}
	});
	return (
		<ul>
			{jobList}
		</ul>
	)
}

export default Job