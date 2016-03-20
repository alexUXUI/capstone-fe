
  app.controller('paypal', function($scope, $http, $state){
    console.log('hello from pay pal controller');
    $scope.data = {}

    $scope.processInfo = function(){
      console.log('process being called');
       $http.post('http://localhost:3000/paypal/create', $scope.payment).then(function(data){
        console.log(data);
        $state.go('feedback', data)
      })
    }

    console.log('this is scope');

  })
