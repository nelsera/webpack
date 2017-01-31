<div ng-show="flash.message" class="alert alert-{{flash.type}} alert-fixed">
  <p><b>{{flash.info}}!</b> {{flash.message}}</p>
</div>

<topbar></topbar>
<navbar></navbar>
<main id="main" role="main">            
  <div id="content" ui-view />
</main>