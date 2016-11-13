(function () {
    'use strict';

    angular.module('app.projects')
        .component('projectsComponent', {
            templateUrl: 'src/projects/projects.html',
            bindings: {
                companyId: '='
            },
            controller: function ($scope, projectsService) {
                console.log(this.companyId);
                projectsService.getProjects().then(function (response) {
                    $scope.project = (response.data).filter(function (item) {

                        return item.id == $scope.companyId;
                    })[0];
                });
            }
        });

})();
