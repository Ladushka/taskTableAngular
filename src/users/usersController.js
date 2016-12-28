(function () {
    'use strict';

    angular.module('app.users', [])

        .controller('usersController', ['$scope', '$http', '$uibModal', '$document', 'usersService', 'datepickerService', 'companiesService',
            function ($scope, $http, $uibModal, $document, usersService, datepickerService, companiesService) {

                $scope.currentPage = 1;
                $scope.itemsPerPage = 5;
                $scope.pageChanged = function () {
                    $scope.gridApi.pagination.seek($scope.currentPage);
                };

                $scope.gridOptions = usersService.gridOptions();

                usersService.getPeople().then(function (response) {
                    $scope.gridOptions.data = response.data;
                    ($scope.gridOptions.data).forEach(function (item) {
                        item.date = new Date(item.date);
                    });

                    $scope.totalItems = response.data.length;
                });

                companiesService.getCompanies().then(function (response) {
                    $scope.companies = response.data.map(function (item) {
                        return item.company;
                    });
                    $scope.companyCount = $scope.companies.length;
                });

                $scope.getRow = function () {
                    if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                        $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
                        $scope.open();
                    } else {
                        alert('Выделите ячейку');
                    }
                };

                $scope.cancel = function () {
                    $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
                };

                $scope.gridOptions.onRegisterApi = function (gridApi) {
                    $scope.gridApi = gridApi;
                };

                $scope.save = function (user) {

                    if (!user.id) {
                        user.id = $scope.gridOptions.data.length + 1;
                        $scope.gridOptions.data.push(user);
                    } else {
                        $scope.gridOptions.data = $scope.gridOptions.data.map(function (item) {
                            if (item.id === user.id) {
                                return item = user;
                            }
                            return item;
                        });
                        delete $scope.user;
                    }
                };

                $scope.open = function () {
                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'src/users/editContent.html',
                        size: 'lg',
                        scope: $scope
                    });
                    modalInstance.result.then(function (user) {
                        $scope.save(user);
                    });

                };

                $scope.openDate = function () {
                    $scope.popup = datepickerService.popup;
                    datepickerService.openDatepicker($scope.popup);
                };

                $scope.companyId = function (row) {
                    for (var i = 0; i < $scope.companyCount; i++) {
                        if (row.entity.company == $scope.companies[i].name) {
                            return $scope.companies[i].id;
                        }
                    }
                };

                $scope.openUser = function (row) {

                    $scope.user = angular.copy(row.entity);
                    $scope.copyUser = angular.copy(row.entity);

                    companiesService.getCountries().then(function (response) {
                        $scope.countries = (response.data).map(function (item) {
                            return item.name;
                        });
                    });

                    var modalInstance = $uibModal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'src/users/editUser.html',
                        size: 'sm',
                        scope: $scope
                    });
                    modalInstance.result.then(function (user) {
                        $scope.save(user);
                    });
                };

                $scope.editUser = function () {
                    document.all.set.disabled = false;
                };

                $scope.cancelEditUser = function () {
                    $scope.user = $scope.copyUser;
                };

                $scope.cancelEditContent = function () {
                    if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                        $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
                    } else {
                        (document.forms[0].elements.form).forEach(function (item) {
                            item.value = '';
                        });
                        delete $scope.user;
                    }
                };

            }]);
})();