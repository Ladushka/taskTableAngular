var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination','ui.grid.cellNav','ui.grid.pinning']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http)  {
  $scope.gridOptions2 = {
    modifierKeysToMultiSelectCells: true,
    showGridFooter: true,
    enablePaginationControls: false,
    paginationPageSize: 5,
    columnDefs: [
      {name:'id'},
      { name: 'firstName' },
      { name: 'lastName' },
      { name: 'company' }
    ]
  };

  /*$scope.currentFocused = "";

  $scope.getCurrentFocus = function(){
    var rowCol = $scope.gridApi.cellNav.getFocusedCell();
    if(rowCol !== null) {
      $scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.colDef.name;
    }
  };
  */
  $scope.go=function (items) {
    $scope.gridOptions2.paginationPageSize=items;
  }

  
  $scope.gridOptions2.onRegisterApi = function (gridApi) {
    $scope.gridApi2 = gridApi;
  }
  $http.get('repository.json')
      .success(function (data) {
        $scope.gridOptions2.data = data;
        console.log('success',result);
      })
      .error(function (result) {
        console.log('error',result);
      });

}]);