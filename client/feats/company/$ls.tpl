<ol class="no-margin breadcrumb bgWhite">
  <li class="txt-color-blue">Empresa</li>
  <li class="txt-color-blue">Relatórios</li>
  <li class="active">Empresas ativas/inativas/bloqueadas</li>
</ol>

<h2 class="margin-top-40 margin-bottom-25">Empresas ativas/inativas/bloqueadas</h2>

<form>
  <div class="row no-margin">
    <div class="col-md-4 no-margin">
      <input type="text" class="text-inset w100" ng-model="cp.freetext" placeholder="Palavra-chave">
    </div>
    <div class="col-md-3 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="cp.filter">
          <option value disabled selected hidden>Buscar por</option>
          <option value="filter.name">Razão social</option>
          <option value="filter.trade">Nome fantasia</option>
          <option value="filter.city">Cidade</option>
          <option value="filter.cnpj">Cnpj</option>
        </select>
      </label>      
    </div>
    <div class="col-md-2 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="cp.status">
          <option value disabled selected hidden>Status</option>
          <option value="filter.active">Ativas</option>
          <option value="filter.inactive">Inativas</option>
          <option value="filter.blocked">Bloqueadas</option>
        </select>
      </label>      
    </div>
    <div class="col-md-2 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="cp.state">
          <option value disabled selected hidden>Estado</option>
          <option ng-repeat="state in cp.states" value="{{state.Code}}">{{state.Code}}</option>
        </select>
      </label>      
    </div>
    <div class="col-md-1 no-margin">
      <button class="btn btn-primary btn-inline btn-block" ng-click="cp.getInBigode(cp.freetext, cp.filter, cp.status, cp.state)">Buscar</button>
    </div>
  </div>
</form>

<h3 ng-if="cp.Pagination.TotalPages" class="no-margin margin-top-15 margin-bottom-15">Rersultado da busca:</h3>

<div class="bgWhite boxShadow padding-25 no-margin margin-bottom-25 transition">
  <p ng-if="!cp.Companies.length">Nenhuma empresa encontrada.</p>

  <table ng-if="cp.Companies.length" class="table-striped w100">
    <thead>
      <tr>
        <th width="5%">Cód</th>
        <th width="20%">Razão social</th>
        <th width="20%">Nome fantasia</th>
        <th width="15%">Cidade</th>
        <th width="5%">UF</th>
        <th width="15%">Decisor</th>
        <th width="10%">Status</th>
        <th width="10%">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="$cp in cp.Companies">
        <td>{{$cp.Id || 'Nulo'}}</td>
        <td>{{$cp.Name || 'Não informado'}}</td>
        <td>{{$cp.Trade || 'Não informado'}}</td>
        <td>{{$cp.Address.City.Name || 'Não informado'}}</td>
        <td>{{$cp.Address.State.Code}}</td>
        <td>{{$cp.Billing.ResponsibleOne.Name || 'Não informado'}}</td>
        <td>
          <span ng-if="$cp.Status.Active">Ativa</span>
          <span ng-if="$cp.Status.Blocked">Bloqueada</span>
        </td>
        <td>
          <a href="/painel/empresa/visualizar/{{$cp.Id}}" title="Visualizar"><span class="label label-warning"><span class="icon-search"></span></span></a>
          <a href="/painel/empresa/{{$cp.Id}}" title="Editar"><span class="label label-info"><span class="icon-pencil2"></span></span></a>
          <a href="/painel/empresa/excluir/{{$cp.Id}}" title="Excluir"><span class="label label-danger"><span class="icon-trash"></span></span></a>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="text-center" ng-if="cp.Pagination.TotalPages > 1">
    <ul class="pagination">
      <li ng-click="cp.Pagination.Page !== 1 ? cp.goPage(cp.Pagination.Page - 1) : false" class="previous " ng-class="{disabled: cp.Pagination.Page === 1}">
        <a href="" class="icon-arrow-left22"></a>
      </li>
      <li>
        <a>Página {{cp.Pagination.Page}} de {{cp.Pagination.TotalPages}}</a>
      </li>
      <li class="next" ng-class="{disabled: cp.Pagination.Page === cp.Pagination.TotalPages}">
        <a href="" ng-click="cp.Pagination.Page !== cp.Pagination.TotalPages ? cp.goPage(cp.Pagination.Page + 1) : false" class="icon-arrow-right2"></a>
      </li>
    </ul>
  </div>
</div>
