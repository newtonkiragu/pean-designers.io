import Ember from 'ember';

export default Ember.Service.extend({
    items: [],

    add(product) {
        var items = this.get('items');
        items.pushObject(product);    
        // if(items.includes(product)){
        //     console.log("already in cart");
        // }else{
        //     items.pushObject(product);    
        // }
        
    },
    // add item quantity in cart
    addItem(product){
        if (this.get('items').includes(product)) {
            var items = this.get('items');
            for(var i =0; i < items.length; i++){
                console.log(items[i]);
                console.log(product.product_id);
            }
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
