(function () {
    'use strict';

    angular.module('app.companies')

        .service('companiesService', function ($http) {
            return {

                getPeople: function () {
                    return $http.get('src/json/repository.json');

                },
                getCompanies: function () {
                    return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
                },
                gridOptions: function () {
                    return {
                        gridOptions: {
                            modifierKeysToMultiSelectCells: true,
                            enablePaginationControls: false,
                            paginationPageSize: 5
                        },
                        columnDefs: [
                            {name: 'id'},
                            {name: 'firstName'},
                            {name: 'lastName'},
                            {name: 'date'},
                            {name: 'company'}
                        ]
                    }

                }
            };
        });
})();