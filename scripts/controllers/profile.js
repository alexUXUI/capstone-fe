app.controller('ProfileController', function($scope, $http, $localStorage, $state){

console.log('this is the user id, specifically: ', $localStorage.userIdentification);
console.log('this is user id', btoa($localStorage.token));

    var id = $localStorage.userIdentification;
    var idstring = id.toString();
    console.log('hitting the right route');
    console.log('using the right value! ', id);

    $http.get('http://localhost:3000/profile/' + id).then(function(data){
      console.log(data);
      $scope.email = data.data.user.email;
      $scope.profileImage = data.data.user.user_image;
    })


})
