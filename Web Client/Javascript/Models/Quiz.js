var A = OTG;
(function(root){
	root.namespace("Models").Quiz = Backbone.Collection.extend({
		model: root.Models.Question
		//TODO question properties and methods need adding here
	});
})(A);