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

            buttons.last().click();
            var userID = element(by.model('user.id'));
            expect(userID.getText()).toBe('');
        });

        it('should be open modal with user', function () {
            var users = element.all(by.name('firstName'));

            expect(users.get(0).getText()).toBe('Cox');

            users.get(0).click();

            var userFirstName = element(by.model('user.firstName'));
            expect(userFirstName.getAttribute('value')).toBe(users.get(0).getText());
        });


    });

    describe('Projects Page', function () {

        beforeEach(function () {
            browser.get("/#/about/4");
        });

        it('should be navigate to companies list', function () {
            var navBar = element.all(by.className('navbar-brand'));
            navBar.get(1).click();
            expect(browser.getCurrentUrl()).toContain('/about');
        });

        it('should be open modal add', function () {

            var buttons = element.all(by.css('button'));
            expect(buttons.count()).toEqual(3);

            var companyNameValid = element(by.binding('company.company.name'));
            expect(companyNameValid.getText()).toContain('InnovationGroup');
            expect(element(by.exactBinding('company.address.country')).isPresent()).toBe(true);

            buttons.get(2).click();
            var inputCompanyName = element(by.model('companyEdit.company.name'));
            expect(inputCompanyName.getAttribute('value')).toBe(companyNameValid.getText());
            inputCompanyName.sendKeys('123');
            expect(inputCompanyName.getAttribute('value')).toBe('InnovationGroup123');

            expect(buttons.count()).toEqual(4);
            buttons.get(0).click();
            expect(inputCompanyName.getAttribute('value')).toBe('InnovationGroup');

        });

    });

});
