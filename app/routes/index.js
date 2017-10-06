import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    nameLookup(params) {
      this.transitionTo('results', params.name);
    },

    upVote(product) {
      var votes = parseInt(product.get('upvote'));
      votes += 1;
      product.set('upvote', votes);
      product.save();
    },
    model: function() {
      var key = config.myApiKey;
      var url = 'http://api.shopstyle.com/api/v2/products?pid=uid4089-39490717-44&fts=' + params.name + '&offset=0&limit=10';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        //use console log this to identify the objects
        // console.log(responseJSON.products);
        return responseJSON.product;
      });
    },
  }
});
