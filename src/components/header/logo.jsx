import React from 'react';
import {Link} from 'react-router-dom';

class TaskLogos extends React.Component {
   render() {
      return (
		<div className="logos"><Link to="/" className="xsmLogo" title="XAAS Service Management">XAAS Service Management</Link></div>
      );
   }
}


export default TaskLogos;