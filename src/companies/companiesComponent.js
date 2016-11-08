(function () {
    'use strict';

    angular.module('app.companies')
        .component('companies',{
            template: '<h2>Companies</h2><ng-outlet></ng-outlet>',
            $routeConfig: [
                {path:'/',    name: 'CompaniesList',   component: 'companiesList', useAsDefault: true},
                {path:'/:id', name: 'CompaniesDetail', component: 'companiesDetail'}
            ]
        });
})();
