(function () {
    'use strict';

    angular.module('app')

        .controller('localizationController', function ($scope, $translate) {
console.log('work');
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };

        });

})();



