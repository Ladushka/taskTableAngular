(function () {
    'use strict';

    angular.module('app')

        .controller('datepickerController', function ($scope) {

            $scope.openDatepicker = function () {
                $scope.popup.opened = true;
            };

            $scope.popup = {
                opened: false
            };
            $scope.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };
        });
})();
