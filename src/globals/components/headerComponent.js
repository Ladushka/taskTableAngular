(function () {
    'use strict';

    angular.module('app')
        .component('headerComponent', {

            templateUrl: 'src/globals/components/header.html',
            controller: function () {
                console.log('work');
            }
        });
})();
