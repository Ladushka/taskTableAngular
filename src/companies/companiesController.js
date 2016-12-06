(function () {
    'use strict';

    angular.module('app.companies', ['ui.bootstrap'])
        .controller('companiesController', function ($scope, $routeParams, $uibModal, companiesService) {

            $scope.currentPage = 1;
            $scope.itemsPerPage = 5;

            $scope.pageChanged = function () {
                $scope.gridApi.pagination.seek($scope.currentPage);
            };

            $scope.gridOptions = companiesService.gridOptions().gridOptions;


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

            $scope.openCompany = function () {

                $scope.companyEdit = angular.copy($scope.company);
                companiesService.getCountries().then(function (response) {
                    $scope.countries = (response.data).map(function (item) {
                        return item.name;
                    });
                });

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/companies/editCompany.html',
                    size: 'lg',
                    scope: $scope
                });
                modalInstance.result.then(function (company) {
                    $scope.save(company);
                });
            };

            $scope.save = function (company) {
                if (!company.company.id) {
                    company.company.id = $scope.gridOptions.data.length + 1;
                    $scope.gridOptions.data.push(company);
                } else {
                    $scope.company = $scope.companyEdit;
                }
                delete $scope.companyEdit;
            };

            $scope.cancelCompany = function () {

                if ($scope.company) {
                    $scope.companyEdit = angular.copy($scope.company);
                } else {
                    (document.forms[0].elements.editCompany).forEach(function (item) {
                        item.value = '';
                    });
                    delete $scope.company;
                }

            };

        });
})();
