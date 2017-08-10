app.controller('RecipesCtrl', function($scope,$http) {

	$scope.getRecipe = function(url) {
		var apiUrl = '/recipes/' + encodeURIComponent(url);
		console.log('getRecipe apiUrl=%o', apiUrl);
		$http.get(apiUrl).then(function(res) {
			var recipe = res.data;
			console.log('recipe = %o', recipes);

			$scope.recipe = recipes;
		});
	};
});
