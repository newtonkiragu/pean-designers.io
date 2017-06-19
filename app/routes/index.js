import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
    return Ember.RSVP.hash({
      products: this.store.findAll('product')
    });
  },

  actions: {
    nameLookup(params) {
      this.transitionTo('results', params.name);
    },
    model: function() {
      var key = config.myApiKey;
      console.log(config.myApiKey);
      var url = 'http://api.shopstyle.com/api/v2/categories?pid=uid8096-39509436-69' + '&fts=trousers&offset=0&limit=10';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        //use console log this to identify the objects
        console.log(responseJSON.products);
        return responseJSON.product;
        this.getJSON.categories;
      });
    },

  }
});
