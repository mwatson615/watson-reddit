// console.log("create")

app.controller('CreateCtrl', function($scope, createFactory, authFactory) {

		//create route storage reference
	let storageRef = firebase.storage().ref();

	let inputElement = document.getElementById("fileInput")

	let imgArray = []

	let imgUrl = ""

	inputElement.addEventListener('change', handleFiles, false);

	function handleFiles(img) {
		let fileList = this.files;
     /* now you can work with the file list */
    // console.log("filelist", fileList)
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log(snapshot.a.downloadURLs[0])
        $scope.downloadUrl = snapshot.a.downloadURLs[0]
      }).catch(function(error) {

      })

    storageRef.child().getDownloadURL()
	.then(function(url) {
		// console.log(url)
      // imgUrl = url;
      // console.log(imgUrl)
      $scope.images = fileList;
    }).catch(function(error) {
    // Handle any errors
  })
}
	$scope.currentUser = authFactory.getUserId()

	$scope.createPost = () => {
	let newPost = {
		"title" : $scope.title,
		"url" : $scope.url,
		"imgUrl" : $scope.downloadUrl,
		"counter" : 0,
		// "dateStamp" : date,
		"userEmail" : $scope.currentUser.$$state.value.email
	}
	createFactory.createPost(newPost)
		// console.log(newPost)
	}





})
