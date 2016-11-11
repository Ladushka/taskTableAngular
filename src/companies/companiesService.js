(function () {
    'use strict';

    angular.module('app.companies')
        .service('companiesService',function ($http) {
            return {
                getCompanies: function () {
                    return $http.get('src/globals/json/companies.json');
                }
            };
        });
})();
