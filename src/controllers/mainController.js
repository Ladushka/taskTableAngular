(function () {
    'use strict';

    angular.module('app')

        .controller('mainCtrl', ['$scope', '$http', '$uibModal', '$document', 'companiesService',
            function ($scope, $http, $uibModal, $document, companiesService) {
                /* Table*/
                $scope.rowCol;
                $scope.currentFocused = "";
                $scope.animationsEnabled = true;

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

                companiesService.getPeople().then(function (response) {
                    $scope.gridOptions.data = response.data;
                });
                $scope.dataCopy = angular.copy($scope.gridOptions.data);
                console.log($scope.dataCopy)
                 /*Form edit*/

                $scope.getRow = function () {
                    $scope.rowCol = $scope.gridApi.cellNav.getFocusedCell();
                    if ($scope.rowCol !== null) {
                        $scope.user = $scope.gridOptions.data.filter(function (item) {
                            return (item.id == $scope.rowCol.row.entity.id);
                        });
                        $scope.user = $scope.user[0];
                        $scope.open('lg');
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
                        $scope.dataCopy.forEach(function (item, i) {
                            if (item.id == $scope.rowCol.row.entity.id) {
                                buf = i;
                            }
                        });
                        $scope.dataBuf[buf] = $scope.user;
                    }
                    $scope.user = {};
                };

                /*-------Modal--------*/
                $scope.open = function (size, parentSelector) {

                    var parentElem = parentSelector ?
                        angular.element($document[0].querySelector('.app ' + parentSelector)) : undefined;
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        ariaLabelledBy: 'modal-title',
                        ariaDescribedBy: 'modal-body',
                        templateUrl: 'src/companies/editFormModalContent.html',
                        size: size,
                        appendTo: parentElem,
                        scope: $scope
                    });

                };


            }]);
})();





