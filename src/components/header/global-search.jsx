import React from 'react';
import {Form,FormControl} from 'react-bootstrap';

class GlobalSearch extends React.Component {
   render() {
      return (
		<div className="exSearch hidden-xs">
			<Form><FormControl bsClass="" type="search" placeholder="" name="search" title="Search" className="spCommon btnSearch" /></Form>
		</div>
      );
   }
}


export default GlobalSearch;

