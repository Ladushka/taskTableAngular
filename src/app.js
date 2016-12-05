(function () {
    'use strict';

    angular.module('app', [
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.selection',
        'ui.grid.pinning',
        'ngSanitize',
        'ui.bootstrap',
        'ngRoute',
        'ngTouch',
        'pascalprecht.translate',
        'app.users',
        'app.locate',
        'app.companies'
    ]);

})();