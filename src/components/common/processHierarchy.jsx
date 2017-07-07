import React from 'react';
import {Row} from 'react-bootstrap';

class TaskProcessHierarchy extends React.Component {
	render() {
		return(
		<div className="rPageSec">
			<div className="rPageHeading">
				Process Hierarchy
			</div>
			<div>
				<img src="views/images/breakFix-diagram.png" title="Process Hierarchy" />
			</div>
		</div>
		);
	}
}

export default TaskProcessHierarchy;
