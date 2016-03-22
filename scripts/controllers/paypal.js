
  app.controller('paypal', function($scope, $http, $state, $localStorage){
    console.log('hello from pay pal controller');


    $scope.processInfo = function(){
      console.log('process being called');
       $http.post('https://rebelmarkets.herokuapp.com/paypal/create', $scope.payment).then(function(data){
        console.log(data);
        $state.go('feedback', data)
      })
    }
    console.log('this is scope', $scope.cart);
  })
