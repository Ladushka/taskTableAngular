'use strict';

describe('my app', function () {


    describe('Start Page', function () {
        beforeEach(function () {
            browser.get("");
        });
        it('should load the start page.', function () {
            expect(browser.getTitle()).toBe('My AngularJS App');
        });

        it('should be navigate to user page', function () {
            var navBar = element.all(by.className('navbar-brand'));
            navBar.first().click();
            expect(browser.getCurrentUrl()).toContain('/users');
        });

        it('should be navigate to companies list', function () {
            var navBar = element.all(by.className('navbar-brand'));
            navBar.get(1).click();
            expect(browser.getCurrentUrl()).toContain('/about');
        });

    });

    describe('Users Page', function () {
        beforeEach(function () {
            browser.get("/#/users");
        });

        it('should be navigate to companies list', function () {
            var navBar = element.all(by.className('navbar-brand'));
            navBar.get(1).click();
            expect(browser.getCurrentUrl()).toContain('/about');
        });

        it('should be open modal add', function () {
            var buttons = element.all(by.css('button'));
            buttons.get(1).click();
            var lines = element.all(by.css('input'));
            expect(lines.count()).toEqual(7);
        });

    });

});
