// console.log("home")

app.controller('HomeCtrl', function($scope, authFactory, createFactory) {
	// $scope.currentUser = authFactory.getUserId()
	createFactory.getPost()
	.then((results) => {
		console.log(results.data)
		$scope.posts = results.data
	})
	authFactory.getUserId()
	.then((value) => {
		$scope.email = value.email
		console.log(value.email)
	})
		// console.log(val)
	// console.log("home control")
})
