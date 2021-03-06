<div ng-show="flash.message" class="alert alert-{{flash.type}} alert-fixed">
  <p><b>{{flash.info}}!</b> {{flash.message}}</p>
</div>

<div class="msgErro"><span></span></div>
<div class="row padding-0">
  <div class="no-margin col-md-12 content-login">
    <div class="global-container">
      <div class="page-wrapper">
        <div id="page-internal" class="container login">
          <div class="inner">
            <div class="logo">
              <i class="icon-logo-wappa"></i>
            </div>
            <div class="link-atendimento no-select">{{au.teste}}Administrativo</div>
            <div class="formLogin">
              <form novalidate name="auth" ng-submit="au.connect(au.form)">
                <label class="no-select display-block">Usuário</label>
                <input 
                  type="text"
                  tabindex="1"
                  ng-model="au.form.username"
                  class="w100"
                  maxlength="10"
                  autofocus
                  required>
                
                <label class="no-select display-block">Senha</label>
                <input 
                  type="password"
                  tabindex="2"
                  ng-model="au.form.password"
                  maxlength="8"
                  class="w100"
                  required>

                <button id="authBtnSuccess" class="btn btn-success margin-top-5" type="submit" ng-disabled="auth.$invalid">
                  <span id="authBtnSuccessText" class="bold">Entrar</span>
                  <span id="authBtnSuccessLoad" class="loading__inline"></span>
                </button>
                <div class="validacaoFormLogin no-select"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
