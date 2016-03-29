let mongoURL;
switch (process.env.NODE_ENV) {
case 'TEST':
case 'test':
  mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/encore-test';
  break;
case 'PROD':
case 'prod':
  mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017';
  break;
default:
  mongoURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/encore';
  break;
}

module.exports = {
  logLevel: 'debug',
  mongoURL: mongoURL,
  mongoOpts: { server: { socketOptions: { keepAlive: 1 } } },
  port: process.env.PORT || '1339',
};

