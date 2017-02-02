// console.log("login")

app.controller('LoginCtrl', function ($scope, authFactory, $location, $route) {

	$scope.login = () => {
		// console.log("login working")
		authFactory.login($scope.email, $scope.password)
		.then((response) => {
			$location.url("/home")
		})
	}
	$scope.register = () => {
		authFactory.register($scope.email, $scope.password)
		console.log("register working")
	}

	// console.log()
})
