import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  actions: {
    productFormShow() {
      this.set('addNewProduct', true)
    },
    saveProduct1() {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost'),
        rating: 0
      }
      this.set('addNewProduct', false);
      this.sendAction("saveProduct2", params);
    }
  }
});