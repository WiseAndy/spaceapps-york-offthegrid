var A = OTG;
(function(root){
	root.namespace("Templates").Quiz = _.template(
	'<% _.each(collection, function(model, index) {%>'+
	'<section id="quiz-q<%= index %>" class="quiz-question">'+
    '	<article>'+
    '	   <h1>Question <%= index %></h1>'+
    '      <h2 class="quiz-cat"><% _.each(model.attributes.tags, function(tag){ %>'+
	'			<%= tag %>&nbsp;'+
	'		<% } %>'+
	'	   </h2>'+
    '   <p>Below is a list of energy saving features. Please check all that apply.</p>'+
	'	<form>'+
	'	<% _.each(model.attributes.choices, function(choice, index){ %>'+
    '		<input type="checkbox" name="q1-a1" value=""> Compact fluorescent bulbs<br />'+
	'	<% } %>'+
	'	</form>'+
	'	</article>'+
	'	<div align="center"><a href="#quiz-q<%= index %>" class="more">Next question.</a></div>'+
	'</section>'+
	'<% } %>'
	);
})(A);