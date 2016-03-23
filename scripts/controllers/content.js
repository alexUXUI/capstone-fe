app.controller('ContentController', function($scope, $http, $state, $localStorage, $interval){
  $scope.userId = $localStorage.userIdentification;
  $http.get('https://rebelmarkets.herokuapp.com/allposts').then(function(data){
    $scope.posts = data.data.data;
    $scope.id = data.data.id;
    $scope.post_id = data.data.user_id
    $state.go('content', data)
  })
  $http.get('https://rebelmarkets.herokuapp.com/getusers').then(function(data){
    $scope.userObj = data.data.users
    $scope.listUsers = function(data) {
      data.forEach(function(item){
      })
    }
  })
  $http.get('https://rebelmarkets.herokuapp.com/trending/hastags').then(function(data){
    $scope.hashtags = data.data.data
    var blankArray = [];
    var hash = $scope.hastags
    for(i = 0; i < $scope.hashtags.length; i = i + 1){
      var curr = $scope.hashtags[i];
      if(curr.hashtag[i] = curr.hashtag[i - 1]){
        blankArray.push(curr.hashtag)
      }
    }
    $scope.trending = blankArray;
    $scope.hashtagsLoaded = true;
    $interval($scope.slideShow, 2000)
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
    $http.post('https://rebelmarkets.herokuapp.com/submit/comment/' + $scope.userId, $scope.comment).then(function(data){
      $state.reload();
    }).catch(function(err){
      console.log('error posting', err);
    })
  }
  $scope.likePost = function(id){
    $http.get('https://rebelmarkets.herokuapp.com/like/' + id).then(function(data){
      $state.reload();
    })
  }
})
