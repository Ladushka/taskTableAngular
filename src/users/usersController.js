(function () {
    'use strict';

    angular.module('app.users', [])

        .controller('usersController', ['$scope', '$http', '$uibModal', '$document', 'usersService','datepickerService',
            function ($scope, $http, $uibModal, $document, usersService,datepickerService) {

                $scope.currentPage = 1;
                $scope.itemsPerPage=5;
                $scope.pageChanged = function() {
                    $scope.gridApi.pagination.seek($scope.currentPage);
                };

                $scope.gridOptions = usersService.gridOptions().gridOptions;
                $scope.gridOptions.columnDefs = usersService.gridOptions().columnDefs;

                usersService.getPeople().then(function (response) {
                    $scope.gridOptions.data = response.data;
                    $scope.totalItems = response.data.length;
                });

                $scope.companies = usersService.getCompanies();

                $scope.getRow = function () {
                    if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                        $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
                        $scope.open('lg');
                    } else {
                        alert("Выделите ячейку");
                    }
                };

                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;
                };

                $scope.save = function (user) {
                    if(!user.id){
                        user.id=$scope.gridOptions.data.length+1;
                        $scope.gridOptions.data.push(user);
                    }else {
                        $scope.gridOptions.data = $scope.gridOptions.data.map(function (item) {
                            if (item.id === user.id) {
                                return item = user;
                            }
                            return item;
                        });

                        delete $scope.user;
                    }
                };

                $scope.open = function (size) {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'src/users/editContent.html',
                        size: size,
                        scope: $scope
                    });
                    modalInstance.result.then(function (user) {
                        $scope.save(user);
                    });

                };

                $scope.openDate=function () {
                    $scope.popup=datepickerService.popup;
                    datepickerService.openDatepicker($scope.popup);
                };

                $scope.addData = function() {
                    $scope.open('lg');
                };
            }]);
})();