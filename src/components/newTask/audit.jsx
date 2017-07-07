import React from 'react';
import {Table} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Audit</div>
				<Table responsive striped bordered>
					<thead>
					  <tr>
						<th width="20%">Field Name</th>
						<th width="20%">From Value</th>
						<th width="20%">To Value</th>
						<th width="20%">Date & Time</th>
						<th width="20%">Modified By</th>						
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Status</td>
						<td>Assigned</td>
						<td>In-Progress</td>
						<td>4/24/2017 10:30 AM</td>
						<td>Ankit</td>						
						</tr>
					</tbody>
				</Table>			
		</div>
		);
	}
}

export default AssignmentGroup;