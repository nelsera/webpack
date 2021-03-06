<ol class="no-margin breadcrumb bgWhite">
  <li class="txt-color-blue">Empresa</li>
  <li class="txt-color-blue">Estabelecimento</li>
  <li class="active">Adicionar</li>
</ol>

<h2 class="margin-top-40 margin-bottom-25">{{etb.title}}</h2>

<div class="contentTabs no-select display-block overflow-hidden">
  <a href="#" class="Tabs" ng-class="{active:etb.tab === 1}"> 
    <span class="label label-primary margin-right-5">1</span>
    Identificação
  </a>
  <a href="#" class="Tabs"  ng-class="{active:etb.tab === 2}">
    <span class="label label-primary margin-right-5">2</span>
    Endereço
  </a>
  <a href="#" class="Tabs" ng-class="{active:etb.tab === 3}">
    <span class="label label-primary margin-right-5">3</span>
    Informações comerciais
  </a>
</div>
<div class="bgWhite boxShadow padding-25 no-margin margin-bottom-25 transition">
  <form novalidate name="Infos" ng-show="etb.tab === 1">
    <h3 class="no-margin margin-bottom-15">Identificação</h3>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-4"> 
        <label class="label-block">
          ID do estabelecimento*
          <input 
            type="text" 
            ng-model="etb.Infos.ProtocolNumber" 
            class="text w100 text-upper" 
            maxlength="6"
            ui-number-mask="0" 
            required>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Produto*
          <input type="text" value="Wappa Táxi" class="text w100 text-upper" required readonly>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          CNPJ*
          <input type="text" ng-model="etb.Infos.Cnpj" class="text w100 text-upper" ui-br-cpfcnpj-mask required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Razão social*
          <input type="text" ng-model="etb.Infos.CompanyName" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Nome fantasia*
          <input type="text" ng-model="etb.Infos.FantasyName" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Inscrição estadual*
          <input id="isento" ng-model="etb.isFree" ng-click="etb.isFree ? etb.StateRegistration='Isento' : etb.StateRegistration=''" type="checkbox" class="checkbox">
          <label for="isento" class="margin-left-10">Isento</label>
          <input type="text" ng-model="etb.StateRegistration" class="text w100 text-upper" maxlength="15">
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Inscrição municipal
          <input type="text" ng-model="etb.Infos.MunicipalRegistration" class="text w100 text-upper" maxlength="15">
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          E-mail*
          <input type="email" ng-model="etb.Infos.Email" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Telefones de contato*
          <input type="text" ng-model="etb.Infos.ComercialPhoneOne" class="text w100 text-upper" ui-br-phone-number required ng-blur="Infos.$valid ? etb.tab = 2 : null">
        </label>
      </div>
    </div>

    <div class="no-margin row margin-top-25">
      <button type="reset" class="btn btn-default btn-lg pull-left">Cancelar</button>
      <button type="button" class="btn btn-success btn-lg margin-left-10 pull-right" ng-disabled="Infos.$invalid" ng-click="etb.tab = 2">Avançar</button>
    </div>      
  </form>
  <form novalidate name="Address" ng-show="etb.tab === 2">
    <h3 class="no-margin margin-bottom-15">Endereço</h3>

    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-3">
        <label class="label-block">
          CEP*
          <input type="text" class="text w100 text-upper" ng-model="etb.Address.Zipcode" ui-br-cep-mask required ng-blur="etb.getAddress($event, 'Address')">
          <a href="http://m.correios.com.br/movel/buscaCep.do" class="absolute bottom-10 right-10 label-link" target="_blank">Não sei o cep</a>
        </label>
      </div>
      <div class="no-margin col-md-7">
        <label class="label-block">
          Endereço*
          <input type="text" ng-model="etb.Address.Street" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="label-block">
          Número*
          <input type="text" class="text w100 text-upper" ng-model="etb.Address.Number" ui-number-mask="0" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Complemento
          <input type="text" ng-model="etb.Address.Complement" class="text w100 text-upper" maxlength="30">
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Bairro*
          <input type="text" ng-model="etb.Address.District.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Cidade*
          <input type="text" ng-model="etb.Address.City.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="select w100">
          <span class="label-block">Estado*</span>
          <select ng-model="etb.Address.State.Code" class="col-xs-12 select-default" required ng-blur="Address.$valid ? etb.tab = 3 : null">
            <option disabled selected hidden></option>
            <option ng-repeat="state in etb.states" value="{{state.Code}}">{{state.Code}}</option>
          </select>
        </label>
      </div>
    </div>    
    
    <div class="no-margin row margin-top-25">
      <button type="button" class="btn btn-default btn-lg pull-left" ng-click="etb.tab = 1">Voltar</button>
      <button type="button" class="btn btn-success btn-lg margin-left-10 pull-right" ng-disabled="Address.$invalid" ng-click="etb.tab = 3">Avançar</button>
    </div>
  </form>
  <form novalidate name="Commercial" ng-show="etb.tab === 3">
    <h3 class="no-margin margin-bottom-15">Informações comerciais</h3>
    
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Quantidade de funcionários*
          <input type="text" ng-model="etb.Commercial.qtdfuncio" class="text w100 text-upper" maxlength="10" ui-number-mask="0" required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Faturamento mensal
          <input type="text" ng-model="etb.Commercial.fatuMensal" class="text w100 text-upper" ui-money-mask="0">
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Interlocutor*
          <input type="text" maxlength="100" ng-model="etb.Commercial.interlocutor" class="text w100 text-upper" required>
        </label>
      </div>
    </div>

    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Cargo*
          <input type="text" ng-model="etb.Commercial.inscricaoMunicipal" class="text w100 text-upper" maxlength="10" required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Telefone de contato
          <input type="text" ng-model="etb.Commercial.tel" class="text w100 text-upper" ui-br-phone-number>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          E-mail
          <input type="email" maxlength="100" ng-model="etb.Commercial.zipcode" class="text w100 text-upper" required>
        </label>
      </div>
    </div>
    <h3 class="no-margin margin-bottom-15">Responsáveis</h3>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-4">
        <label class="label-block">
          Responsável pelo faturamento*
          <input type="text" ng-model="etb.Commercial.resp1" required class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          E-mail do responsável pelo faturamento*
          <input type="email" ng-model="etb.Commercial.resp1Email" required class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Telefone do responsável*
          <input type="text" ng-model="etb.Commercial.resp1Tel" class="text w100 text-upper" ui-br-phone-number required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-4">
        <label class="label-block">
          2º Responsável pelo faturamento
          <input type="text" ng-model="etb.Commercial.resp2" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          E-mail do 2º responsável pelo faturamento
          <input type="email" ng-model="etb.Commercial.resp2Email" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Telefone do 2º responsável
          <input type="text" ng-model="etb.Commercial.resp2Tel" class="text w100 text-upper" ui-br-phone-number>
        </label>
      </div>
    </div>

    <h3 class="no-margin margin-bottom-15">Informações bancárias</h3>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-4">
        <label class="label-block">
          Banco onde possui conta jurídica
          <input type="text" ng-model="etb.Commercial.banco" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Agência
          <input type="text" ng-model="etb.Commercial.agencia" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Conta
          <input type="text" ng-model="etb.Commercial.conta" class="text w100 text-upper">
        </label>
      </div>
    </div>

    <h3 class="no-margin margin-bottom-15">Comercial</h3>
    <div class="no-margin row">
      <div class="no-margin col-md-2">
        <label class="select w100">
          <span class="label-block">Prazo de reembolso</span>
          <select
            ng-model="etb.Commercial.prazoReemb"
            class="col-xs-12 select-default"
            ng-options="option.value as option.name for option in etb.daysRefund"
            required>
            <option disabled selected hidden></option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Tipo de taxa
          <input 
            type="text"
            class="text w100 text-upper"
            value="Percentual da transação"
            readonly 
            required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="label-block">
          Taxa de administração
          <input type="text" ng-model="etb.Commercial.taxAdm" class="text w100 text-upper" ui-percentage-mask="2">
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="select w100">
          <span class="label-block">Prazo de recebimento</span>
          <select
            ng-model="etb.Commercial.prazoReceb"
            class="col-xs-12 select-default"
            ng-options="option.value as option.name for option in etb.daysReceiving"
            required>
            <option disabled selected hidden></option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-2">
        Início período
        <div class="no-margin row">
          <div class="no-margin col-md-5 no-padding">
            <input type="text" class="text w100 text-upper" ng-model="etb.Commercial.begin" ui-number-mask="0" maxlength="2">
          </div>
          <div class="no-margin col-md-2 no-padding text-center">
            <div class="margin-top-15">e</div>
          </div>
          <div class="no-margin col-md-5 no-padding">
            <input type="text" class="text w100 text-upper" ng-model="etb.Commercial.end" ui-number-mask="0" maxlength="2">
          </div>
        </div>
      </div>
    </div>

    <div class="no-margin row margin-top-50">
      <button type="button" class="btn btn-default btn-lg pull-left" ng-click="etb.tab = 2">Voltar</button>
      <button type="submit" ng-click="etb.signIn(etb.Infos)" class="btn btn-primary btn-lg margin-left-10 pull-right" ng-disabled="Commercial.$invalid">Concluir o cadastro</button>
    </div>
  </form>
</div>