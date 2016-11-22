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

            $scope.getCompany = function () {
                $scope.companyEdit = angular.copy($scope.company);
                $scope.openEditCompany('lg');
            };

            $scope.openAddCompany = function (size) {
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

            $scope.openEditCompany = function (size) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/companies/editCompany.html',
                    size: size,
                    scope: $scope
                });
                modalInstance.result.then(function (company) {
                    $scope.save(company);
                });
            };

            $scope.addCompany = function () {
                $scope.openAddCompany('lg');
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

                if($scope.company) {
                    $scope.companyEdit = angular.copy($scope.company);
                }else{
                    (document.forms[0].elements.add).forEach(function (item) {
                        item.value = '';
                    });
                    delete $scope.company;
                }

            };



        });
})();
