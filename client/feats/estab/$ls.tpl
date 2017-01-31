<ol class="no-margin breadcrumb bgWhite">
  <li class="txt-color-blue">Estab. credenciado</li>
  <li class="txt-color-blue">Relatórios</li>
  <li class="active">Estab. credenciados ativos/inativos/bloqueados</li>
</ol>

<h2 class="margin-top-40 margin-bottom-25">Estab. credenciados ativos/inativos/bloqueados</h2>

<form>
  <div class="row no-margin">
    <div class="col-md-4 no-margin">
      <input type="text" class="text-inset w100" ng-model="etb.freetext" placeholder="Palavra-chave">
    </div>
    <div class="col-md-3 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="etb.filter">
          <option value disabled selected hidden>Buscar por</option>
          <option value="filter.companyName">Razão social</option>
          <option value="filter.fantasyName">Nome fantasia</option>
          <option value="filter.city">Cidade</option>
          <option value="filter.cnpj">Cnpj</option>
        </select>
      </label>      
    </div>
    <div class="col-md-2 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="etb.status">
          <option value disabled selected hidden>Status</option>
          <option value="filter.active">Ativas</option>
          <option value="filter.inactive">Inativas</option>
          <option value="filter.blocked">Bloqueadas</option>
        </select>
      </label>      
    </div>
    <div class="col-md-2 no-margin">
      <label class="select-inset w100 bgWhite">
        <select class="select-default" ng-model="etb.state">
          <option value disabled selected hidden>Estado</option>
          <option ng-repeat="state in etb.states" value="{{state.Code}}">{{state.Code}}</option>
        </select>
      </label>      
    </div>
    <div class="col-md-1 no-margin">
      <button class="btn btn-primary btn-inline btn-block" ng-click="etb.getInBigode(etb.freetext, etb.filter, etb.status, etb.state)">Buscar</button>
    </div>
  </div>
</form>

<h3 ng-if="etb.Pagination.TotalPages" class="no-margin margin-top-15 margin-bottom-15">Rersultado da busca:</h3>

<div class="bgWhite boxShadow padding-25 no-margin margin-top-15 margin-bottom-25 transition">
  <p ng-if="!etb.Estabs.length" class="no-margin">Nenhum estab. credenciado encontrado.</p>

  <table ng-if="etb.Estabs.length" class="table-striped w100">
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
      <tr ng-repeat="$etb in etb.Estabs">
        <td>{{$etb.Id || 'Nulo'}}</td>
        <td>{{$etb.CompanyName || 'Não informado'}}</td>
        <td>{{$etb.FantasyName || 'Não informado'}}</td>
        <td>{{$etb.Address.City.Name || 'Não informado'}}</td>
        <td>{{$etb.Address.State.Code || '-'}}</td>
        <td>{{$etb.Billing.ResponsibleOne.Name || 'Não informado'}}</td>
        <td>
          <span ng-if="$etb.Status.Active">Ativa</span>
          <span ng-if="$etb.Status.Blocked">Bloqueada</span>
          <span ng-if="!$etb.Status">-</span>
        </td>
        <td>
          <a href="/painel/empresa/visualizar/{{$etb.Id}}" title="Visualizar"><span class="label label-warning"><span class="icon-search"></span></span></a>
          <a href="/painel/empresa/{{$etb.Id}}" title="Editar"><span class="label label-info"><span class="icon-pencil2"></span></span></a>
          <a href="/painel/empresa/excluir/{{$etb.Id}}" title="Excluir"><span class="label label-danger"><span class="icon-trash"></span></span></a>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="text-center" ng-if="etb.Pagination.TotalPages > 1">
    <ul class="pagination">
      <li ng-click="etb.Pagination.Page !== 1 ? etb.goPage(etb.Pagination.Page - 1) : false" class="previous " ng-class="{disabled: etb.Pagination.Page === 1}">
        <a href="" class="icon-arrow-left22"></a>
      </li>
      <li>
        <a>Página {{etb.Pagination.Page}} de {{etb.Pagination.TotalPages}}</a>
      </li>
      <li class="next" ng-class="{disabled: etb.Pagination.Page === etb.Pagination.TotalPages}">
        <a href="" ng-click="etb.Pagination.Page !== etb.Pagination.TotalPages ? etb.goPage(etb.Pagination.Page + 1) : false" class="icon-arrow-right2"></a>
      </li>
    </ul>
  </div>
</div>
