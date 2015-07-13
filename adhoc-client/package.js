Package.describe({
  name: 'hualc:adhoc-client',
  version: '0.8.1',
  summary: 'Adhoc api for A/B testing',
  git: 'https://github.com/AppAdhoc/meteor-adhoc/tree/master/adhoc-client',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('adhoc-client.js', 'client');
});
