(function () {
    'use strict';

    angular.module('app')
        .controller('companyModalController', function ($scope, $uibModal, companiesService) {

            $scope.addCompany=function () {

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'src/companies/addCompany.html',
                    size: 'lg',
                    scope: $scope
                });
                modalInstance.result.then(function (conpanyNew) {
                    $scope.save(conpanyNew);
                });
            };

            $scope.save=function (companyNew) {
                if(companyNew) {
                    $scope.gridOptions.data.push(companyNew);
                    $scope.countUsers.push($scope.gridOptions.data.length);
                }
            };

            companiesService.getCountries().then(function (response) {
                $scope.countries = (response.data || []).map(function (item) {
                    return item.name;
                });
            });

        });

})();
