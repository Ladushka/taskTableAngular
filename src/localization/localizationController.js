(function () {
    'use strict';

    angular.module('app.locate')
//,$http,localizationService
        .controller('localizationController', function ($scope, $translate) {

            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };

            // localizationService.getEnLocations().then(function (response) {
            //     console.log(response.data);
            // });
        });

})();



