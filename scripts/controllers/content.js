app.controller('ContentController', function($scope, $http, $state, $localStorage){
  $http.get('http://localhost:3000/allposts').then(function(data){
    $scope.posts = data.data.data;
    console.log($scope.posts);
    $scope.id = data.data.id;
    $scope.post_id = data.data.user_id
    console.log($scope.id);
    $state.go('content', data)
  })

  console.log('this is the user id, specifically: ', $localStorage.userIdentification);
  $scope.userId = $localStorage.userIdentification;
})
