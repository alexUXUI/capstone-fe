app.controller('CreatePostController', function($scope, $http, $state, $localStorage){
  // $scope.postData = {}
  // $scope.postData.title = 'whatev';
  // $scope.postData.text = 'whatev';
  // $scope.postData.images = "https://avatars1.githubusercontent.com/u/9002289?v=3&s=460";
  // $scope.postData.hashtags = 1;
  // $scope.postData.forSale = false;
  // $scope.postData.price = 300;
  // $scope.postData.likes = 0;
  // $scope.postData.comments = ['hey', 'its', 'cool'];
  $scope.submitData = function(){
    $http.post('https://rebelmarkets.herokuapp.com/submitpost', $scope.postData).then(function(data){
      $state.go('content', data.data);
    }).catch(function(err){
      console.log('error posting', err);
    })
  }
})
