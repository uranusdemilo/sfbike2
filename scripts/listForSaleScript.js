var app = angular.module('forSaleApp',[]);
app.controller('forSaleController',function($scope, $http){
   $http.get("http://192.168.1.237/sfbike2/scripts/getbikes.php?type=A")
   .then(function(response){$scope.bikes = response.data.bikes;});
   $scope.getType = function(Type){
      $http.get("http://192.168.1.237/sfbike2/scripts/getbikes.php?type=" + Type)
      .then(function(response){$scope.bikes = response.data.bikes;});
   };
});

app.directive("listDirective", function() {
	var linkFunction = function(scope, element, attributes) {
    scope.bikeIndex = attributes["listDirective"];
  };
    return {
		restrict:'EA',
        templateUrl: 'scripts/listTemplate.html',
      link: linkFunction
    };
}); 
