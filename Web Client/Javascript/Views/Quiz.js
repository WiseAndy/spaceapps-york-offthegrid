var A = ƒ;
(function(root){
	root.namespace("Views").Quiz = Backbone.View.extend({
		collection: root.Models.Quiz,
		template: root.Templates.Quiz,
		render: function(){
			this.$el.html(this.template({collection: this.collection}));
			return this;
		}
	});
})(A);