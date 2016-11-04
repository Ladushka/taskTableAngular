(function () {
    'use strict';

    angular.module('app')

        .service('localizationService', function ($http) {
            return {

                getRuLocations: function () {
                    return $http.get('src/json/russianLocate.json');
                },
                getEnLocations: function () {
                    return $http.get('src/json/englishLocate.json');
                }
            };
        });
})();
