(function () {
    'use strict';

    angular.module('app.users')

        .service('usersService', function ($http) {
            return {

                getPeople: function () {
                    return $http.get('src/globals/json/users.json');
                },
                getCompanies: function () {
                    return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
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
                            {name: 'id'},
                            {name: 'firstName',cellTemplate:'<div class="ui-grid-cell-contents"><a type="button" ng-click="grid.appScope.openUser(row)">{{COL_FIELD}}</a></div>'},
                            {name: 'lastName'},
                            {name: 'date'},
                            {name: 'company'}
                        ]
                    };
                }
            };
        });
})();