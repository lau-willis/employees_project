import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

class App extends Component {
	render(){
		return(
			<EmployeeList />
			)
	}
}

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById('container'))
})