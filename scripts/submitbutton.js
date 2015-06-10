var Submit = Backbone.Model.Extend({

  defaults: {
    isDisabled: false,
    content: "Submit",
  },

  subButton: function() {
	var content = this.get('content');
	var loading = 'Loading...';
		var self = this;

		this.set('content', loading);
		this.set('isDisabled', true);

		setTimeout(function() {
			self.set('content', 'Submit');
			self.set('isDisabled', false);
		}, 4000);
	}


});

export default Submit;
