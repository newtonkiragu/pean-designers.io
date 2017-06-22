import Ember from 'ember';

export default Ember.Service.extend({
    items: [],
    total: 0,

    add(product) {
        var items = this.get('items');
        items.pushObject(product); 
        var itotal=0;   
        for(var i=0; i < items.length; i++){
            itotal= itotal + Number(items[i].price);
            console.log(itotal);
        }
        return this.set('total', itotal);
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
        var cart = this.get('items');
        cart.removeObject(product);
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            total = total + Number(cart[i].price);
        }
        return this.set('total', total);

    },
    emptyCart() {
       this.get('items').clear();
       return this.set('total', 0);
    }, 

});
