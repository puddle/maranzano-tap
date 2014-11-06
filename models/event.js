module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Event', {
    name: DataTypes.STRING,
    uid: DataTypes.STRING,
    properties: DataTypes.JSON
  }, {
    tableName: 'tracked_events'
  })
}
