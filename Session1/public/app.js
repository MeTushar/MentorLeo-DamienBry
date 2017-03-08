import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/components/Root.js'


// Stylesheets
import './src/css/app.scss';

const Main = () => {
	return (
		<div>
			<App />
		</div>
	)
}

ReactDOM.render(<Main />, document.getElementById("root"))