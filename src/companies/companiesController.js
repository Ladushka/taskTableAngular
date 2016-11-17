(function () {
    'use strict';

    angular.module('app.companies', [])
        .controller('companiesController', function ($scope, $routeParams, $uibModal, companiesService) {

            $scope.currentPage = 1;
            $scope.itemsPerPage = 5;

            $scope.pageChanged = function () {
                $scope.gridApi.pagination.seek($scope.currentPage);
            };

            $scope.gridOptions = companiesService.gridOptions().gridOptions;
            //$scope.gridOptions.columnDefs = companiesService.gridOptions().columnDefs;

            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };

            companiesService.getCompanies().then(function (response) {
                $scope.gridOptions.data = response.data;

                $scope.company = (response.data).filter(function (item) {
                    return item.company.id == $routeParams.companyID;
                })[0];
                $scope.totalItems = response.data.length;
            });

            $scope.open = function (size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/companies/addCompany.html',
                    size: size,
                    scope: $scope
                });
                modalInstance.result.then(function (company) {
                    $scope.save(company);
                });
            };

            $scope.addCompany = function () {
                $scope.open('lg');
            };

            $scope.save = function (company) {
                company.company.id = $scope.gridOptions.data.length + 1;
                $scope.gridOptions.data.push(company);

            };

            // projectsService.sendId($routeParams.companyID);
        });
})();
