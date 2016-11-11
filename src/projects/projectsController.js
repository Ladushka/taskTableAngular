(function () {
    'use strict';

    angular.module('app.projects', [])
        .controller('projectsController', function ($scope, projectsService) {

            projectsService.getProjects().then(function (response) {
                $scope.project = (response.data).filter(function (item) {
                    return item.id == projectsService.getId();
                })[0];
            });


        })
})();
