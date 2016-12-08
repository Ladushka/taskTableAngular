(function () {
    'use strict';

    angular.module('app')
        .controller('localizationController', function ($scope, $translate) {

            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };
        });
})();



