app.controller('shoppingcart', function($scope, $http, $state){
  $scope.id = $state.params.id
  $http.get('http://localhost:3000/shopping/' + $state.params.id).then(function(data){
    console.log(data.data.data);
    $scope.artObject = data.data.data;
    $scope.title = data.data.data.title;
    $scope.text = data.data.data.text_content;
    $scope.image = data.data.data.image_content;
    $scope.likes = data.data.data.likes;
    $scope.price = data.data.data.price;
    $scope.dateCreated = data.data.data.created_at;
    console.log($scope.title);
  })

  $scope.addToCart = function(item){
    $scope.cart = [];
    $scope.cart.push(item)
    console.log($scope.cart);
  }

  console.log('hello from pay pal controller');


  $scope.checkout = function(){
    $state.go('paypal', data.data.data)
  }


})
