import React from 'react';
import {Row,Col} from 'react-bootstrap';

import Logos from './header/logo.jsx';
import TaskMainMenu from './header/task-main-menu.jsx';
import MobileTaskMainMenu from './header/mobile-task-main-menu.jsx';

class Header extends React.Component {
   render() {
      return (
         <div className="hfixed">
			<Row className="noMar">
			  <Col md={6} sm={6} xs={12}>
			  
				{/*Logo section Start*/}
				<Logos />
				{/*Logo section end*/}
				
				{/*Logo section Start*/}
				<MobileTaskMainMenu />
				{/*Logo section end*/}
				
			  </Col>
			  <Col md={6} sm={6} className="hidden-xs">
				
				{/* XSM Main Menu Section Start*/}
				<TaskMainMenu />
				{/* XSM Main Menu Section end*/}
			  </Col>
			</Row>
         </div>
      );
   }
}

export default Header;	