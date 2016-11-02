(function () {
    'use strict';

    angular.module('app')

        .factory('companiesService', function ($http) {
            //var service;
            return {

                getPeople:function () {
                    return  $http.get('src/json/repository.json');

                },
                getCompanies:function () {
                    return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
                }
            }

        });
})();