(function () {
    'use strict';

    angular.module('app.projects')
        .service('projectsService',function ($http) {
            var _id;
            return {
                getProjects: function () {
                    return $http.get('src/globals/json/projects.json');
                },
                sendId:function (id) {
                    _id=id;
                },
                getId:function () {
                    return _id;
                }
            };
        });
})();