(function () {
    'use strict';

    angular.module('app')

        .service('datepickerService', function () {
            return {
                popup: {
                    opened: false
                },
                openDatepicker: function (popup) {
                    popup.opened = true;
                },
                dateOptions: {
                    formatYear: 'yy',
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                    startingDay: 1
                }
            };
        });
})();
