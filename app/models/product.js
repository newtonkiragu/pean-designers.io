export default DS.Model.extend({
  name: DS.attr(),
  brandedName: DS.attr(),
  unbrandedName: DS.attr(),
  currency: DS.attr(),
  priceLabel: DS.attr('number'),
  inStock: DS.attr(),
  image: DS.attr(),
});
