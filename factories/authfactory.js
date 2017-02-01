// console.log("authfactory")
app.factory('authFactory', ($q) => {
	return {
		login (email, password) {
			console.log("login works")
			// return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, password))
		},
		register (email, password) {
			// console.log("register works")
		}
		// getUserId () {
		// 	return firebase.auth().currentUser.uid
		// },
	}
	})

   // sending register info to firebase
// firebase.auth().createUserWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
// })
