(function () {
    'use strict';

    angular.module('app')
        .service('projectsService', function ($http) {
            return {
                getProjects: function () {
                    return $http.get('src/globals/json/projects.json');
                }
            };
        });
})();