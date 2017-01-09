(function () {
    'use strict';

    angular.module('app.companies', ['ui.bootstrap'])
        .controller('companiesController', function ($scope, $routeParams, $uibModal, companiesService) {

            $scope.currentPage = 1;
            $scope.itemsPerPage = 5;

            $scope.pageChanged = function () {
                $scope.gridApi.pagination.seek($scope.currentPage);
            };

            $scope.gridOptions = companiesService.gridOptions();


            $scope.gridOptions.onRegisterApi = function (gridApi) {
                $scope.gridApi = gridApi;
            };

            companiesService.getCompanies().then(function (response) {
                $scope.gridOptions.data = response.data;

                $scope.company = (response.data || []).filter(function (item) {
                    return item.company.name == $routeParams.companyID;
                })[0];
                $scope.totalItems = response.data.length;
            });

            $scope.openCompany = function () {
                document.getElementsByName('save')[0].disabled = false;
                document.getElementsByName('cancel')[0].disabled = false;
                document.getElementsByName('edit')[0].disabled = true;
                for (var i = 0; i < document.getElementsByName('editCompany').length; i++) {
                    document.getElementsByName('editCompany')[i].disabled = false;
                }
                $scope.companyEdit = angular.copy($scope.company);
                companiesService.getCountries().then(function (response) {
                    $scope.countries = (response.data || []).map(function (item) {
                        return item.name;
                    });

                });

            };

            $scope.saveEdit = function () {
                for (var i = 0; i < document.getElementsByName('editCompany').length; i++) {
                    document.getElementsByName('editCompany')[i].disabled = true;
                }
                document.getElementsByName('cancel')[0].disabled = true;
                document.getElementsByName('edit')[0].disabled = false;
                document.getElementsByName('save')[0].disabled = true;
            };

            $scope.cancelCompany = function () {
                document.getElementsByName('cancel')[0].disabled = true;
                document.getElementsByName('edit')[0].disabled = false;
                document.getElementsByName('save')[0].disabled = true;
                $scope.company = $scope.companyEdit;
                for (var i = 0; i < document.getElementsByName('editCompany').length; i++) {
                    document.getElementsByName('editCompany')[i].disabled = true;
                }
            };

        });
})();
