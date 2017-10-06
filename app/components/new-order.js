import Ember from 'ember';

export default Ember.Component.extend({
    shoppingCart: Ember.inject.service(),

    actions: {
        addOrder(product) {
            var params = {
                product_name: product.brandedName,
                product_id: product.id,
                product_cost: product.priceLabel,
                quantity: 0,
            };
            var total = this.get('shoppingCart').add(product);
            this.sendAction('addOrder1', params);
        }
    }
});
