app.controller('ProfileController', function($scope, $http, $localStorage, $state){
    

    $http.get('http://localhost:3000/profile/' + $state.params.id).then(function(data){
    console.log(data);
    // user details
    $scope.profileImage = data.data.data.user.photo;
    $scope.email = data.data.data.user.email;
    $scope.first = data.data.data.user.first;
    $scope.first = data.data.data.user.id;
    $scope.last = data.data.data.user.last;

    // user posts
    $scope.posts = data.data.data.userposts;
    console.log('posts::', $scope.posts);
    $state.go('profile', data)
  })
})
