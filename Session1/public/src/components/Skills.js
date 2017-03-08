import React from 'react'
import Skill from './Skill'

const Skills = () => {
	return (
		<div className="skills">
			<h1>Skills</h1>
			<Skill skill="html" skillPercent = "70%"/>
			<Skill skill="css" skillPercent = "70%"/>
			<Skill skill="javascript" skillPercent="40%" />
			<Skill skill="jQuery" skillPercent="60%" />
		</div>
	)
}

export default Skills