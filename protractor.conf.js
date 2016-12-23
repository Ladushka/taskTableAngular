exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    allScriptsTimeout: 11000,

    specs: [
        'e2e-tests/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'//,
        //'phantomjs.binary.path': require('phantomjs-prebuilt').path,
        //'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine',

   // getPageTimeout: 15000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};