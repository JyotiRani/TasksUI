import React from 'react';
import {Row,Col,FormGroup,FormControl,ControlLabel, Grid} from 'react-bootstrap';
import Header from './header.jsx';
import LeftSidebar from './newTask/left-sidebar.jsx';
import RightSidebar from './right-sidebar-menulist.jsx';
import HeaderMain from './newTask/header.jsx';
import NewTaskFormSection from './newTask/form.jsx';
import RightSection from './newTask/requestor.jsx';
import FooterMain from './footer.jsx';


class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			showHideRightNav:false
		};
		this.showHideRightNav = this.showHideRightNav.bind(this);
	};
	showHideRightNav(value){
		this.setState({showHideRightNav:!this.state.showHideRightNav});
	};
	
	showResults(values) {

	  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
	  this.props.createTask(values);
	}

	render() {
		return (
			<div>
				{/* App Header Section Start*/}
				<Header rightNavValue = {this.showHideRightNav} />
				{/* App Header Section End*/}
				
				{/* App Right Side MenuBar Section Start*/}
				<RightSidebar showhideClass = {this.state.showHideRightNav} />
				{/* App Right Side MenuBar Section End*/}
				
				{/* App Left Side MenuBar Section Start*/}
				<LeftSidebar  />
				{/* App Left Side MenuBar Section End*/}
				
				<NewTaskFormSection />
				
				
				<Row>
					<Col xs={12}>
						{/* Footer Section Start*/}
						<FooterMain />
						{/* Footer Section End*/}
					</Col>
				</Row>

			</div>
		);
	}
}



export default MyComponent;

