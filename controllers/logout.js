app.controller('LogoutController', function($location, $scope, authFactory) {
	$window.localStorage.clear();
	$location.path('/');
})
