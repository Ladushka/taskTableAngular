(function () {
    'use strict';

    angular.module('app.companies')

        .factory('companiesService', function ($http) {
            return {

                getPeople: function () {
                    return $http.get('src/json/repository.json');

                },
                getCompanies: function () {
                    return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
                }
            }
        });
})();