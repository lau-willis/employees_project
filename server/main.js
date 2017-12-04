//only executed on server
import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {image, helpers} from 'faker';
import {Employees} from '../imports/collections/employees';

Meteor.startup(() => {
	//great place to generate data

	//check to see if data exists in collection
	//see if collection has any records
	// find({}) will not filter anything and will return everything inside the collection
	const numberRecords = Employees.find({}).count();
	if(!numberRecords){
		_.times(5000,() => {
			const {name, email, phone} = helpers.createCard();
			
			Employees.insert({
				name,
				email,
				phone,
				avatar: image.avatar()
			});
		});
	}

	Meteor.publish('employees', function(){
		return Employees.find({}, {limit: 20});
	});
});