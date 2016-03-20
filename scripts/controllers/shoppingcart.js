app.controller('shoppingcart', function($scope, $http, $state, $localStorage){

  $scope.id = $state.params.id
  $http.get('http://localhost:3000/shopping/' + $state.params.id).then(function(data){
    console.log(data.data.data);
    var artObject = data.data.data;
    artObject.text = data.data.data.text_content;
    artObject.image = data.data.data.image_content;
    artObject.dateCreated = data.data.data.created_at;
    artObject.quantity;
    $scope.artObject = artObject;
    console.log('art object', $scope.artObject);
  })
  // $http.get('http://localhost:3000/allposts').then(function(data){
  //   $scope.posts = data.data.data;
  //   console.log('heres the posts: ', $scope.posts);
  //   $scope.id = data.data.id;
  //   $scope.post_id = data.data.user_id
  //   // $state.go('content', data)
  // })
  $scope.tax = 0.07;
  $scope.addToCart = function(item){
    $scope.cart.subtotal = item.price * item.quantity;
    $scope.cart.total = null;
    $localStorage.totalCash += $scope.cart.subtotal;
    $scope.cart.push(item)
    console.log('heres the cart', $scope.cart);
    $scope.totalAmount($scope.cart)
    $scope.itemsTotal($scope.cart)
  }
  $scope.totalAmount = function(array){
    array.forEach(function(value, index){
      $localStorage.totalCash;
      var sub = $scope.cart.subtotal;
      var total = $scope.cart.total;
      $scope.cart.total += $scope.cart.subtotal;
      $localStorage.totalCash = $scope.cart.total;
    })
  }
  $scope.subTotal = function(item) {
    return (item.quantity * item.price) + (item.quantity * item.price * $scope.tax)
  }
  $scope.itemsTotal = function(cart) {
    return cart.reduce(function(previous, current) {
      return $scope.subTotal(previous) + $scope.subTotal(current);
    }, 0);
  }
  $scope.total = $scope.itemsTotal($scope.cart)
  $scope.product_number = $state.params.id;
  $scope.setArtObject = function(array){
    array.forEach(function(value) {
      if (value.post_number == $scope.product_number) {
        console.log(value);
        $scope.artObject = value;
      }
    })
  }
  $scope.calculateTotal = function(cart){
    console.log('hitting calculate total funciton! ', cart);
    console.log(cart.item.total);
    cart.reduce(function(previous, current){
      return cart.item.total + cart.item.total;
    })
  }
  $scope.setArtObject($scope.posts);
  $scope.findArtObject = function(artObject) {
    return artObject.product_number = $scope.product_number;
  }
  $scope.checkout = function(){
    $state.go('paypal', $scop.cart)
  }
})
