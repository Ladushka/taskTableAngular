'use strict'

angular.module('app.modal', [])

    .controller('ModalInstanceCtrl', function ($uibModalInstance) {
        var $ctrl = this;

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });