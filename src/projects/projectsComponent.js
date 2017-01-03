(function () {
    'use strict';

    angular.module('app')
        .component('projectsComponent', {
            bindings: {
                companyId: '='
            },
            templateUrl: 'src/projects/projects.html',
            controller: function ($scope, projectsService) {
                var ctrl = this;

                projectsService.getProjects().then(function (response) {
                    $scope.project = (response.data || []).filter(function (item) {
                        return item.id == ctrl.companyId;
                    })[0];
                });
            }
        });

})();
