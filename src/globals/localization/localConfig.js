(function () {
    'use strict';

    angular.module('app.locate', [])

        .config(function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'src/globals/json/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('en');
        });

})();