import React from 'react';

class CurrentDateTime extends React.Component {
   render() {
      return (
		<div className="times">
		  <div className="f-size-11"><span className="hours" title="6:44">6:44</span><span className="pm" title="PM">PM</span><span className="gst"  title="CST">(CST)</span></div>
		  <div className="date" title="Wednesday, Nov 10, 2016">Wed, Nov 10, 2016</div>
		</div>
      );
   }
}


export default CurrentDateTime;

