var app = angular.module('capstone', ["ui.router", 'ngStorage'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
       return {
       'request': function (config) {
         config.headers = config.headers || {};
         if ($localStorage.token) {
            config.headers.token = $localStorage.token;
         }
        return config;
       },
       'responseError': function (response) {
           if (response.status === 401 || response.status === 403) {
               $location.path('/login');
           }
           return $q.reject(response);
         }
       };
    }]);
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      templateUrl: 'index.html',
      controller: 'HomeController',
      url: '/'
    }).state('login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController',
      url: '/login'
    }).state('profile', {
      templateUrl: 'partials/content.html',
      controller: 'ContentController',
      url: '/content'
    }).state('validating', {
      templateUr: 'partials/validating.html',
      controller: "ValidatingController",
      url: '/validating/:token'
    });
  });
  app.controller('HomeController', function($scope, $http){
    console.log('hello from HOME');
  })
  app.controller('LoginController', function($scope, $http){
    console.log('hello from HOME');
  })
  app.controller('ContentController', function($scope, $http){
    console.log('hello form-horizontalm HOME');
    $http.get('http://localhost:3000/getusers').then(function(data){
      console.log(data);
    })
  })
  app.controller('ValidatingController', function($scope, $http, $stateParams, $localStorage, $location){
    //Get token out of header and set in local storage
    var params = $stateParams;
    var tokenParts = params.token.split('.')
    var body = tokenParts[1];
    var userObject = atob(body);
    var userIdentity = JSON.parse(userObject);
    var userUniqueId = userIdentity.id
    console.log('at long last, the user\'s identity', userUniqueId);
    $localStorage.token = $stateParams.token;
    $location.path('/content')
  })
