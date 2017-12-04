import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
	return (
		<div>
			<div className="employee-list">
			{props.employees.map((employee) => <EmployeeDetail key={employee._id} employee={employee}/>)}
			</div>
		</div>
		);
};

export default withTracker(() => {
	//set up subscription
	Meteor.subscribe('employees');

	//return an object. whatever we return will be sent to EmployeeList
	//as props
	return {employees: Employees.find({}).fetch()};
})(EmployeeList);