

app.controller('HomeCtrl', function($scope, authFactory, createFactory, $location, $route) {
	createFactory.getPost()
	.then((results) => {
		console.log(results)
		$scope.posts = results.data
	})
	authFactory.getUserId()
	.then((value) => {
		$scope.email = value.email
		console.log(value.email)
	})
	$scope.logout = () => {
	authFactory.logout()
	.then((response) => {
		$location.url("/home")
		console.log("logout")
	})
}
})
