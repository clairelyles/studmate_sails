// studmateApp.controller('AuthModalCtrl', ['$scope', '$http', '$modalInstance', 'UserService', function($scope, $http, $modalInstance, UserService) {

//   // loginInfo object b/c modal directive blocks data accessability
//   $scope.loginInfo = {email: '', password: ''};
//   $scope.login = function() {
//     console.log($scope);
//     UserService.login($scope.loginInfo.email, $scope.loginInfo.password,
//       function(err, data) {
//         if (err) {
//           alert(err);
//         } else if (data.user) {
//           $modalInstance.close();
//         } else {
//           alert(data.error)
//         }
//     });
//   };

//   // signupInfo object b/c modal directive blocks data accessability
//   $scope.signupInfo = {firstName:'', lastName:'', email:'', password:'', passwordConfirmation:'', zip:''};
//   $scope.signup = function() {
//     if ($scope.signupInfo.password != $scope.signupInfo.passwordConfirmation) {
//       alert('Your passwords do not match. Please try again.');
//       return;
//     }
//     var signupData = {
//       email: $scope.signupInfo.email,
//       password: $scope.signupInfo.password,
//       firstName: $scope.signupInfo.firstName,
//       lastName: $scope.signupInfo.lastName,
//       zip: $scope.signupInfo.zip
//     }
//     $http.post('/api/user', signupData)
//       .success(function(data) {
//         console.log('You are signed in.');
//         // AlertService.add('success','You are signed in.')
//       }).error(function(err) {
//         alert(err);
//       })
//   }


// }]);