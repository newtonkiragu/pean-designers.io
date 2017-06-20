import Ember from 'ember';

export default Ember.Service.extend({
    items: [],

    add(product) {
        var items = this.get('items');
        items.pushObject(product);    
    },
   remove(product) {
        this.get('items').removeObject(product);
   } 

});
