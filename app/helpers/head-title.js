import Ember from 'ember';

export function headTitle(title) {
	Ember.$('head').find('title').text(title);
}

export default Ember.Helper.helper(headTitle);
