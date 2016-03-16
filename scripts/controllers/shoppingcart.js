app.controller('shoppingcart', function($scope, $http, $state){
  $scope.id = $state.params.id
  $http.get('http://localhost:3000/shopping/' + $state.params.id).then(function(data){
    console.log(data.data.data);
    $scope.title = data.data.data.title;
    $scope.text = data.data.data.text_content;
    $scope.image = data.data.data.image_content;
    $scope.likes = data.data.data.likes;
    $scope.price = data.data.data.price;
    $scope.dateCreated = data.data.data.created_at;
    console.log($scope.title);
  })
})
