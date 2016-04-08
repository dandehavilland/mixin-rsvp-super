import Ember from 'ember';

export default Ember.Mixin.create({
  theMethod() {
    console.log('mixin-three', arguments);
    return this._super.apply(this, arguments);
  }
});