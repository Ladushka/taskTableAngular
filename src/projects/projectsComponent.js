(function () {
    'use strict';

    angular.module('app.projects')
        .component('projectsComponent', {
            bindings: {
                companyId: '='
            },
            templateUrl: 'src/projects/projects.html',
            controller: function ($scope, projectsService) {
                $scope.companyId = this.companyId;
                console.log(this);
                projectsService.getProjects().then(function (response) {
                    $scope.project = (response.data).filter(function (item) {
                        return item.id == $scope.companyId;
                    })[0];
                });
            }
        });

})();
