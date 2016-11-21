(function () {
    'use strict';

    angular.module('app.projects', [])
        .service('projectsService', function ($http) {
            return {
                getProjects: function () {
                    return $http.get('src/globals/json/projects.json');
                }
            };
        });
})();