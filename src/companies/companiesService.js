(function () {
    'use strict';

    angular.module('app', [])

        .service('companiesService', function ($http) {
            var service;

            // service.getPeople = function () {
            //     $http.get('src/json/repository.json');
            // };
            //
            // service.getCompanies = function () {
            //     return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
            // };

            return service;
        });
})();