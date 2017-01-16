/** @ngInject */
export default function run($location) {
  const logado = 1;

  if (logado) {
    if ($location.path() === '/entrar') {
      $location.path('/painel');
    }
  } else {
    $location.path('/entrar');
  }
}
