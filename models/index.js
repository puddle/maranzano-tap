if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
  } else {
    sequelize = new Sequelize('postgres://localhost/capone_development');
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Event:      sequelize.import(__dirname + '/event')
  }
}
 
module.exports = global.db
