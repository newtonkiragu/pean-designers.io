import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('star-rating-fa.js', 'Integration | Component | star rating fa.js', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{star-rating-fa.js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#star-rating-fa.js}}
      template block text
    {{/star-rating-fa.js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
