(function () {
    'use strict';

    angular.module('app.users')

        .service('usersService', function ($http) {
            return {
                getPeople: function () {
                    return $http.get('src/globals/json/users.json');
                },
                gridOptions: function () {
                    return {
                        enableFiltering: true,
                        enableGridMenu: true,
                        enablePaginationControls: false,
                        enableRowSelection: true,
                        selectionRowHeaderWidth: 35,
                        rowHeight: 35,
                        paginationPageSize: 5,
                        enableHorizontalScrollbar: 0,
                        enableVerticalScrollbar: 2,
                        columnDefs: [
                            {name: 'id'},
                            {
                                name: 'firstName',
                                cellTemplate: '<div class="ui-grid-cell-contents curs"><a name="firstName" type="button" ng-click="grid.appScope.openUser(row)">{{COL_FIELD}}</a></div>'
                            },
                            {name: 'lastName'},
                            {
                                name: 'company',
                                cellTemplate: '<div class="ui-grid-cell-contents"><a name="company" href="#/about/{{grid.appScope.companyId(row)}}">{{COL_FIELD}}</a></div>'
                            },
                            {
                                name: 'date',
                                cellTemplate: '<em>{{COL_FIELD | date:"yyyy-MM-dd" }}</em>'
                            }
                        ]
                    };
                }
            };
        });
})();