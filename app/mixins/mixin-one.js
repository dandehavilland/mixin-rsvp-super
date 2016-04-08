import Ember from 'ember';

export default Ember.Mixin.create({
  theMethod() {
    console.log('mixin-one', arguments);
    return this._super.apply(this, arguments);
  }
});
