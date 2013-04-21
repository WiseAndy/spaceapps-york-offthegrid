var ƒ = {};
(function(){

	ƒ = generate_locals();

	function generate_locals(){
		var root = {};
		/*
		*	Add server paths into this collection to allow named access
		*
		*/
		root.SERVICE_PATHS = {
			"default": "/"
		};
		
		/*
		* Populates a REST string with variables if needed.
		* Given a path of the form "/path1/{var1}/path2/{var2}" and variablesObject of form { var1: 1, var2: 2 } will return a path of "/path1/1/path2/2"
		*/
		root.populatePathVariables = function(path, variablesObject) {
			var pathVariableMatchPattern = /{(\w*)}/g; //must use a global match flag here or the following loop never exits.
			var match;
			while (match = pathVariableMatchPattern.exec(path)) {
					//match is an array but has hidden properties index and input (breaking the language, really great design) that allows you to get hold of information to do a custom replace.
					path = path.slice(0, match.index) + variablesObject[match[1]] + path.slice(match.index + match[1].length + 2, path.length); //2 used here to skip closing brace
			}
			return path;
		}

		/*
		 * Checks if object is null
		 * @param {object} [object] Object instance to examine, with throw exception if undefined
		 */
		root.isNull = function( objectRef ){
				if(typeof objectRef !== 'undefined'){
						if(objectRef === null){
								return true;
						} else {
								return false;
						}
				} else {
						throw "Provided object is undefined - reference does not exist";
				}
		}

		/*
		 * Checks if object reference is set to an instance of an object (not null or undefined), requires isNull and isUndefined
		 * @param {object} [object] Object reference to examine
		 */
		root.isSet = function( objectRef ){
			if(!root.isUndefined(objectRef)){
					if(!root.isNull(objectRef)){
							return true;
					} else {
							return false;
					}
			} else {
					return false;
			}
		}

		/*
		* Checks if object reference is not set to an instance of an object (null or undefined), requires isNull and isUndefined
		* @param {object} [object] Object reference to examine
		*/
		root.isNotSet = function(objectRef) {
			return !root.isSet(objectRef);
		}

		/*
		 * Checks if object reference is undefined
		 * @param {object} [object] Object reference to examine
		 */
		root.isUndefined = function( objectRef ){
				if(typeof objectRef === 'undefined'){
						return true;
				} else {
						return false;
				}
		}
		
		/*
		* Based on YUI namespace & code by Douglas Crockford: Now chainable and paths can be expressed. Lint enforced - all namespaces must start with a capital letter.
		*       USED LIKE: 
		*       ƒ.namespace("Collections");
		*       ƒ.Collections.Stack = function(){};
		*       
		*       ƒ.namespace("Collections.ADT").Stack = function(){};
		*/
		root.namespace = function(_name){
			if(typeof _name === "string"){
				var expressedNamespaces = _name.split('.');
				for(var i = 0; i < expressedNamespaces.length; i++){
					var name = expressedNamespaces[i];
					name = name.charAt(0).toUpperCase() + name.slice(1);
					var m = root;
					if(!m[name]){
							m[name] = {};
					}
					m = m[name];
				}
				return m;
			} else {
				throw "Parameter 1: name, expected string";
			}
        }
	
		return root;
	}
})();