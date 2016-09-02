app.directive("listDirective", function() {
	var linkFunction = function(scope, element, attributes) {
    scope.bikeIndex = attributes["listDirective"];
  };
    return {
		restrict:'EA',
        templateUrl: './directives/listTemplate.html',
      link: linkFunction
    };
}); 
