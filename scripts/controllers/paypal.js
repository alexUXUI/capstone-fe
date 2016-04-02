
  app.controller('paypal', function($scope, $http, $state, $localStorage){
    $scope.processInfo = function(){
       $http.post('https://rebelmarkets.herokuapp.com/paypal/create', $scope.payment).then(function(data){
        $state.go('feedback', data)
      })
    }

    $scope.creaditCardNumber = xxxxxxxxxx;
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
    $scope.currency = 'USD';
    $scope.expireYear = 2018;
    $scope.exireMonth = 02;
    $scope.cvv = xxx;
    $scope.cardType = "Mastercard";

  })
