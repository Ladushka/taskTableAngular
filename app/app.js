
var dataBuf={};
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.pinning','ui.bootstrap'])
.service('dataCompanyService',  function(){
    this.names = [ "Exadel", "Epam", "MainSoft", "InnovationGroup", "Belvest", "Anderson"];


    /* var companies= [ "Exadel", "Epam", "MainSoft", "InnovationGroup", "Belvest", "Anderson"];
     return {
     companies: function() {
     return companies;
     }
     */
})
.controller('MainCtrl', ['$scope', '$http','dataCompanyService', function ($scope, $http,dataCompanyService) {
    /* Table*/
    $scope.currentFocused = "";
    //$scope.rowCol;
    /*$scope.dataCompanyService=dataCompanyService;
    console.log($scope.dataCompanyService);*/
   // $scope.name = dataCompanyService.modifierKeysToMultiSelectCells;
    //console.log($scope.name);

    
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

    $scope.master = {};

    $scope.save = function () {
            $scope.user={};
            $('#myModal').modal('hide')
    };
        ///Развлекаловка с сервисами

    $scope.names = dataCompanyService.names;
    console.log($scope.names );
}]);
/*
app.factory("States", function(){
    var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];

    return states;

});

// setup controller and pass data source
app.controller("TypeaheadCtrl", function($scope, States) {

    $scope.selected = undefined;

    $scope.states = States;

});
*/