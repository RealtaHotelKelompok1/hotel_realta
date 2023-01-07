const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provinces', {
    prov_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prov_name: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    prov_country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'country',
        key: 'country_id'
      }
    }
  }, {
    sequelize,
    tableName: 'provinces',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "prov_id_pk",
        unique: true,
        fields: [
          { name: "prov_id" },
        ]
      },
    ]
  });
};
