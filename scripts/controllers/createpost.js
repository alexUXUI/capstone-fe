app.controller('CreatePostController', function($scope, $http, $state, $localStorage){
  // $scope.postData.title = 'Made in Iran';
  // $scope.postData.text = 'Both born in the 1980s, Iranian Street Artists Icy & Sot are equally fans and loyal students of all the stencil techniques that have characterized the western scene in the last decade. What’s fascinating in this story is that, despite creating work on the street since 2005, neither brother has been able to attend their own gallery show in person outside of Iran until this week in New York.';
  // $scope.postData.images = "http://www.brooklynstreetart.com/theblog/wp-content/uploads/2012/08/brooklyn-street-art-icy-sot-jaime-rojo-studio-visit-08-12-web-2.jpg";
  // $scope.postData.hashtags = '#iran';
  // $scope.postData.forSale = true;
  // $scope.postData.price = 300;
  // $scope.postData.likes = 3;
  $scope.submitData = function(){
    $http.post('https://rebelmarkets.herokuapp.com/submitpost', $scope.postData).then(function(data){
      $state.go('content', data.data);
    }).catch(function(err){
      console.log('error posting', err);
    })
  }
})
