const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    country_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "country_country_name_key"
    },
    country_region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'regions',
        key: 'region_code'
      }
    }
  }, {
    sequelize,
    tableName: 'country',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "country_country_name_key",
        unique: true,
        fields: [
          { name: "country_name" },
        ]
      },
      {
        name: "country_id_pk",
        unique: true,
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
