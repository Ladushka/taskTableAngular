describe("controllers", function () {
    beforeEach(module('app.companies'));

    describe('companiesController', function () {

        var ctrl, $scope;

        beforeEach(inject(function ($rootScope, $uibModal, $controller, companiesService) {
            $scope = $rootScope.$new();
            $scope.carousel = { next: function () { } };
            ctrl = $controller('companiesController', {
                $scope: $scope,
                $uibModal: $uibModal,
                $routeParams: {companyID: '4'},
                companiesService: companiesService
            });
            //spyOn(companiesService, 'getCompanies');

        }));

        it("should load the companiesController", function () {
            expect(ctrl).toBeDefined();
        });

        it('should start history tracking', function () {
            expect($scope.currentPage).toBe(1);
            expect($scope.itemsPerPage).toBe(5);

        });
    });
});




