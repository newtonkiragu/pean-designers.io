import Ember from 'ember';
// import StarRatingComponent from 'ember-cli-star-rating/components/star-rating';
export default Ember.Route.extend({

  model() {
    return this.store.findAll('product');
  },
 // actions: {
 // 		//write actions here
 //  }
});