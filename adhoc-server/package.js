Package.describe({
  name: 'hualc:adhoc-server',
  version: '0.8.2',
  summary: 'Adhoc api for A/B testing',
  git: 'https://github.com/AppAdhoc/meteor-adhoc/tree/master/adhoc-server',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('adhoc-server.js', 'server');
  api.export('adhoc', 'server')
});
