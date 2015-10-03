var myApp = angular.module("myApp", []);
myApp.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {
	console.log("Hello World from the controller");
	
	$http.get("/contactlist").success(function(response) {
		//console.log will tell us if we succcessfully got the data we requested
		console.log("I got the data I requested");
		//Puts the data into our HTML file
		$scope.contactlist = response;
});
}]);