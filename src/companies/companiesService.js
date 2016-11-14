(function () {
    'use strict';

    angular.module('app.companies')
        .service('companiesService', function ($http) {
            return {
                getCompanies: function () {
                    return $http.get('src/globals/json/companies.json');
                },
                gridOptions: function () {
                    return {
                        gridOptions: {
                            enablePaginationControls: false,
                            enableRowSelection: true,
                            selectionRowHeaderWidth: 35,
                            rowHeight: 35,
                            paginationPageSize: 5
                        },
                        columnDefs: [
                            {name: 'company', cellTemplate: '<div class="ui-grid-cell-contents"><a href="/about/{{COL_FIELD.id}}">{{COL_FIELD.name}}</a></div>'}
                        ]
                    };
                }
            };
        });
})();
