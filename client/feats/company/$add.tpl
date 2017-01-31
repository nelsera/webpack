<ol class="no-margin breadcrumb bgWhite">
  <li class="txt-color-blue">Empresa</li>
  <li class="txt-color-blue">Administração</li>
  <li class="active">Adicionar empresa</li>
</ol>

<h2 class="margin-top-40 margin-bottom-25">{{cp.title}}</h2>

<div class="contentTabs no-select display-block overflow-hidden">
  <a href="#" class="Tabs" ng-class="{active:cp.tab === 1}"> 
    <span class="label label-primary margin-right-5">1</span>
    Informações da empresa
  </a>
  <a href="#" class="Tabs"  ng-class="{active:cp.tab === 2}">
    <span class="label label-primary margin-right-5">2</span>
    Informações do gestor
  </a>
  <a href="#" class="Tabs" ng-class="{active:cp.tab === 3}">
    <span class="label label-primary margin-right-5">3</span>
    Condições de faturamento e entrega
  </a>
  <a href="#" class="Tabs" ng-class="{active:cp.tab === 4}">
    <span class="label label-primary margin-right-5">4</span>
    Serviço intermediação
  </a>
</div>
<div class="bgWhite boxShadow padding-25 no-margin margin-bottom-25 transition">
  <form novalidate name="Infos" ng-show="cp.tab === 1">
    <h3 class="no-margin margin-bottom-15">Informações da empresa</h3>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6"> 
        <label class="label-block">
          Razão social*
          <input 
            type="text" 
            ng-model="cp.Infos.Trade" 
            class="text w100 text-upper" 
            maxlength="50" 
            required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Nome fantasia*
          <input type="text" ng-model="cp.Infos.Name" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          CNPJ*
          <input type="text" ng-model="cp.Infos.Cnpj" class="text w100 text-upper" ng-model="cp.initializedCpfCnpj" ui-br-cpfcnpj-mask required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Inscrição estadual*
          <input id="isento" ng-model="cp.isFree" ng-click="cp.isFree ? cp.Infos.Registration.State='Isento' : cp.Infos.Registration.State=''" type="checkbox" class="checkbox">
          <label for="isento" class="margin-left-10">Isento</label>
          <input 
          type="text" 
          ng-model="cp.Infos.Registration.State" 
          class="text w100 text-upper" 
          maxlength="14" 
          ng-readonly="cp.isFree"
          required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Inscrição municipal
          <input type="text" ng-model="cp.Infos.Registration.City" class="text w100 text-upper" maxlength="15">
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          CEP*
          <input type="text" ng-model="cp.Infos.Address.Zipcode" class="text w100 text-upper" ui-br-cep-mask required ng-blur="cp.getAddress($event, 'Infos')">

          <a href="http://m.correios.com.br/movel/buscaCep.do" target="_blank" class="absolute bottom-10 right-5 label-link">Não sei o cep</a>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Endereço*
          <input type="text" ng-model="cp.Infos.Address.Street" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Número*
          <input type="text" class="text w100 text-upper" ng-model="cp.Infos.Address.Number" ui-number-mask="0" required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Complemento
          <input type="text" ng-model="cp.Infos.Address.Complement" class="text w100 text-upper" maxlength="30">
        </label>
      </div>
    </div>

    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Bairro*
          <input type="text" ng-model="cp.Infos.Address.District.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Cidade*
          <input type="text" ng-model="cp.Infos.Address.City.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="select w100">
          <span class="label-block">Estado*</span>
          <select ng-model="cp.Infos.Address.State.Code" class="col-xs-12 select-default" required>
            <option disabled selected hidden></option>
            <option ng-repeat="state in cp.states" value="{{state.Code}}">{{state.Code}}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="select w100">
          <span class="label-block">Porte</span>
          <select ng-model="cp.Infos.Size" class="col-xs-12 select-default" required>
            <option disabled selected hidden></option>  
            <option ng-repeat="size in cp.InfosSizes" value="{{size.Id}}">{{size.Description}}</option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Telefone comercial*
          <input type="text" class="text w100 text-upper" ng-model="cp.Infos.Phone.Number" ui-br-phone-number required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="select w100">
          <span class="label-block">Segmento e/ou setor*</span>
          <select ng-model="cp.Infos.Segment" class="col-xs-12 select-default" required>
            <option disabled selected hidden></option>  
            <option ng-repeat="segment in cp.InfosSegments" value="{{segment.Id}}">{{segment.Description}}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="select w100">
          <span class="label-block">Categoria*</span>
          <select ng-model="cp.Infos.Category" class="col-xs-12 select-default" required>
            <option disabled selected hidden></option>
            <option ng-repeat="category in cp.InfosCategories" value="{{category.Id}}">{{category.Description}}</option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Grupo empresarial
          <input type="text" class="text w100 text-upper" ng-model="cp.Infos.Group.Name" maxlength="50" ng-blur="Infos.$valid ? cp.tab = 2 : null">
        </label>
      </div>
    </div>

    <div class="no-margin row margin-top-25">
      <button type="reset" class="btn btn-default btn-lg pull-left">Cancelar</button>
      <button type="button" class="btn btn-success btn-lg margin-left-10 pull-right" ng-disabled="Infos.$invalid" ng-click="cp.tab = 2">Avançar</button>
    </div>      
  </form>

  <form novalidate name="Manager" ng-show="cp.tab === 2">
    <h3 class="no-margin margin-bottom-15">Informações do gestor</h3>

    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Nome*
          <input type="text" ng-model="cp.Manager.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Área em que trabalha*
          <input type="text" ng-model="cp.Manager.Department" class="text w100 text-upper" maxlength="30" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Cargo*
          <input type="text" ng-model="cp.Manager.JobTitle" class="text w100 text-upper" maxlength="30" required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          E-mail*
          <input type="email" ng-model="cp.Manager.Email" class="text w100 text-upper" maxlength="250" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-6">
        <label class="label-block">
          Telefone comercial*
          <input type="text" ng-model="cp.Manager.CommercialPhone.Number" class="text w100 text-upper" maxlength="14" ui-br-phone-number required>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="label-block">
          Celular
          <input type="text" ng-model="cp.Manager.PrivatePhone.Number" class="text w100 text-upper" maxlength="15" ui-br-phone-number ng-blur="Manager.$valid ? cp.tab = 3 : null">
        </label>
      </div>
    </div>
    
    <div class="no-margin row margin-top-25">
      <button type="button" class="btn btn-default btn-lg pull-left" ng-click="cp.tab = 1">Voltar</button>
      <button type="button" class="btn btn-success btn-lg margin-left-10 pull-right" ng-disabled="Manager.$invalid" ng-click="cp.tab = 3">Avançar</button>
    </div>
  </form>

  <form novalidate name="Billing" ng-show="cp.tab === 3">
    <h3 class="no-margin margin-bottom-15">Informações do faturamento</h3>
    <div class="no-margin row margin-bottom-15">
      <label class="check-person">
        <input type="checkbox" class="ios-switch tinyswitch" ng-model="cp.switchAddress" ng-click="cp.getInfos(cp.Infos.Address)">
        <div class="display-inline-block margin-right-5"><div></div></div>
        <span class="relative">Usar o mesmo endereço da empresa para faturamento</span>
      </label>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-3">
        <label class="label-block">
          CEP*
          <input type="text" class="text w100 text-upper" ng-model="cp.Billing.Address.Zipcode" ng-blur="(cp.switchAddress) ? null : cp.getAddress($event, 'Billing')" ui-br-cep-mask required>
          <a href="http://m.correios.com.br/movel/buscaCep.do" class="absolute bottom-10 right-10 label-link" target="_blank">Não sei o cep</a>
        </label>
      </div>
      <div class="no-margin col-md-7">
        <label class="label-block">
          Endereço*
          <input type="text" ng-model="cp.Billing.Address.Street" class="text w100 text-upper" maxlength="100" required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="label-block">
          Número*
          <input type="text" class="text w100 text-upper" ng-model="cp.Billing.Address.Number" ui-number-mask="0" required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Complemento
          <input type="text" ng-model="cp.Billing.Address.Complement" class="text w100 text-upper" maxlength="30">
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          Bairro*
          <input type="text" ng-model="cp.Billing.Address.District.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Cidade*
          <input type="text" ng-model="cp.Billing.Address.City.Name" class="text w100 text-upper" maxlength="50" required>
        </label>
      </div>
      <div class="no-margin col-md-2">
        <label class="select w100">
          <span class="label-block">Estado*</span>
          <select ng-model="cp.Billing.Address.State.Code" class="col-xs-12 select-default" required>
            <option disabled selected hidden></option>
            <option ng-repeat="state in cp.states" value="{{state.Code}}">{{state.Code}}</option>
          </select>
        </label>
      </div>
    </div>
    <h3 class="no-margin margin-bottom-15">Responsáveis</h3>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-4">
        <label class="label-block">
          Responsável pelo faturamento*
          <input type="text" ng-model="cp.Billing.ResponsibleOne.Name" required class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          E-mail do responsável pelo faturamento*
          <input type="email" ng-model="cp.Billing.ResponsibleOne.Email" required class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Telefone do responsável*
          <input type="text" ng-model="cp.Billing.ResponsibleOne.Phone.Number" class="text w100 text-upper" ui-br-phone-number required>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-4">
        <label class="label-block">
          2º Responsável pelo faturamento
          <input type="text" ng-model="cp.Billing.ResponsibleTwo.Name" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          E-mail do 2º responsável pelo faturamento
          <input type="email" ng-model="cp.Billing.ResponsibleTwo.Email" class="text w100 text-upper" maxlength="250">
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Telefone do 2º responsável
          <input type="text" ng-model="cp.Billing.ResponsibleTwo.Phone.Number" class="text w100 text-upper" ui-br-phone-number ng-blur="Billing.$valid ? cp.tab = 4 : null">
        </label>
      </div>
    </div>
    <div class="no-margin row margin-top-25">
      <button type="button" class="btn btn-default btn-lg pull-left" ng-click="cp.tab = 2">Voltar</button>
      <button type="button" class="btn btn-success btn-lg margin-left-10 pull-right" ng-disabled="Billing.$invalid" ng-click="cp.tab = 4">Avançar</button>
    </div>
  </form>

  <form novalidate name="TaxiProduct" ng-show="cp.tab === 4">
    <h3 class="no-margin margin-bottom-15">Produto de interesse</h3>
    <div class="no-margin row margin-bottom-25">
      <div class="no-margin col-md-4">
        <label class="label-block">
          Nome
          <input type="text" class="text w100 text-upper" value="Wappa Táxi" required readonly>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Estimativa de gastos mensal (R$)
          <input type="text" class="text w100 text-upper" ng-model="cp.TaxiProduct.Credit.Total" ui-money-mask="0" maxlength="17" required>
        </label>
      </div>
      <div class="no-margin col-md-4">
        <label class="label-block">
          Limite de crédito (R$)
          <input type="text" class="text w100 text-upper" ng-model="cp.TaxiProduct.Credit.Limit" ui-money-mask="0" maxlength="17" required>
        </label>
      </div>
    </div>

    <h3 class="no-margin margin-bottom-15">Taxas, prazos sugeridos e total mensal</h3>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Tipo de contrato
          <input type="text" class="text w100 text-upper" value="Reembolso" readonly required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="select w100">
          <span class="label-block">Prazo</span>
          <select 
            ng-model="cp.TaxiProduct.DeadlineInDays" 
            class="col-xs-12 select-default"
            ng-options="option.value as option.name for option in cp.days"
            required>
            <option disabled selected hidden></option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="select w100">
          <span class="label-block">Dia de redundância</span>
          <select 
            ng-model="cp.TaxiProduct.RedundancyDay"
            class="col-xs-12 select-default"
            ng-options="option.value as option.name for option in cp.daysMonth"
            ng-init="cp.TaxiProduct.RedundancyDay=1"
            required>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="select w100">
          <span class="label-block">Tipo de taxa</span>
          <select
            ng-model="cp.TaxiProduct.Tax.Type"
            class="col-xs-12 select-default"
            ng-options="option.Id as option.Description for option in cp.TaxiTaxTypes"
            ng-init="cp.TaxiProduct.Tax.Type=1"
            required>
          </select>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-bottom-15">
      <div class="no-margin col-md-3">
        <label class="label-block">
          Taxa
          <input type="text" class="text w100 text-upper" ng-model="cp.TaxiProduct.Tax.Value" ui-percentage-mask="2" maxlength="8" required>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="label-block">
          <input type="radio" ng-model="cp.selectRange" ng-click="cp.TaxiProduct.Period.Start = undefined; cp.TaxiProduct.Period.End = undefined" value="period" id="optionsRadios1" class="radio">
          <label for="optionsRadios1">Início período</label>
          <div class="no-margin row input" ng-class="{disabled: cp.selectRange !== 'period'}">
            <div class="no-margin col-md-5 no-padding">
              <input type="text" class="text w100 text-upper" ng-model="cp.TaxiProduct.Period.Start" ui-number-mask="0" maxlength="2" ng-disabled="cp.selectRange !== 'period'">
            </div>
            <div class="no-margin col-md-2 no-padding text-center">
              <div class="margin-top-15">e</div>
            </div>
            <div class="no-margin col-md-5 no-padding">
              <input type="text" class="text w100 text-upper" ng-model="cp.TaxiProduct.Period.End" ui-number-mask="0" maxlength="2" ng-disabled="cp.selectRange !== 'period'">
            </div>
          </div>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <label class="select w100" ng-class="{disabled: cp.selectRange !== 'days'}">
          <input type="radio" ng-model="cp.selectRange" ng-click="cp.TaxiProduct.CloseInDays = undefined" value="days" id="optionsRadios2" class="radio">
          <label for="optionsRadios2">Fechar em (dias)</label>
          <select 
            ng-model="cp.TaxiProduct.CloseInDays" 
            class="col-xs-12 select-default"
            ng-options="option.value as option.name for option in cp.days" 
            ng-disabled="cp.selectRange !== 'days'">
            <option disabled selected hidden></option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-3">
        <input id="enviarBoleto" ng-model="cp.PaymentSlip.Send" type="checkbox" class="checkbox" ng-init="cp.PaymentSlip.Send=true">
        <label for="enviarBoleto" class="margin-top-25">Enviar boleto</label>
      </div>
    </div>
    <div class="no-margin row">
      <div class="no-margin col-md-6">
        <label class="select w100">
          <span class="label-block">Responsável pós-venda</span>
          <select
            ng-model="cp.TaxiProduct.PostSaleResponsible"
            class="col-xs-12 select-default" 
            required>
            <option disabled selected hidden></option>
            <option ng-repeat="postSaleResponsible in cp.PostSaleResponsibles" value="{{postSaleResponsible.Id}}">{{postSaleResponsible.Description}}</option>
          </select>
        </label>
      </div>
      <div class="no-margin col-md-6">
        <label class="select w100">
          <span class="label-block">Responsável comercial</span>
          <select
            ng-model="cp.TaxiProduct.CommercialResponsible"
            class="col-xs-12 select-default" 
            required>
            <option disabled selected hidden></option>
            <option ng-repeat="commercialSaleResponsible in cp.CommercialSaleResponsibles" value="{{commercialSaleResponsible.Id}}">{{commercialSaleResponsible.Description}}</option>
          </select>
        </label>
      </div>
    </div>
    <div class="no-margin row margin-top-50">
      <button type="button" class="btn btn-default btn-lg pull-left" ng-click="cp.tab = 3">Voltar</button>
      <button type="submit" ng-click="cp.signIn(cp.Infos, cp.Manager, cp.Billing, cp.PaymentSlip, cp.TaxiProduct)" class="btn btn-primary btn-lg margin-left-10 pull-right" ng-disabled="TaxiProduct.$invalid">Concluir o cadastro</button>
    </div>
  </form>
</div>