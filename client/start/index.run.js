/** @ngInject */
export default function run($location) {
  if (localStorage.getItem('wappaAdm')) {
    if ($location.path() === '/entrar') {
      $location.path('/painel');
    }
  } else {
    $location.path('/entrar');
  }
}
