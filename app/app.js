var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.pinning']);
var dataBuf={};

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http,dataCompanyService) {
    /* Table*/
    $scope.currentFocused = "";
    //$scope.rowCol;
    
    //$scope.company=dataCompanyService.companies;
    
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

    
            /*GetInformation*/
    $http.get('repository.json')
        .success(function (data) {
            dataBuf=data;
            $scope.gridOptions.data = data;
            console.log('success', result);
        })
        .error(function (result) {
            console.log('error', result);
        });

        /*Form edit*/

    $scope.getRow = function () {
        $scope.rowCol = $scope.gridApi.cellNav.getFocusedCell();
        if ($scope.rowCol !== null) {            
            $scope.user=dataBuf.filter(function (item) {
                return (item.id==$scope.rowCol.row.entity.id);
            });
            $scope.user=$scope.user[0];
        }       
        
    };

        /*PaginationPageSize*/
    $scope.go = function (items) {
        $scope.gridOptions.paginationPageSize = items;
    }


    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
    }

    $scope.master = {};

    $scope.save = function () {
            $scope.user={};
            $('#myModal').modal('hide')
    };

}]);

app.factory('dataCompanyService', function(){
    return{
        companies: [ "Exadel", "Epam", "MainSoft", "InnovationGroup", "Belvest", "Anderson"]

    };
});