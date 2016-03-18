
  app.controller('paypal', function($scope, $http){
    console.log('hello from pay pal controller');
    $scope.data = {}

    $scope.processInfo = function(){
      console.log('process being called');
       $http.post('http://localhost:3000/paypal/create', $scope.payment).then(function(data){
        console.log(data);
      })
    }

    console.log('this is scope', $scope.payment);

    /// card stuffs
    $scope.card = {
      name: 'Mike Brown',
      number: '5555 4444 3333 1111',
      expiry: '11 / 2020',
      cvc: '123'
    };

    $scope.cardPlaceholders = {
      name: 'Your Full Name',
      number: 'xxxx xxxx xxxx xxxx',
      expiry: 'MM/YY',
      cvc: 'xxx'
    };

    $scope.cardMessages = {
      validDate: 'valid\nthru',
      monthYear: 'MM/YYYY',
    };

    $scope.cardOptions = {
      debug: false,
      formatting: true
    };
  })
