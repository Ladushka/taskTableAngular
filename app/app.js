
var dataBuf={};
var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.pinning','ui.bootstrap','ngAnimate', 'ngSanitize'])


app.controller('MainCtrl', ['$scope', '$http','$uibModal','$log', '$document', function ($scope, $http,$uibModal, $log, $document,$uibModalInstance) {
    /* Table*/
    $scope.currentFocused = "";
    var $ctrl = this;
    $ctrl.animationsEnabled = true;

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
        $ctrl.open('lg');
        $ctrl.user=$scope.user;
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
$ctrl.close;

    };



        ///Развлекаловка с сервисами


    $ctrl.open = function (size, parentSelector) {

        console.log("work");
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.app ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller:  'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            scope:$scope
        });

    };

///////data
/*----------------------------*/


    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }


    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yyyy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    $scope.altInputFormats = ['M!/d!/yyyy'];

}]);


app.controller('ModalInstanceCtrl', function ($uibModalInstance) {
    var $ctrl = this;

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});



