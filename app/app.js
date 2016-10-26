var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.pinning']);

app.controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    /* Table*/
    $scope.gridOptions = {
        modifierKeysToMultiSelectCells: true,
        enablePaginationControls: false,
        paginationPageSize: 5
    };

    $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'firstName'},
        {name: 'lastName'},
        {name: 'company'}
    ];

        /*Focus*/
    $scope.currentFocused = "";

    $scope.getCurrentFocus = function () {
        var rowCol = $scope.gridApi.cellNav.getFocusedCell();
        if (rowCol !== null) {
          //  $scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.columnDefs.name;
            console.log('Row Id:' + rowCol.row.entity.id/*+' col:' + rowCol.col.columnDefs.name*/);
        }
    };


        /*PaginationPageSize*/
    $scope.go = function (items) {
        $scope.gridOptions.paginationPageSize = items;
    }


    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
    }

    $http.get('repository.json')
        .success(function (data) {
            $scope.gridOptions.data = data;
            console.log('success', result);
        })
        .error(function (result) {
            console.log('error', result);
        });

}]);
app.controller('StudentController', function ($scope) {
    $scope.master = {};
    console.log("proverka");
    $scope.save = function (user) {
        $scope.master = angular.copy(user);
        console.log($scope.master);
    };
});