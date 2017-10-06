import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({


  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.shopstyle.com/api/v2/products?pid=uid4089-39490717-44&fts=' + params.name + '&offset=0&limit=10';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.products;
    });
  },
  actions: {
    updateRating(params) {
      // console.log('i get here');
      const {
        item: product,
        rating
      } = params;
      product.set('rating', rating);
      return product.save();
    },
    upVote(product) {
      this.sendAction('upVote', product);
    }

  },

  actions: {
    addOrder2(params) {
      var addOrder = this.store.createRecord('order', params);
      addOrder.save();
      Materialize.toast('Added to cart!', 4000);
    }
  }
});
