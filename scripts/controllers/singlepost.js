app.controller('singlepost', function($scope, $http, $state, $localStorage){
  $scope.id = $state.params.id
  $http.get('https://rebelmarkets.herokuapp.com/postview/' + $state.params.id).then(function(data){
    var info = data.data.post;
    info.forEach(function(item){
      console.log(item);
      // console.log(item.post_title);
      if(item.post_number == $state.params.id){
        $scope.post = item
        $scope.title = item.post_title
        $scope.hashtag = item.hashtag
        $scope.forsale = item.forsale
        $scope.image_content = item.photo_url
        $scope.price = item.price;
        $scope.text = item.posts_body;
        $scope.created_at = item.post_created_at;
        $scope.userPhoto = item.user_photo
        console.log($scope.title);
      }
    })


  })



  console.log('hello from single post', $scope.id);
  console.log($state.params.id);
})
