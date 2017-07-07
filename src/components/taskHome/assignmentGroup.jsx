import React from 'react';
import {ListGroup,ListGroupItem,Media,Image} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Windows Team</div>
			<Media className="myMedia">
				<Media.Left>
					<Image src="views/images/assignmentGroup.jpg" alt="Assignment Group" />
				</Media.Left>
				<Media.Body>
					<ListGroup bsClass="" className="ListDetails">
						<ListGroupItem bsClass=""><span className="labSpan">Company-</span>Oracle Inventory Pvt. Ltd.</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Department-</span>Oracle</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">DL-</span>123</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Lead Name-</span>Dheeraj Saraswat</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Lead Email-</span>dheeraj_s@oracle.com</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Lead Phone Number-</span>011-9811554311</ListGroupItem>
					</ListGroup>				
				</Media.Body>
			</Media>			

		</div>
		);
	}
}

export default AssignmentGroup;