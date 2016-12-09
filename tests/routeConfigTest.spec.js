describe("routes", function () {
    beforeEach(module('app'));

    it("should default to about route", inject(function ($rootScope, $location, $route, $httpBackend, companiesService) {
        spyOn(companiesService, "getCompanies");
        $httpBackend.whenGET("src/companies/companiesList.html").respond("<div/>");
        $location.path("/about");
        companiesService.getCompanies();
        $rootScope.$digest();
        expect($location.path()).toBe("/about");
        expect($route.current.templateUrl).toBe("src/companies/companiesList.html");
        expect($route.current.controller).toBe('companiesController');
        expect(companiesService.getCompanies).toHaveBeenCalled();
    }));

    it("should default to about route", inject(function ($rootScope, $location, $route, $httpBackend) {
        $httpBackend.whenGET("src/companies/companyAbout.html").respond("<div/>");
        $location.path("/about/1");
        $rootScope.$digest();
        expect($location.path()).toBe("/about/1");
        expect($route.current.templateUrl).toBe("src/companies/companyAbout.html");
        expect($route.current.params.companyID).toBe('1');
    }));

    it("should default to users route", inject(function ($rootScope, $location, $route, $httpBackend) {
        $httpBackend.whenGET("src/users/users.html").respond("<div/>");
        $location.path("/users");
        $rootScope.$digest();
        expect($location.path()).toBe("/users");
        expect($route.current.templateUrl).toBe("src/users/users.html");
        expect($route.current.controller).toBe('usersController');
    }));


});
