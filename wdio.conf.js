exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local', // Menggunakan runner lokal

    // ====================
    // Konfigurasi Hostname dan Port untuk Appium Server Manual
    // ====================
    hostname: 'localhost', // Alamat IP Appium server 
    port: 4723,            // Port default Appium server

    // ====================
    // Auto Compile Options (untuk mengatasi masalah ts-node/ESM)
    // ====================
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json' 
        }
    },

    // ==================
    // Specs & Exclusions
    // ==================
    specs: [
        './test/**/*.js'
    ],
    exclude: [
    ],

    // ============
    // Capabilities
    // ============
    capabilities: [{
        // Untuk Android (Appium)
        platformName: 'Android', 
        'appium:automationName': 'UiAutomator2', 
        'appium:deviceName': 'Medium Phone API 35',
        'appium:platformVersion': '15',
        'appium:app': '/Users/pnurani/Downloads/ApiDemos-debug.apk',
        'appium:appPackage': 'io.appium.android.apis',
        'appium:appActivity': '.ApiDemos',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    }],

    // ===================
    // Services
    // ===================
    // Hapus baris 'services: ['appium']' karena kita akan menjalankan Appium secara manual
    // services: ['appium'], // BARIS INI DIHAPUS

    // ===================
    // Test Framework
    // ===================
    framework: 'mocha',

    // ===================
    // Reporter Configuration
    // ===================
    reporters: ['spec'],

    // ===================
    // WebdriverIO Configuration
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    baseUrl: 'http://localhost',
};
