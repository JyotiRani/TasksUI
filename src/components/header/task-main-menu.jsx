import React from 'react';
import {Nav,NavItem} from 'react-bootstrap';

class TaskMainMenu extends React.Component {
   render() {
      return (
		<Nav bsClass="" className="navigation">
			<NavItem href="javascript:;" eventKey={1} className="welUser"><span className="imgUser"></span><i>Welcome</i>, Saraswat Dheeraj</NavItem>
			<NavItem href="#" eventKey={2} className="topNav logOut" title="Logout">Logout</NavItem>
			{/*<NavItem href="#" eventKey={3} className="topNav hamBurger" title="Other Links" onClick = {()=>{this.props.rightNav(true);}}>Other Links</NavItem>*/}
		</Nav>
      );
   }
}
export default TaskMainMenu;

