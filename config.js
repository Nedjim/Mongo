module.exports = {
  'port': process.env.PORT || 3000,
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds123930.mlab.com:23930/kickass`
}