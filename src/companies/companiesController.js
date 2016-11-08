(function () {
    'use strict';

    angular.module('app.companies')
        .controller('companiesController', function ($scope, companiesService) {
            companiesService.getCompanies().then(function (response) {
                $scope.companies = response.data;
                console.log(response.data);
            });

        });
})();
