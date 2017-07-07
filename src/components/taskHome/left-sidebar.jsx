import React from 'react';
import {Link} from 'react-router-dom';
import {Nav,NavItem,OverlayTrigger,Popover,ListGroup,ListGroupItem,FormGroup,Checkbox, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/index';
import {bindActionCreators} from 'redux';
import Companies from './companies.jsx';
import TaskStatuses from './taskStatuses.jsx';

class LeftSidebarMenulist extends React.Component {
	constructor(props) {
		super(props);
		
		var groups = [{"fieldName": "Amazon", "fieldVal": 1}, {"fieldName": "supplier", "fieldVal": 2}];
		var statusList = [{"fieldName": "Amazon", "fieldVal": 1}, {"fieldName": "supplier", "fieldVal": 2}];
		
		this.state ={
			searchParams: [],
			isChecked: false,
			popoverWorkItemsClick:(
			  <Popover id="popoverWorkItems" title="Company">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all">All</Checkbox></ListGroupItem>
					<ListGroupItem bsClass=""><Checkbox value="1">Grenzen</Checkbox></ListGroupItem>
					<ListGroupItem bsClass=""><Checkbox value="2">HCL</Checkbox></ListGroupItem>
				</ListGroup>
			  </Popover>
			),
			popoverGroupsClick:(
			  <Popover id="popoverGroups" title="Assignment Groups">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all">All</Checkbox></ListGroupItem>
					{groups.map((item, index)=> 
						<ListGroupItem bsClass=""><Checkbox value={item.fieldVal} >{item.fieldName}</Checkbox></ListGroupItem>
					)}
					
				</ListGroup>
			  </Popover>
			),
			popoverStatusClick:(
			  <Popover id="popoverStatus" title="Status">
				<ListGroup bsClass="">				
					<ListGroupItem bsClass=""><Checkbox defaultChecked value="all">All</Checkbox></ListGroupItem>
					{statusList.map((item, index)=> 
						<ListGroupItem bsClass=""><Checkbox value={item.fieldVal} >{item.fieldName}</Checkbox></ListGroupItem>
					)}
					
				</ListGroup>
			  </Popover>
			)
		};
		
	}
	checkIt(){
		this.setState({isChecked:!this.state.isChecked});
	}

	
   render() {  
      return (
		<div className="leftNav">
			<Nav bsClass="" className="leftMenu">
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.renderCompanyOverlay()}><NavItem href="#" eventKey={1} title="Company"><span className="bgBtn11 lSidebar mywork"></span></NavItem></OverlayTrigger>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.renderGroupsOverlay()}><NavItem disabled href="#" eventKey={2} title="Assignment Groups"><span className="bgBtn3 lSidebar mygroup"></span></NavItem></OverlayTrigger>
				<OverlayTrigger container={this} trigger="click" rootClose placement="right" overlay={this.renderStatusOverlay()}><NavItem href="#" eventKey={3} title="Status"><span className="bgBtn3 lSidebar status4"></span></NavItem></OverlayTrigger>
			</Nav>
		</div>
      );
   }
   
   fetchItemsList(itemName) {
		const tasksList = this.props.tasks;
		var items = [];
		for (var i in tasksList) {
			if(itemName == 'groups')
				var item = {"fieldName" : tasksList[i].assignedToGroup, "fieldVal": tasksList[i].assignedToGroupId}
			else if(itemName == 'status')	
				var item = {"fieldName" : tasksList[i].statusId, "fieldVal": tasksList[i].statusId}
			items.push(item);
		}
	
		return items;
   }
   
   renderCompanyOverlay() {
		var companies = [{"fieldName": "All", "fieldVal": ""},{"fieldName": "Grenzen", "fieldVal": 1}, {"fieldName": "HCL", "fieldVal": 2}];
		return(
			<Popover id="popoverCompany" title="Company">
				<Companies companies={companies}/>
			</Popover>
			);			
   }
   
   renderGroupsOverlay() {  

   }
   
   renderStatusOverlay(){
		var statuses = [{"fieldName": "Assigned", "fieldVal": 1}, {"fieldName": "In Progress", "fieldVal": 2}, {"fieldName": "Completed", "fieldVal": 3}, {"fieldName": "Cancelled", "fieldVal": 4}];
		return(
			<Popover id="popoverStatus" title="Status">
				<TaskStatuses statuses={statuses}/>
			</Popover>
			);	
		
	}
	
	handleGroupsClick(e) {
		var term = {};
		if(e.target.checked){
		   this.addToFilterParam(e.target.id, e.target.name);
		} else {
			this.findAndRemove(e.target.name, e.target.id);
		}	
	}
	
	addToFilterParam(id, name) {
		var val = {"field": name, "value": id};
		var filter = this.state.searchParams;
		filter.push(val);
		console.log(filter);
		this.setState({searchParams: filter});
	}

	findAndRemove(property, value) {
	var array = this.state.searchParams;
	  for (var i in array) {
		if(array[i].field == value && array[i].value == value) {
		  //Remove from array
		  console.log('removing');
		  array.splice(index, 1);
		}    
	  };
	  console.log(array);
	  this.setState({searchParams: array});
	}

}




function mapStateToProps(state) {
	return {tasks: state.tasks, isFetching : state.isFetching};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchTasks: fetchTasks}, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(LeftSidebarMenulist)