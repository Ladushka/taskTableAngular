(function () {
    'use strict';

    angular.module('app.companies', [])

        .controller('companiesController', ['$scope', '$http', '$uibModal', '$document', 'companiesService',
            function ($scope, $http, $uibModal, $document, companiesService) {

                $scope.gridOptions = companiesService.gridOptions().gridOptions;
                $scope.gridOptions.columnDefs = companiesService.gridOptions().columnDefs;

                companiesService.getPeople().then(function (response) {
                    $scope.gridOptions.data = response.data;
                });

                $scope.companies = companiesService.getCompanies();

                $scope.getRow = function () {
                    $scope.rowCol = $scope.gridApi.cellNav.getFocusedCell();
                    if ($scope.rowCol !== null) {
                        $scope.user = angular.copy($scope.gridOptions.data.filter(function (item) {
                            return (item.id == $scope.rowCol.row.entity.id);
                        }))[0];
                        $scope.open('lg');
                    } else {
                        alert("Выделите ячейку");
                    }
                };

                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;
                };

                $scope.save = function (user) {
                    $scope.gridOptions.data = $scope.gridOptions.data.map(function (item) {
                        if (item.id === user.id) {
                            return item = user;
                        }
                        return item;
                    });

                    delete $scope.user;
                };

                $scope.open = function (size) {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'src/companies/editContent.html',
                        size: size,
                        scope: $scope
                    });
                    modalInstance.result.then(function (user) {
                        $scope.save(user);
                    });

                };
            }]);
})();