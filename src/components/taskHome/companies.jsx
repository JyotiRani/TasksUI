import React from 'react';
import {Table, Popover,ListGroup,ListGroupItem,FormGroup,Checkbox, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {filterTasks, fetchTasks, selectCompaniesFilter} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class Companies extends React.Component{

	showResults(values) {

  //alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  this.props.selectCompaniesFilter(values);
  if (values.companyId) {
	var filter = [{"field" : "companyId", "value" : 1}];
	this.props.filterTasks(filter);
  }  else {	
	
	this.props.fetchTasks();
  }
}

	render(){
	
	const renderTextFields = ({input, label, id, type, className, defaultChecked, meta: {touched, error, warning}}) => (
 
 <div>
		<input {...input} type={type} id={id} className={className} ></input> {label}
		
      {touched && ((error && <span className='text-help'>{error}</span>) || (warning && <span>{warning}</span>))}
	  </div>
)

		console.log(this.props.initialValues);
		const companies = this.props.companies;
		return(
				<ListGroup bsClass="">									
					<ListGroupItem bsClass=""><Field label="Grenzen" component={renderTextFields} type="checkbox" id="1" name="companyId"></Field></ListGroupItem>					
				<Button type="button" className="myBtn" onClick={this.props.handleSubmit(this.showResults.bind(this))}>Apply</Button>				
				</ListGroup>
				
			
			);			

	}
}

function mapStateToProps(state) {
	return {initialValues: state.companiesSelectedFilter, companyId:  selector(state, 'companyId')};
}

const selector = formValueSelector('companiesForm') 
Companies = reduxForm({	
  form: 'companiesForm', // a unique identifier for this form
})(Companies);

// You have to connect() to any reducers that you wish to connect to yourself
Companies = connect(
  mapStateToProps, {filterTasks, fetchTasks, selectCompaniesFilter} // bind account loading action creator
)(Companies);

export default Companies;
