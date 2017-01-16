export default class Login {
  /** @ngInject */
  constructor($rootScope, $scope, $rest, $log) {
    $rootScope.title = this.title = 'Login no administrativo';
    $rootScope.htmlClass = 'html-login';
    this.rest = $rest;
    this.log = $log;

    $scope.$on("$destroy", () => {
      delete $rootScope.htmlClass;
    });
  }

  connect() {
    this.rest.getToken.save('client_id=appadm&client_secret=BC444D64-037A-4F32-80C6-FD83F7465441&grant_type=password&scope=collaborator offline_access&username=99rafa18&password=pPk7X');
  }
}
