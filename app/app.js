var app = angular.module('app', [
	'ngRoute',
	'shopControllers'
]);

app.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: '/views/home.html',
		controller: 'HomeCtrl'
	}).otherwise({ redirectTo: '/' });

});
