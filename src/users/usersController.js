(function () {
    'use strict';

    angular.module('app.users', [])

        .controller('usersController', ['$scope', '$http', '$uibModal', '$document', 'usersService',
            function ($scope, $http, $uibModal, $document, usersService) {

                $scope.currentPage = 1;
                $scope.itemsPerPage = 5;
                $scope.pageChanged = function () {
                    $scope.gridApi.pagination.seek($scope.currentPage);
                };

                $scope.gridOptions = usersService.gridOptions();

                usersService.getPeople().then(function (response) {
                    $scope.gridOptions.data = response.data;
                    ($scope.gridOptions.data || []).forEach(function (item) {
                        item.date = new Date(item.date);
                    });

                    $scope.totalItems = response.data.length;
                });

                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;
                };

                $scope.companyId = function (row) {
                    return row.entity.company;
                };

            }]);
})();