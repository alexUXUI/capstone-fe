app.controller('ValidatingController', function($scope, $http, $stateParams, $localStorage, $location){
  var params = $stateParams;
  var tokenParts = params.token.split('.');
  var body = tokenParts[1];
  var userObject = atob(body);
  var userIdentity = JSON.parse(userObject);
  var userUniqueId = userIdentity.id
  $localStorage.userIdentification = userUniqueId;
  $localStorage.token = $stateParams.token;
  $location.path('/content')
})
