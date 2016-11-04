(function () {
    'use strict';

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider.when('/users',
                {
                    templateUrl: 'src/companies/users.html',
                    controller: 'companiesController'
                });
            $routeProvider.when('/about',
                {
                    templateUrl: 'src/templates/pageAddress.html'
                });
        });

})();

