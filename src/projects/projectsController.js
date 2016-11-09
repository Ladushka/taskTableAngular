(function () {
    'use strict';
    
    angular.module('app')
        .controller('projectsController',function ($scope) {
            console.log('blaa');
            $scope.tab = 1;

            $scope.setTab = function(newValue){
                this.tab = newValue;
            };

            $scope.isSet = function(tabName){
                return this.tab === tabName;
            };
        })
})();
