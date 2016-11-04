(function () {
    'use strict';

    angular.module('app.locate',[])

        .config(function ($translateProvider) {
            $translateProvider.translations('en',{
                    PREVIOUS_PAGE: 'previous page',
                    NEXT_PAGE: 'next page',
                    SET: 'set',
                    ITEMS_PER_PAGE:'items per page',
                    BUTTON_LANG_EN: 'english',
                    BUTTON_LANG_RU: 'russian',
                    EDIT:'edit',
                    USERS_INFORMATION:'Users Information',
                    COMPANIES_INFORMATION:'Companies Information',
                    USERS:'Users'
            }
                /*localizationService.getEnLocations().then(function (response) {
                    return response.data;
                })*/
            );
            $translateProvider.translations('ru', {
                PREVIOUS_PAGE: 'предыдущая страница',
                NEXT_PAGE: 'следующая страница',
                SET: 'задать',
                ITEMS_PER_PAGE:'количество отоброжаемых строк',
                BUTTON_LANG_EN: 'английский',
                BUTTON_LANG_RU: 'русский',
                EDIT:'редактировать',
                USERS_INFORMATION:'Информация о пользователях',
                COMPANIES_INFORMATION:'Информация о компаниях',
                USERS:'Пользователи'
            });
            $translateProvider.preferredLanguage('en');

            $translateProvider.useSanitizeValueStrategy('sanitize');
        });

})();