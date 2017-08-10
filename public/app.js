var app = angular.module('app', ['ngRoute']);

angular.module('app').controller('MainCtrl', function($scope) {
	$scope.stuff = 'Hello from MainCtrl';
});

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/recipes',{
			templateUrl: 'recipes.html',
			controller: 'RecipesCtrl'
		})
		.when('/edit',{
			templateUrl: 'edit.html',
			xcontroller: 'EditCtrl'
		})
		.when('/checkOut',{
			templateUrl: 'checkOut.html',
			xcontroller: 'CheckOutCtrl'
		})
		.otherwise('/recipes');
});

app.controller('RecipesCtrl', function($scope,$http) {

	$scope.getRecipe = function(url) {
		var apiUrl = '/recipes/' + encodeURIComponent(url);
		console.log('getRecipe apiUrl=%o', apiUrl);
		$http.get(apiUrl).then(function(res) {
			var recipes = res.data;
			console.log('recipe = %o', recipes);

			$scope.recipe = recipes;
		});
	};

	$scope.addRecipe = function() {
		console.log('add Recipe')
		$http.post('/edit').then(function(res){
			$scope.
		})
	}
});

app.controller('EditCtrl', function($scope,$http){

	$scope.saveList = function() {
		console.log('saveList() newList=%o', $scope.newList)
		$scope.newList = $scope.recipe
		$http.post('/checkOut', $scope.newList).then(function(res){
			console.log('/checkOut', res.data)
			$scope.list = res.data;
		});
	}
})
