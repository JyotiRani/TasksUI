import React from 'react';
import {FormGroup,FormControl} from 'react-bootstrap';

class LanguageDropDown extends React.Component {
   render() {
      return (
		<FormGroup controlId="formControlsSelect" className="languageDropDown">
			<FormControl componentClass="select">
				<option value="en">English</option>
				<option value="de">German</option>
			</FormControl>
		</FormGroup>
      );
   }
}


export default LanguageDropDown;

