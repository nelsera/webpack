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

    $scope.$on('$destroy', () => delete $rootScope.htmlClass);
  }

  connect(req) {
    this.loadingInline('none', 'block', true);

    const post = encodeURI(`client_id=appadm&client_secret=BC444D64-037A-4F32-80C6-FD83F7465441&grant_type=password&scope=administrative offline_access&username=${req.username}&password=${req.password}`);

    this.rest.getToken(post)
      .then(res => this.setSession(res))
      .catch(err => {
        this.loadingInline('block', 'none', false);

        if (err.data.error === 'invalid_grant') {
          this.flash.danger('Usuário e/ou senhas inválidos.');
        }
      });
  }

  setSession(req) {
    localStorage.setItem('wappaAdm', ang.toJson(req));
    this.location.path('/painel');
  }

  loadingInline(text, load, disabled) {
    $('#authBtnSuccessText').css('display', text);
    $('#authBtnSuccessLoad').css('display', load);
    $('#authBtnSuccess').prop('disabled', disabled);
  }
}
