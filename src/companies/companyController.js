(function () {
    'use strict'

    angular.module('app.companyController', [])

        .controller('DataCompanyController', function ($scope, dataCompanyService) {
            $scope.companies = dataCompanyService;
            // console.log($scope.companies);
        });
})();