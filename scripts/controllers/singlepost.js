app.controller('singlepost', function($scope, $http, $state, $localStorage){
  $scope.id = $state.params.id
  console.log('hello from single post', $scope.id);
  console.log($state.params.id);
})
