app.controller('ProfileController', function($scope, $http, $localStorage, $state){

    var id = $localStorage.userIdentification;
    var idstring = id.toString();
    $http.get('http://localhost:3000/profile/' + id).then(function(data){

    // user details
    $scope.profileImage = data.data.data.user.photo;
    $scope.email = data.data.data.user.email;
    $scope.first = data.data.data.user.first;
    $scope.last = data.data.data.user.last;

    // user posts
    $scope.posts = data.data.data.userposts;
    console.log('posts::', $scope.posts);

  })
})
