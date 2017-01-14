route.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function route($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
}
