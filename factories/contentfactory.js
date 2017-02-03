// console.log("contentfact")

app.factory('createFactory', ($http, $q) => {

	return {

		createPost : (newPost) => {
			// console.log(newPost)
			return $http.post("https://reddit-project-52b4d.firebaseio.com/posts/.json", JSON.stringify(newPost))
			.then(function(value) {
				console.log(value.config)
			})
			.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
			})
		},
		getPost : () => {
			return $http.get("https://reddit-project-52b4d.firebaseio.com/posts/.json")
			.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
			})
		},
		increaseCounter : () => {
			return $http.patch("")
		}
}

})
