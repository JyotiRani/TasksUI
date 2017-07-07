import React from 'react';
import {Link} from 'react-router';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';

import SearchFilter from './../common/searchFilter.jsx';

class LeftSectionPage extends React.Component {
	constructor(props){
	super(props);
		this.state = {
			activePage:1
		};
	};
   render() {
      return (
		<div>
			<div className="border-b padding-b-10 margin-0">
				<Row>
					<Col md={7}>
						<SearchFilter />
					</Col>
					<Col md={5}>
						<div className="text-r myFields">
							<ControlLabel className="display-inline">Sort</ControlLabel>
							<FormControl className="myControl mySort" componentClass="select">
								<option value="10">Task ID</option>
								<option value="25">Description</option>
								<option value="50">Sequence</option>
								<option value="50">Assignment Group</option>
							</FormControl>	
						</div>
					</Col>
				</Row>
			</div>
			<Row className="myPagin margin-t-10">
				<Col md={3}>
					<Row>
					  <Col className="padding-r-0 padding-t-5" componentClass={ControlLabel} sm={4}>Show</Col>
					  <Col sm={4} className="padding-0"><FormControl className="padding-5" componentClass="select">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					  </FormControl></Col>
					</Row>
				</Col>
				<Col md={9}>
					<div className="text-r">
						<Pagination className="margin-0" prev next boundaryLinks items={10} maxButtons={3} activePage={this.state.activePage}  />
					</div>
				</Col>
			</Row>			
			
			<div className="myTableData margin-t-10">
				<Table responsive striped bordered className="margin-0">
					<thead>
					  <tr>
						<th width="10%">Task ID</th>
						<th width="5%">Seq.</th>
						<th width="23%">Assignment Group</th>
						<th width="30%">Start date</th>
						<th width="27%">Target date</th>
						<th width="5%">Action</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td><Link to="/taskView">T0001 <i className="fa fa-info-circle" ></i></Link></td>
						<td>1</td>
						<td><Link to="/assignmentGroup">Windows Team <i className="fa fa-info-circle" ></i></Link></td>
						<td>4/22/2017 10:30 AM</td>
						<td>4/28/2017 11:30 PM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0002</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0003</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0004</td>
						<td>1</td>
						<td>Windows Team</td>
						<td>4/22/2017 10:30 AM</td>
						<td>4/28/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0005</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0006</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>		
					  <tr>
						<td>T0007</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0008</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T0009</td>
						<td>1</td>
						<td>Windows Team</td>
						<td>4/22/2017 10:30 AM</td>
						<td>4/28/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>
					  <tr>
						<td>T00010</td>
						<td>3</td>
						<td>Storage Team</td>
						<td>4/24/2017 10:30 AM</td>
						<td>5/23/2017 10:30 AM</td>
						<td><div className="text-c f-size-14"><a title="Edit Task" href="#"><i className="fa fa fa-pencil"></i></a></div></td>
					  </tr>					  
					</tbody>
				  </Table>		
			</div>
			

			
		</div>
      );
   }
}

export default LeftSectionPage;