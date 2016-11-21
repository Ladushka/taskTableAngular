(function () {
    'use strict';

    angular.module('app', [
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.selection',
        'ui.grid.pinning',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'ngRoute',
        'ngTouch',
        'pascalprecht.translate',
        'app.users',
        'app.locate',
        'app.companies',
        'app.projects'
    ]);

})();