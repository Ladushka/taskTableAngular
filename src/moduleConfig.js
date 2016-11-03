(function () {
    'use strict';

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider.when('/userGrid',
                {
                    templateUrl: 'src/companies/usersTable.html',
                    controller: 'companiesController'
                });
            $routeProvider.when('/about',
                {
                    templateUrl: 'src/templates/pageAddress.html',
                });
        });

})();

