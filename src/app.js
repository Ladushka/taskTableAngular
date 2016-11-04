(function () {
    'use strict';

    angular.module('app', [
        'ui.grid',
        'ui.grid.pagination',
        'ui.grid.cellNav',
        'ui.grid.pinning',
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'ngRoute',
        'pascalprecht.translate',
        'app.companies',
    ])
})();