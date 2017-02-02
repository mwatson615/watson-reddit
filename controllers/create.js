// console.log("create")

app.controller('CreateCtrl', function($scope, createFactory, authFactory) {

	$scope.currentUser = authFactory.getUserId()

	$scope.createPost = () => {
	let newPost = {
		"title" : $scope.title,
		"url" : $scope.url,
		"imageName" : null,
		"counter" : 0,
		"userEmail" : ""
	}
	createFactory.createPost(newPost)
		// console.log(newPost)
	}



	//create route storage reference
	let storageRef = firebase.storage().ref();

	let inputElement = document.getElementById("fileInput")

	let imgArray = []


// 	inputElement.addEventListener('change', handleFiles, false);

// 	function handleFiles() {
// 		let fileList = this.files;
//      /* now you can work with the file list */
//     // console.log("filelist", fileList)
//     storageRef.child(fileList[0].name).put(fileList[0])
//       .then(function(snapshot) {
//         console.log('Uploaded a blob or file!');
//       });

//   //getting the url
//   storageRef.child(this.files).getDownloadURL()
// 	.then(function(url) {
//       var img = document.getElementById('myImg');
//       img.src = url;
//       console.log(img)
//       newPost.uploadUrl = url;
//       $scope.images = fileList;
//     }).catch(function(error) {
//     // Handle any errors
//   })
// }

})
