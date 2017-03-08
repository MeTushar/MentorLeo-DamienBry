import React from 'react';

const Skill = ({skill, skillPercent}) => {
	return (
		<div className="skill">
			<p>{skill}</p>
			<div className="skill-bar">
				<div className={"skill-known skill-" + skill}></div>
				<span>{skillPercent}</span>
			</div>
		</div>
	)
}

export default Skill