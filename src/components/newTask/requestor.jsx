import React from 'react';
import {ListGroup,ListGroupItem,Media,Image} from 'react-bootstrap';

class AssignmentGroup extends React.Component{
	render(){
		return(
		<div className="rPageSec">
			<div className="rPageHeading">Amit Singh</div>
			<Media className="myMedia">
				<Media.Left>
					<Image src="views/images/amit-singh.png" alt="Assignment Group" />
				</Media.Left>
				<Media.Body>
					<ListGroup bsClass="" className="ListDetails">
						<ListGroupItem bsClass=""><span className="labSpan">Company-</span>Oracle Inventory Pvt. Ltd.</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Department-</span>Oracle</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Location-</span>Noida Sec-126</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Email-</span>amit.sig@hcl.com</ListGroupItem>
						<ListGroupItem bsClass=""><span className="labSpan">Phone Number-</span>011-9313119791</ListGroupItem>
					</ListGroup>				
				</Media.Body>
			</Media>			

		</div>
		);
	}
}

export default AssignmentGroup;