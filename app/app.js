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

	const checkForAuth = {
      checkForAuth ($location) {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }

		$locationProvider.hashPrefix('')
		$routeProvider
		.when('/', {
			controller: 'LoginCtrl',
			templateUrl: 'partials/login.html'
		})
		.when('/home', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html',
			// resolve: {
			// user (authFactory, $location)
			// 	return authFactory.getUserId()
			// }
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
