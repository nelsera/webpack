<nav id="leftPanel" class="no-select">
  <div class="nav no-margin margin-top-15">
    <ul class="margin-bottom-25">
      <li ng-repeat="level0 in $ctrl.items">
        <a href=""><span class="menu-item-parent">{{level0.text}}</span></a>

        <ul ng-if="level0.child">
          <li ng-repeat="level1 in level0.child">
            <a href=""><i class="icon-plus"></i><i class="icon-minus hide"></i>{{level1.text}}</a>
            <ul ng-if="level1.child">
              <li ng-repeat="level2 in level1.child">
                <a href="/painel/{{level2.link}}" data-level="2">{{level2.text}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
