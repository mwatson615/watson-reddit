// console.log("app")

const app = angular.module('redditApp', ['ngRoute'])

	.config(function($routeProvider, $locationProvider) {
		firebase.initializeApp({
	    apiKey: "AIzaSyConwIXQyETn-dnz0WtVDcdaOJNt2rV-f8",
	    authDomain: "reddit-project-52b4d.firebaseapp.com",
	    databaseURL: "https://reddit-project-52b4d.firebaseio.com",
	    storageBucket: "reddit-project-52b4d.appspot.com",
	    messagingSenderId: "416158005832"
	  })


		$locationProvider.hashPrefix('')
		$routeProvider
		.when('/', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/home', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html',
			resolve: {
			user (authFactory, $location) {
				return authFactory.getUserId()
				.catch(() => $location.url('/'))
				}
			}
		})
		.when('/create', {
			controller: 'CreateCtrl',
			templateUrl: 'partials/create.html'
		})
		.otherwise({
			redirectTo: '/' //add auth to redirect to login if not logged in
		})
})
