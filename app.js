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
    $stateProvider.state('login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController',
      url: '/'
    }).state('content', {
      templateUrl: 'partials/content.html',
      controller: 'ContentController',
      url: '/content'
    }).state('validating', {
      templateUrl: 'partials/validating.html',
      controller: "ValidatingController",
      url: '/validating/:token'
    }).state('profile', {
      templateUrl: 'partials/profile.html',
      controller: "ProfileController",
      url: '/profile/:id'
    }).state('createpost', {
      templateUrl: 'partials/createpost.html',
      controller: "CreatePostController",
      url: '/createpost'
    }).state('feedback', {
      templateUrl: 'partials/feedback.html',
      controller: "CreatePostController",
      url: '/feedback'
    }).state('postview', {
      templateUrl: 'partials/postview.html',
      controller: "PostViewController",
      url: '/postview/:id'
    })
  });


  app.directive('navBar', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/navbar.html'
    }
  })
