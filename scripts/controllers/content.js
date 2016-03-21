app.controller('ContentController', function($scope, $http, $state, $localStorage, $interval){

  $scope.userId = $localStorage.userIdentification;

  $http.get('http://localhost:3000/allposts').then(function(data){
    $scope.posts = data.data.data;
    $scope.id = data.data.id;
    $scope.post_id = data.data.user_id
    $state.go('content', data)
  })

  $http.get('http://localhost:3000/getusers').then(function(data){
    console.log('heres the users you wanted: ', data);
    $scope.userObj = data.data.users
    $scope.listUsers = function(data) {
      data.forEach(function(item){
      })
    }

  })
  $http.get('http://localhost:3000/trending/hastags').then(function(data){
    $scope.hashtags = data.data.data
    console.log('heres the hastags:', $scope.hashtags);
    var blankArray = [];
    var hash = $scope.hastags
    for(i = 0; i < $scope.hashtags.length; i = i + 1){
      var curr = $scope.hashtags[i];
      if(curr.hashtag[i] = curr.hashtag[i - 1]){
        blankArray.push(curr.hashtag)
      }
      console.log(blankArray);
    }
    $scope.trending = blankArray;
    $scope.hashtagsLoaded = true;
    $interval($scope.slideShow, 1000)
  })


  $scope.slideShow = function(){
    $scope.currentHashtag = $scope.trending[$scope.currentIndex];
    $scope.currentIndex ++
    if($scope.currentIndex >= $scope.trending.length){
      $scope.currentIndex = 0;
    }
  }

  $scope.currentIndex = 0;

  $scope.addComment = function(){
    $scope.comment;
    $http.post('http://localhost:3000/submit/comment/' + $scope.userId, $scope.comment).then(function(data){
      // console.log(data.data);
      $state.reload();
    }).catch(function(err){
      console.log('error posting', err);
    })
  }

  $scope.likePost = function(id){
    $http.get('http://localhost:3000/post/like/' + id).then(function(data){
      // console.log(data);
      $state.reload();
    })
  }

////slick

$scope.slickConfig = {
    enabled: true,
}

  // $scope.slickConfig = {
  //     enabled: true,
  //     autoplay: true,
  //     draggable: false,
  //     autoplaySpeed: 3000,
  //     method: {},
  //     event: {
  //         beforeChange: function (event, slick, currentSlide, nextSlide) {
  //         },
  //         afterChange: function (event, slick, currentSlide, nextSlide) {
  //         }
  //     }
  // };

})
