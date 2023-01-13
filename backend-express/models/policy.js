const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('policy', {
    poli_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    poli_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    poli_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'policy',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "poli_id_pk",
        unique: true,
        fields: [
          { name: "poli_id" },
        ]
      },
    ]
  });
};
