module.exports = config = {
  env: 'development',
  db: 'mongodb://admin:admin@ds161012.mlab.com:61012/node-test',
  port: 3000,
  jwtSecret: 'my-api-secret',
  jwtDuration: '2 hours'
}
