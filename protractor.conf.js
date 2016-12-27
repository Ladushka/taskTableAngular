exports.config = {

    seleniumAddress: 'http://localhost:4444',

    allScriptsTimeout: 11000,

    specs: [
        'e2e-tests/*.js'
    ],

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
        'phantomjs.cli.args': ['--logfile=PATH', '--loglevel=DEBUG']
    },

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    }

};