
  app.controller('paypal', function($scope, $http, $state, $localStorage){
    $scope.processInfo = function(){
       $http.post('https://rebelmarkets.herokuapp.com/paypal/create', $scope.payment).then(function(data){
        $state.go('feedback', data)
      })
    }

    $scope.creaditCardNumber = 5597670493752255;
    $scope.firstName = 'Alex';
    $scope.lastName = 'Bennett';
    $scope.currency = 'USD';
    $scope.expireYear = 2018;
    $scope.exireMonth = 02;
    $scope.cvv = 845;
    $scope.cardType = "Mastercard";

  })
