(function () {
    'use strict'

    angular.module('app.companyService', [])

        .factory('dataCompanyService', function () {
            return ['Exadel', 'Epam', 'Anderson', 'InnovationGroup', 'MainSoft', 'Coins', 'SamSolutions', 'Belvest'];
        });
})();