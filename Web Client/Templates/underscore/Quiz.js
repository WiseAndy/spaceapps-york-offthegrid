var A = OTG;
(function(root){
	var choiceTemplate = '<input type="checkbox" name="q1-a1" value=""><%= choice.choice %><br />';
	
	var questionTemplate = '<section id="quiz-q<%= index + 1 %>" class="quiz-question">'+
    '	<article>'+
    '	   <h1>Question <%= index + 1%></h1>'+
    '      <h2 class="quiz-cat"><% _.each(model.attributes.tags, function(tag){ %>'+
	'			<%= tag %>&nbsp;'+
	'		<% }); %>'+
	'	   </h2>'+
    '   <p>Below is a list of energy saving features. Please check all that apply.</p>'+
	'	<form>'+
	'	<% _.each(model.attributes.choices, function(choice, index){ %>'+
			choiceTemplate +
	'	<% }); %>'+
	'	</form>'+
	'	</article>'+
	'	<div align="center"><a href="#quiz-q<%= index %>" class="more">Next question.</a></div>'+
	'</section>';
	
	root.namespace("Templates").Quiz = _.template(
	'<% _.each(collection.models, function(model, index) {%>'+
	questionTemplate +
	'<% }); %>'
	);
})(A);