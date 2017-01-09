'use strict';

describe('my app', function () {

    var webdriver = require('selenium-webdriver');

    describe('Start Page', function () {
        beforeEach(function () {
            browser.manage().window().maximize();
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

        it('should be open modal add', function () {
            var buttons = element(by.name('add'));

            buttons.click();
            var userID = element(by.model('user.id'));
            expect(userID.getText()).toBe('');
        });



    });

    describe('Projects Page', function () {

        beforeEach(function () {
            browser.get("/#/about/InnovationGroup");
        });

        it('should be open input for edit', function () {
            var buttonEdit = element(by.name('edit'));
            var buttonSave = element(by.name('save'));
            var buttonCancel = element(by.name('cancel'));

            expect(buttonSave.getAttribute('disabled')).toBeTruthy();
            expect(buttonCancel.getAttribute('disabled')).toBeTruthy();

            buttonEdit.click();

            var companyName = element(by.model('company.company.name'));
            expect(companyName.getAttribute('value')).toContain('InnovationGroup');

            expect(buttonSave.getAttribute('disabled')).toBeFalsy();
            expect(buttonCancel.getAttribute('disabled')).toBeFalsy();
            expect(buttonEdit.getAttribute('disabled')).toBeTruthy();

            companyName.sendKeys('123');
            expect(companyName.getAttribute('value')).toBe('InnovationGroup123');
            buttonCancel.click();
            expect(companyName.getAttribute('value')).toBe('InnovationGroup');
            expect(buttonSave.getAttribute('disabled')).toBeTruthy();
            expect(buttonCancel.getAttribute('disabled')).toBeTruthy();
            expect(buttonEdit.getAttribute('disabled')).toBeFalsy();
        });

    });

});
