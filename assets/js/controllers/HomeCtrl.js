studmateApp.controller('HomeCtrl', ['$scope', '$http', '$modal', '$location', 'UserService', function($scope, $http, $modal, $location, UserService) {


  // initializes UserService
  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  });

  $scope.showLogin = function() {
    $modal.open({
      templateUrl: '/views/authModal.html',
      controller: 'AuthModalCtrl'
    })
  };

}]);