describe("routes", function () {
    beforeEach(module('app'));

    it("should default to start route", inject(function ($rootScope, $location, $route, $httpBackend) {   
         $httpBackend.whenGET("src/companies/companiesList.html").respond("<div/>");
         $location.path("/about");
         //$rootScope.$digest();
         expect($location.path()).toBe("/about");
         expect($route.current.templateUrl).toBe("src/companies/companiesList.html");

    }));


});
