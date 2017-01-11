'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        protractor: {
            e2e: {
                options : {
                    configFile: 'protractor.conf.js',
                    keepAlive: true
                }
            },
            debug: {
                options : {
                    configFile: 'protractor.conf.js',
                    keepAlive: true,
                    debug: true
                }
            }
        }
        // protractor: {
        //     options: {
        //         configFile: 'protractor.conf.js', //your protractor config file
        //         keepAlive: true, // If false, the grunt process stops when the test fails.
        //         noColor: false, // If true, protractor will not use colors in its output.
        //         args: {
        //             // Arguments passed to the command
        //         }
        //     },
        //     chrome: {
        //         options: {
        //             args: {
        //                 browser: 'chrome'
        //             }
        //         }
        //     },
        //     safari: {
        //         options: {
        //             args: {
        //                 browser: 'safari'
        //             }
        //         }
        //     },
        //     firefox: {
        //         options: {
        //             args: {
        //                 browser: 'firefox'
        //             }
        //         }
        //     }
        // },
        // all: {
        //     options: {
        //         args:{
        //             seleniumAddress: 'http://localhost:4444',
        //             capabilities: {
        //                 browserName: 'phantomjs'
        //             }
        //         }
        //     }
        // }
        // concurrent: {
        //     protractor_test: ['protractor-chrome', 'protractor-safari', 'protractor-firefox']
        // },
        // e2eTest: {
        //     files: ['e2e-tests/*.js'],
        //     tasks: ['protractor-e2e']
        // }
        // express: {
        //     options: {
        //         // Override defaults here
        //     },
        //     dev: {
        //         options: {
        //             script: 'bin/www'
        //         }
        //     },
        //     prod: {
        //         options: {
        //             script: 'path/to/prod/server.js',
        //             node_env: 'production'
        //         }
        //     },
        //     test: {
        //         options: {
        //             script: 'server.js'
        //         }
        //     }
        // },
        //
        // protractor_webdriver: {
        //     options: {
        //         // Task-specific options go here.
        //     },
        //     your_target: {
        //         // Target-specific file lists and/or options go here.
        //     },
        // },
    });

// grunt.loadNpmTasks('grunt-express-server');
// grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-runner');
    // grunt.registerTask('protractor-chrome', ['protractor:chrome']);
    // grunt.registerTask('protractor-safari', ['protractor:safari']);
    // grunt.registerTask('protractor-firefox', ['protractor:firefox']);
    //grunt.registerTask('protractor-e2e', ['protractor:chrome']);
//
// grunt.registerTask('travis', ['protractor:e2e','protractor:singlerun']);

};

