// console.log("create")

app.controller('CreateCtrl', function($scope, createFactory, authFactory) {

		//create route storage reference
	let storageRef = firebase.storage().ref();

	let inputElement = document.getElementById("fileInput")

	let imgArray = []

	let imgUrl = ""


	inputElement.addEventListener('change', handleFiles, false);

	function handleFiles() {
		let fileList = this.files;
     /* now you can work with the file list */
    console.log("filelist", fileList)
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });

    storageRef.child('brasstownfalls.jpg').getDownloadURL()
	.then(function(url) {
      // var img = document.getElementById('myImg');
      // img.src = url;
      // console.log(img)
      imgUrl = url;
      console.log(imgUrl)
      $scope.images = fileList;
    }).catch(function(error) {
    // Handle any errors
  })
}
	$scope.currentUser = authFactory.getUserId()
	// console.log($scope.currentUser.$$state.value)
	$scope.createPost = () => {
	let newPost = {
		"title" : $scope.title,
		"url" : $scope.url,
		"imgUrl" : imgUrl,
		"counter" : 0,
		"userEmail" : $scope.currentUser.$$state.value.email
	}
	createFactory.createPost(newPost)
		// console.log(newPost)
	}





})
