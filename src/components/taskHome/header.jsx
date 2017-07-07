import React from 'react';
import {Row,Col,PageHeader,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NewTaskHeading extends React.Component {
   render() {
      return (
		<Row>
			<Col md={7} sm={7}>
				<PageHeader bsClass="" className="sPageHeading1 margin-b-10">Task List</PageHeader>
			</Col>
			<Col md={5} sm={5} className="hidden-xs">

				<div className="status myStatusGap margin-b-10">
					<Nav bsClass="">
						<LinkContainer to="/newTask" title="New Task"><NavItem eventKey={1}><span className="sAction bgBtn11 crtArticle"></span></NavItem></LinkContainer>
					</Nav>
				</div>			  
			</Col>
		</Row>
      );
   }
}


export default NewTaskHeading;

