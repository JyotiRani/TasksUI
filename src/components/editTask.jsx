import React from 'react';
import {Grid,Row,Col,Form} from 'react-bootstrap';

import Header from './header.jsx';
import LeftSidebar from './editTask/left-sidebar.jsx';
import RightSidebar from './right-sidebar-menulist.jsx';
import HeaderMain from './editTask/header.jsx';
import EditTaskFormSection from './editTask/form.jsx';
import RightSection from './editTask/requestor.jsx';
import FooterMain from './footer.jsx';

class EditTask extends React.Component {
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
				
				<EditTaskFormSection />
				
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


export default EditTask;

