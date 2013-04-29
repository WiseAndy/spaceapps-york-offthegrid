var A = OTG;
(function(root){
	root.namespace("Views").Quiz = Backbone.View.extend({
		initialize: function(){
            this.render();
        },
		collection: new Backbone.Collection,
		template: root.Templates.Quiz,
		render: function(){
			this.$el.html(this.template({collection: this.collection}));
			return this;
		}
	});
})(A);