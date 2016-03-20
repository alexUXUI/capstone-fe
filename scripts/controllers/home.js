app.controller('HomeController', function($scope, $http, $state, $localStorage){
  // $scope.id = $state.params.id
  // $http.get('http://localhost:3000/shopping/' + $state.params.id).then(function(data){
  //   $scope.artObject = data.data.data;
  //   $scope.artObject.text = data.data.data.text_content;
  //   $scope.artObject.image = data.data.data.image_content;
  //   $scope.artObject.dateCreated = data.data.data.created_at;
  //   $scope.artObject.quantity = 1;
  // })
  $http.get('http://localhost:3000/allposts').then(function(data){
    $scope.posts = data.data.data;
    $scope.id = data.data.id;
    $scope.post_id = data.data.user_id
    // $state.go('content', data)
  })
  $scope.cart = [];
  $scope.price

  $scope.addToCart = function(item){
    $scope.cart.push(item)
    $scope.cart = $localStorage.finalCart;
    console.log('CART, COMING FROM HOME CONTROLLER, ' , $scope.cart);
  }

  $scope.checkout = function(){
    $state.go('paypal', data.data.data)
  }






})
