(function () {
    'use strict';

    angular.module('app.companies')
        .controller('companiesController', function ($scope, companiesService,$routeParams) {
            companiesService.getCompanies().then(function (response) {
                $scope.companies = response.data;

                $scope.company=(response.data).filter(function (item) {
                    return item.id==$routeParams.companyID;
                })[0];
            });
        });
})();
