app.controller('ProfileController', function($scope, $http, $localStorage, $state){
    $http.get('https://rebelmarkets.herokuapp.com/profile/' + $state.params.id).then(function(data){
    $scope.profileImage = data.data.data.user.photo;
    $scope.email = data.data.data.user.email;
    $scope.first = data.data.data.user.first;
    $scope.first = data.data.data.user.id;
    $scope.last = data.data.data.user.last;
    $scope.posts = data.data.data.userposts;
    $state.go('profile', data)
  })
})
