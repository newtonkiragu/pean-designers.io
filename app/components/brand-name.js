import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    model: function() {
      var key = config.myApiKey;
      console.log(config.myApiKey);
      var url = 'http://api.shopstyle.com/api/v2/brands?pid=uid8096-39509436-69';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        //use console log this to identify the objects
        console.log(responseJSON.products);
        return responseJSON.product;
      });
    },
  }
});
