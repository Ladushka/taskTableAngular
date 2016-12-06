describe("services", function () {
    beforeEach(module('app'));

    describe("companiesService", function () {
        var companiesService, $httpBackend;
        var mockEmployee = {
            company: {
                id: 1,
                name: "Exadel"
            },
            address: {
                street: "Lenin Square",
                city: "Vitebsk",
                country: "Belarus"
            }
        };
        beforeEach(inject(function (_companiesService_, _$httpBackend_) {
            companiesService = _companiesService_;
            $httpBackend = _$httpBackend_;
        }));
/*
        it('should fetch an employee', function(done) {
            var testEmployee = function(employee) {
                expect(employee.company).toBe(mockEmployee.company);
                expect(employee.address).toBe(mockEmployee.address);
            };

            var failTest = function(error) {
              expect(error).toBeUndefined();
            };
            $httpBackend.expectGET('/about/1').respond(200,mockEmployee);

            companiesService.get(mockEmployee.company)
                .then(testEmployee)
                .catch(failTest)
                .finally(done);

        });
*/
        afterEach(function () {
            //$httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
            companiesService;
            //$httpBackend.flush();
        });
    });
});