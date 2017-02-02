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
			templateUrl: 'partials/home.html'
		})
		.when('/create', {
			controller: 'CreateCtrl',
			templateUrl: 'partials/create.html'
		})
		.otherwise({
			redirectTo: '/' //add auth to redirect to login if not logged in
		})
		// .run(($location) => {

		// })
	// 	firebase.auth().onAuthStateChanged(user => {
	//   	if (user) {
	    
	//   	} else {
	//     $location.url('/')
	//   }
	// })

// app.config(function($routeProvider, $locationProvider) {
// 	$locationProvider.hashPrefix('')
// 	$routeProvider
// 		.when('/', {
// 			controller: 'LoginCtrl',
// 			templateUrl: 'partials/login.html'
// 		})
// 		.when('/home', {
// 			controller: 'HomeCtrl',
// 			templateUrl: 'partials/home.html'
// 		})
// 		.when('/create', {
// 			controller: 'CreateCtrl',
// 			templateUrl: 'partials/create.html'
// 		})
// 		.otherwise({
// 			redirectTo: '/' //add auth to redirect to login if not logged in
// 		})
})
