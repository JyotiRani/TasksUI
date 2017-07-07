import React from 'react';
import {Row,Col,PageHeader,Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NewTaskHeading extends React.Component {
   render() {
      return (
		<Row>
			<Col md={7} sm={7}>
				<PageHeader bsClass="" className="sPageHeading1 margin-b-10">Edit Task</PageHeader>
			</Col>
			<Col md={5} sm={5} className="hidden-xs">
			  <div className="status myStatus margin-b-10">
				<Nav bsClass="">
					<LinkContainer title="Save" to="/"><NavItem eventKey={1}><span className="sAction bgBtn15 save"></span></NavItem></LinkContainer>
					<LinkContainer title="Close" to="/"><NavItem eventKey={2}><span className="sAction bgBtn17 bclose"></span></NavItem></LinkContainer>
				</Nav>
			  </div>			
			  <div className="status myStatusGap border-r margin-b-10 margin-r-10 padding-r-10">
				<Nav bsClass="">
					<NavItem title="Input Variables" eventKey={1}><span className="sAction bgBtn11 invar"></span></NavItem>
					<NavItem title="Output Variables" eventKey={2}><span className="sAction bgBtn14 outvar"></span></NavItem>
					<NavItem title="Activity Log" eventKey={3}><span className="sAction bgBtn9 actLog"></span></NavItem>
					<NavItem title="Relationships" eventKey={4}><span className="sAction bgBtn10 relaShip"></span></NavItem>
					<NavItem title="Audit" eventKey={5}><span className="sAction bgBtn16 taskAudit"></span></NavItem>
				</Nav>
			  </div>			  
			</Col>
		</Row>
      );
   }
}


export default NewTaskHeading;

