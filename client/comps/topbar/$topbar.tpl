<header id="header">
  <div id="hide-menu" class="pull-left transition">
    <a href="javascript:;" data-action="toggleMenu" title="Menu">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

  <a href="panel" ng-click="$ctrl.panel()" title="Voltar ao início" id="logo-group" class="pull-left">
    <span class="icon-logo15-preto-hor-4"></span>
    <span class="logo-mobile icon-logo-wappa txt-color-white relative"></span>
  </a>

  <div class="pull-right">
    <div id="dados" class="pull-left relative">
      <a href="#/meus-dados" title="Meus dados" class="display-inline-block">
        <i class="icon-user pull-left margin-right-5"></i>
        <div class="user-info margin-right-5 pull-left">
          <span class="fontReg display-block font15">Nome do colaborador</span>
          <span class="display-block">email@colaborador.com.br</span>
        </div>
      </a>
    </div>

    <div id="logout" class="pull-left">
      <a href="javascript:;" ng-click="$ctrl.logOut()" title="Sair">
        <span class="pull-left relative">Sair</span> <i class="icon-exit pull-left"></i>
      </a>
    </div>
  </div>
</header>
