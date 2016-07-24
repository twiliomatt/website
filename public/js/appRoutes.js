angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/CV', {
			templateUrl: 'views/CV.html',
			controller: 'NerdController'
		})

		.when('/musings', {
			templateUrl: 'views/musings.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);