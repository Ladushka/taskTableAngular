describe("services", function () {
    beforeEach(module('app'));

    describe("Companies Service", function () {
        var companiesService, $httpBackend;

        beforeEach(inject(function (_companiesService_, _$httpBackend_,$rootScope) {
            $scope = $rootScope.$new();
            companiesService = _companiesService_;
            $httpBackend = _$httpBackend_;
        }));

        it("should load companies service", function () {
            $httpBackend.expectGET('src/globals/json/countries.json').respond(200);
            expect(companiesService).toBeDefined();
            companiesService.getCountries();
            $httpBackend.flush();
        });

        it("should request", function () {
            $httpBackend.expectGET('src/globals/json/companies.json').respond([{
                "company": {
                    "id": 1,
                    "name": "Exadel"
                },
                "address": {
                    "street": "Lenin Square",
                    "city": "Vitebsk",
                    "country": "Belarus"
                }
            }, {
                "company": {
                    "id": 5,
                    "name": "MainSoft"
                },
                "address": {
                    "street": "Lenin Square",
                    "city": "Vitebsk",
                    "country": "Belarus"
                }
            }]);

            var result = null;
            companiesService.getCompanies()
                .then(function (response) {
                    result = response.data;
                });
            $httpBackend.flush();

            expect(result.length).toBe(2);
            expect(result[0].company.name).toBe("Exadel");
            expect(result[1].address.street).toBe("Lenin Square");
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});