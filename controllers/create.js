// console.log("create")

app.controller('CreateCtrl', function($scope, createFactory) {
	// console.log("create control")
	$scope.create = () => {
	createFactory.createPost()
		// console.log("create post")
	}
})
