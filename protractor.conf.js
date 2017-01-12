exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
   // seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    //seleniumPort: null,
    //seleniumArgs: ['-browserTimeout=60'],
    allScriptsTimeout: 60000,
    //getPageTimeout: 60000,
    //chromeDriver: 'node_modules/protractor/selenium/chromedriver',
   // sauceUser: null,
    //sauceKey: null,
    params: {
        client: 'http://localhost:8080/#/'
    },
    specs: [
        'e2e-tests/*.js'
    ],

    capabilities: {
        //'browserName': 'chrome'
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false']
    },

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }

};