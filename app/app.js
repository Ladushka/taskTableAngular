
var dataBuf={};
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.pinning'])
.service('dataCompanyService',  function(){
    this.names = [ "Exadel", "Epam", "MainSoft", "InnovationGroup", "Belvest", "Anderson"];
})
.controller('MainCtrl', ['$scope', '$http','dataCompanyService', function ($scope, $http,dataCompanyService) {
    /* Table*/
    $scope.currentFocused = "";

    
    $scope.gridOptions = {
        modifierKeysToMultiSelectCells: true,
        enablePaginationControls: false,
        paginationPageSize: 5
    };

    $scope.gridOptions.columnDefs = [
        {name: 'id'},
        {name: 'firstName'},
        {name: 'lastName'},
        {name: 'date'},
        {name: 'company'}
    ];

    
            /*GetInformation*/
    $http.get('repository.json')
        .success(function (data) {
            dataBuf=data;
            $scope.gridOptions.data = data;
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
    };


    $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
    };

    $scope.save = function () {
            $scope.user={};
            $('#myModal').modal('hide')
    };
        ///Развлекаловка с сервисами

    $scope.names = dataCompanyService.names;
    console.log($scope.names );
}]);
