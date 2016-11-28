(function () {
    'use strict';

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider.when('/users',
                {
                    templateUrl: 'src/users/users.html',
                    controller: 'usersController'
                });
            $routeProvider.when('/about',
                {
                    templateUrl: 'src/companies/companiesList.html',
                    controller: 'companiesController'
                });
            $routeProvider.when('/about/:companyID',
                {
                    templateUrl: 'src/companies/companyAbout.html',
                    controller: 'companiesController'
                });
            $routeProvider.when('/about/:companyID/moreDetail',
                {
                    templateUrl: 'src/projects/projects.html',
                    controller: 'projectsController'
                });
        });

})();

