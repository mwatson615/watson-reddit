// console.log("authfactory")
app.factory('authFactory', ($q) => {
	return {
		login (email, password) {
			return $q.resolve(firebase.auth()
				.signInWithEmailAndPassword(email, password))
				.catch(function(error) {
			  	// Handle Errors here.
			  	var errorCode = error.code;
			  	var errorMessage = error.message;
			  	alert(errorCode + " : " + errorMessage)
			  // ...
			})
		},
		register (email, password) {
			return $q.resolve(firebase.auth()
				.createUserWithEmailAndPassword(email, password))
				.catch(function(error) {
				  // Handle Errors here.
				  var errorCode = error.code;
				  var errorMessage = error.message;
			})
		},
		// getUserId () {
		// 	return firebase.auth().currentUser.uid
		// },
		logout () {
			firebase.auth().signOut()
			.then(function() {
		}, function(error) {
		  // An error happened.
		})
		}
	}
})
