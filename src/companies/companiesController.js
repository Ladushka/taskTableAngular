(function () {
    'use strict';

    angular.module('app.companies', [])
        .controller('companiesController', function ($scope, $routeParams, companiesService, projectsService) {
            companiesService.getCompanies().then(function (response) {
                $scope.companies = response.data;

                $scope.company = (response.data).filter(function (item) {
                    return item.id == $routeParams.companyID;
                })[0];
            });
            projectsService.sendId($routeParams.companyID);
        });
})();
