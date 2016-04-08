import Ember from 'ember';

import MixinOne from 'mixin-super/mixins/mixin-one';
import MixinTwo from 'mixin-super/mixins/mixin-two';
import MixinThree from 'mixin-super/mixins/mixin-three';

const {
  on,
  RSVP
} = Ember;

export default Ember.Controller.extend(MixinOne, MixinTwo, MixinThree, {
  theMethod() {
    console.log('controller', arguments);

    RSVP.resolve().then(() => {
      this._super.apply(this, arguments);
    });

    this._super.apply(this, arguments);
  },

  callTheMethod: on('init', function() {
    this.theMethod('foo');
  })
});
