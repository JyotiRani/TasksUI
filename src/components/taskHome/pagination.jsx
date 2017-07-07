import React from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,FormGroup,FormControl,ControlLabel,Button,Table,Pagination} from 'react-bootstrap';
import {filterTasksByMultipleValues} from '../../actions/index';
import {connect} from 'react-redux';

class PaginationComp extends React.Component {
	constructor(props){
	super(props);
			this.state = {
			numOfRecords: 10,
			pageNum: 1
		};
		
		this.handlePaginationClick = this.handlePaginationClick.bind(this);
	};
	
	handleChange(event) {		
		this.setState({numOfRecords: event.target.value})
		this.props.filterTasksByMultipleValues('?filter[limit]=' + event.target.value);
	}
	
	handlePaginationClick(pageNumber) {		
		var skipCount = this.state.numOfRecords * (pageNumber - 1);
		var filterStr = '?filter[limit]=' + this.state.numOfRecords + '&filter[skip]=' + skipCount;
		this.props.filterTasksByMultipleValues(filterStr);
	}
	
   render() {
      return (
				<Row className="myPagin margin-t-10">
					<Col md={3}>
						<Row>
						  <Col className="padding-r-0 padding-t-5" componentClass={ControlLabel} sm={4}>Show</Col>
						  <Col sm={4} className="padding-0"><FormControl className="padding-5" componentClass="select" onChange={this.handleChange.bind(this)}>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
							<option value="100">100</option>
						  </FormControl></Col>
						</Row>
					</Col>
					<Col md={9}>
						<div className="text-r">
							<Pagination className="margin-0" prev next boundaryLinks items={10} maxButtons={3} onSelect={(pageNumber) => this.handlePaginationClick(pageNumber)}  />
						</div>
					</Col>
				</Row>						
		);
	}
}

export default connect(null,{filterTasksByMultipleValues})(PaginationComp);
