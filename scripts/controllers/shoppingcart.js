app.controller('shoppingcart', function($scope, $http, $state){
  $scope.id = $state.params.id
  $http.get('http://localhost:3000/shopping/' + $state.params.id).then(function(data){
    console.log(data.data.data);
    var artObject = data.data.data;
    artObject.text = data.data.data.text_content;
    artObject.image = data.data.data.image_content;
    artObject.dateCreated = data.data.data.created_at;
    artObject.quantity = 1;
    $scope.artObject = artObject;
    console.log($scope.title);
  })

  $scope.cart = [];
  $scope.price

  $scope.addToCart = function(item){
    $scope.cart.push(item)
    console.log($scope.cart);
  }

  $scope.checkout = function(){
    $state.go('paypal', data.data.data)
  }
})
