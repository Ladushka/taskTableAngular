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
                            enableFiltering: true,
                            enableGridMenu: true,
                            enablePaginationControls: false,
                            enableRowSelection: true,
                            selectionRowHeaderWidth: 35,
                            rowHeight: 35,
                            paginationPageSize: 5,
                            columnDefs: [
                                {name: 'company', cellTemplate: '<div class="ui-grid-cell-contents">{{COL_FIELD.name}}</div>'},
                                {name: 'address', cellTemplate: '<div class="ui-grid-cell-contents">{{COL_FIELD.country}} , {{COL_FIELD.city}} , {{COL_FIELD.street}}</div>'}
                            ]
                        }
                    };
                }
            };
        });
})();
