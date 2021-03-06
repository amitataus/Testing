const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: geckodriver.path,
        port: 4446
        // cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};