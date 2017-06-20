import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.service(),
    actions: {
        remove(item){
            this.get('shoppingCart').remove(item);
        },
        emptyCart(){
            this.get('shoppingCart').emptyCart();
        },
        addItem(item){
            console.log(item);
        },
        removeItem(item){}
    }
});
