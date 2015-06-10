var Click = Backbone.View.Extend({

  defaults: {
    clicks: 0,
    like: "Likes",
  },

  like: function() {
		if (this.get('clicks') === 0) {
			this.set('like', "Like");
		} else {
			this.set('like', "Likes");
		}
		var clicks = this.get('clicks') + 1;
		this.set('clicks', count);
		console.log(this.get('count'));
	}


});

export default Click;
