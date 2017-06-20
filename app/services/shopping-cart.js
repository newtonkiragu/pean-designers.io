import Ember from 'ember';

export default Ember.Service.extend({
    items: [],

    add(product) {
        var items = this.get('items');
        if(items.includes(product)){
            console.log("already in cart");
        }else{
            items.pushObject(product);    
        }
        
    },
    addItem(product){
        if (this.get('items') == product) {
            console.log(this.get('items'));
        } else {
            console.log('siko bie');
            console.log(this.get('items'));
        }
    },
    remove(product) {
        this.get('items').removeObject(product);
    },
    emptyCart() {
       this.get('items').clear();
    } 

});
