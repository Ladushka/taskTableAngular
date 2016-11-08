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
                    if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                        $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
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
                        templateUrl: 'src/users/editContent.html',
                        size: size,
                        scope: $scope
                    });
                    modalInstance.result.then(function (user) {
                        $scope.save(user);
                    });

                };
            }]);
})();