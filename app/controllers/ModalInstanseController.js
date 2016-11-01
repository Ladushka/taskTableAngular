/**
 * Created by Лада on 01.11.2016.
 */
angular.module('app.modal', [])

    .controller('ModalInstanceCtrl', function ($uibModalInstance) {
        var $ctrl = this;

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });