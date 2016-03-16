app.controller('ContentController', function($scope, $http, $state, $localStorage){
  $http.get('http://localhost:3000/allposts').then(function(data){
    $scope.posts = data.data.data;
    console.log($scope.posts);
  })
  console.log('this is the user id, specifically: ', $localStorage.userIdentification);
  console.log('this is user id', btoa($localStorage.token));

  $scope.userId = $localStorage.userIdentification;


})
