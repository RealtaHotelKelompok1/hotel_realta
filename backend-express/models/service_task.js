const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('service_task', {
    seta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seta_name: {
      type: DataTypes.STRING(85),
      allowNull: true,
      unique: "service_task_seta_name_key"
    },
    seta_seq: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service_task',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "service_task_seta_name_key",
        unique: true,
        fields: [
          { name: "seta_name" },
        ]
      },
      {
        name: "seta_id_pk",
        unique: true,
        fields: [
          { name: "seta_id" },
        ]
      },
    ]
  });
};
