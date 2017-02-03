

app.controller('HomeCtrl', function($http, $scope, authFactory, createFactory, $location, $route) {
	$scope.postArray = [];
	createFactory.getPost()
	.then((results) => {
		// console.log(results)
		$scope.posts = results.data

		for (key in $scope.posts) {
		$scope.postArray.push($scope.posts[key])
		}
		// console.log(postArray)
	})
	authFactory.getUserId()
	.then((value) => {
		$scope.email = value.email
		// console.log(value.email)
	})
	$scope.logout = () => {
		authFactory
		.logout()
		.then((response) => {
			$location.url("/home")
			console.log("logout")
		})
	}

	$scope.vote = (post, direction) => {
		let postId;

		if (direction === 'up') {
			post.counter++
		} else {
			post.counter--
		}

		for (key in $scope.posts) {
			if ($scope.posts[key] === post) {
				postId = key
			}
		}
		$http.put(`https://reddit-project-52b4d.firebaseio.com/posts/${postId}/counter.json`, post.counter)
	}
})
