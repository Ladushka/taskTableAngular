(function () {
    'use strict';

    angular.module('app.companies',[])

        .controller('companiesController', ['$scope', '$http', '$uibModal', '$document', 'companiesService',
            function ($scope, $http, $uibModal, $document, companiesService) {

                var dataCopy;


                $scope.dataBuf;
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
                    $scope.dataBuf = response.data;
                    dataCopy = angular.copy($scope.dataBuf);
                });

                $scope.companies = companiesService.getCompanies();

                $scope.getRow = function () {
                    $scope.rowCol = $scope.gridApi.cellNav.getFocusedCell();
                    if ($scope.rowCol !== null) {
                        $scope.user = dataCopy.filter(function (item) {
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
                        $scope.dataBuf.forEach(function (item, i) {
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