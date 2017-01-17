import ang from 'angular';
import $ from 'jquery';

export default class Login {
  /** @ngInject */
  constructor($rootScope, $scope, $rest, flash, $location) {
    $rootScope.title = this.title = 'Login no administrativo';
    $rootScope.htmlClass = 'html-login';

    this.rest = $rest;
    this.form = {};
    this.flash = flash;
    this.location = $location;
    this.rootScope = $rootScope;

    $scope.$on("$destroy", () => delete $rootScope.htmlClass);
  }

  connect(data) {
    this.loadingInline('none', 'block', true);

    this.rest.getToken.save(
      encodeURI(`client_id=appadm&client_secret=BC444D64-037A-4F32-80C6-FD83F7465441&grant_type=password&scope=administrative offline_access&username=${data.username}&password=${data.password}`)
    )
    .$promise
    .then(
      res => this.setSession(res),
      err => {
        this.loadingInline('block', 'none', false);

        if (err.data.error === 'invalid_grant') {
          this.flash.danger('Login e/ou senhas inválidos.');
        }
      }
    );
  }

  setSession(data) {
    localStorage.setItem('wappaAdm', ang.toJson(data));
    this.location.path('/painel');
  }

  loadingInline(text, load, disabled) {
    $('#authBtnSuccessText').css('display', text);
    $('#authBtnSuccessLoad').css('display', load);
    $('#authBtnSuccess').prop('disabled', disabled);
  }
}
