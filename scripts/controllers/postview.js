app.controller('PostViewController', function($scope, $http, $state){
  var postNumer = $state.params.id;
  $http.get('https://rebelmarkets.herokuapp.com/postview/' + postNumer).then(function(data){
    $scope.title = data.data.post.title;
    $scope.images = data.data.post.image_content;
    $scope.text = data.data.post.text_content;
    $scope.likes = data.data.post.likes;
    $scope.forsale = data.data.post.for_sale;
    $scope.price = data.data.post.price;
    $scope.hashtags = data.data.post.hashtags;
  })
})
