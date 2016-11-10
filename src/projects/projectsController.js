(function () {
    'use strict';
    
    angular.module('app.projects',[])
        .controller('projectsController',function ($scope,projectsService) {
            $scope.tab = 1;

            $scope.setTab = function(newValue){
                this.tab = newValue;
            };

            $scope.isSet = function(tabName){
                return this.tab === tabName;
            };

            projectsService.getProjects().then(function (response) {
                $scope.project = (response.data).filter(function (item) {
                    return item.id == projectsService.getId();
                })[0];
                console.log($scope.project);
            });


        })
})();
