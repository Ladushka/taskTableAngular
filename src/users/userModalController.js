(function () {
    'use strict';

    angular.module('app')
        .controller('userModalController', function ($scope, $uibModal, companiesService, datepickerService) {

            companiesService.getCompanies().then(function (response) {
                $scope.companies = (response.data || []).map(function (item) {
                    return item.company;
                });
            });

            companiesService.getCountries().then(function (response) {
                $scope.countries = (response.data || []).map(function (item) {
                    return item.name;
                });
            });

            $scope.open = function () {
                delete $scope.user;
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

            $scope.save = function (user) {
                if (!user.id) {
                    user.id = $scope.gridOptions.data.length + 1;
                    $scope.gridOptions.data.push(user);
                    $scope.countUsers.push(user.id);

                } else {
                    $scope.gridOptions.data = ($scope.gridOptions.data || []).map(function (item) {
                        if (item.id === user.id) {
                            return item = user;
                        }
                        return item;
                    });
                    delete $scope.user;
                }
            };

            $scope.getRow = function () {
                if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                    $scope.open();
                    $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];

                } else {
                    alert('Выделите ячейку');
                }
            };

            $scope.openDate = function () {
                $scope.popup = datepickerService.popup;
                datepickerService.openDatepicker($scope.popup);
            };

            $scope.cancelEditContent = function () {
                if ($scope.gridApi.selection.getSelectedRows().length === 1) {
                    $scope.user = angular.copy($scope.gridApi.selection.getSelectedRows())[0];
                } else {
                    for (var i = 0; i < document.forms.editForm.elements.length; i++) {
                        document.forms.editForm.elements[i].value = '';
                    }
                    delete $scope.user;
                }
            };


        });

})();