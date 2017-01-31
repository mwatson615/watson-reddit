// console.log("app")

const app = angular.module('redditApp', ['ngRoute'])

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyConwIXQyETn-dnz0WtVDcdaOJNt2rV-f8",
    authDomain: "reddit-project-52b4d.firebaseapp.com",
    databaseURL: "https://reddit-project-52b4d.firebaseio.com",
    storageBucket: "reddit-project-52b4d.appspot.com",
    messagingSenderId: "416158005832"
  };
  firebase.initializeApp(config);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('')
	$routeProvider
		.when('/', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/home', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html'
		})
		.when('/create', {
			controller: 'CreateCtrl',
			templateUrl: 'partials/create.html'
		})
		.otherwise({
			redirectTo: '/' //add auth to redirect to login if not logged in
		})
})
