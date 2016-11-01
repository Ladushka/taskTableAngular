(function () {
    'use strict'

    angular.module('app', [
        'ngTouch',
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.cellNav',
        'ui.grid.pinning',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'ngRoute',
        'app.modal',
        'app.companyService',
        'app.companyController'
    ])

        .controller('MainCtrl', ['$scope', '$http', '$uibModal', '$document', function ($scope, $http, $uibModal, $document) {
            /* Table*/

            $scope.dataBuf = {};
            $scope.dataCopy = {};
            $scope.rowCol;
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
            $http.get('json/repository.json')
                .success(function (data) {
                    $scope.dataBuf = data;
                    $scope.dataCopy = angular.copy($scope.dataBuf);
                    $scope.gridOptions.data = data;
                })
                .error(function (result) {
                    console.log('error', result);
                });

            /*Form edit*/

            $scope.getRow = function () {
                $scope.rowCol = $scope.gridApi.cellNav.getFocusedCell();
                if ($scope.rowCol !== null) {
                    $scope.user = $scope.dataCopy.filter(function (item) {
                        return (item.id == $scope.rowCol.row.entity.id);
                    });
                    $scope.user = $scope.user[0];
                    $ctrl.open('lg');
                } else {
                    alert("Выделите ячейку");
                }
            };

            /*PaginationPageSize*/
            $scope.go = function (items) {
                $scope.gridOptions.paginationPageSize = items;
            };


            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };
            /*Submit*/
            $scope.save = function () {
                var buf;
                if ($scope.rowCol !== null) {
                    $scope.dataBuf.forEach(function (item, i) {
                        if (item.id == $scope.rowCol.row.entity.id) {
                            buf = i;
                        }
                    });
                    $scope.dataBuf[buf] = $scope.user;
                }
                $scope.user = {};
            };


            /*data/datepicker*/


            $ctrl.open = function (size, parentSelector) {

                console.log("work");
                var parentElem = parentSelector ?
                    angular.element($document[0].querySelector('.app ' + parentSelector)) : undefined;
                var modalInstance = $uibModal.open({
                    animation: $ctrl.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'myModalContent.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: '$ctrl',
                    size: size,
                    appendTo: parentElem,
                    scope: $scope
                });

            };

            $scope.open1 = function () {
                $scope.popup1.opened = true;
            };

            $scope.popup1 = {
                opened: false
            };
            $scope.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

        }]);
})();





