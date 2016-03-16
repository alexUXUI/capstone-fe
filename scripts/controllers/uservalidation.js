app.controller('ValidatingController', function($scope, $http, $stateParams, $localStorage, $location){
  //Get token out of header and set in local storage
  var params = $stateParams;
  var tokenParts = params.token.split('.');
  console.log(tokenParts);
  var body = tokenParts[1];
  var userObject = atob(body);
  var userIdentity = JSON.parse(userObject);
  console.log(userIdentity);
  var userUniqueId = userIdentity.id
  console.log('at long last, the user\'s identity', userUniqueId);
  $localStorage.userIdentification = userUniqueId;
  $localStorage.token = $stateParams.token;
  $location.path('/content')
})
