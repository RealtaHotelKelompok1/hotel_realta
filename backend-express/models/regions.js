const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regions', {
    region_code: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region_name: {
      type: DataTypes.STRING(35),
      allowNull: true,
      unique: "regions_region_name_key"
    }
  }, {
    sequelize,
    tableName: 'regions',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "region_code_pk",
        unique: true,
        fields: [
          { name: "region_code" },
        ]
      },
      {
        name: "regions_region_name_key",
        unique: true,
        fields: [
          { name: "region_name" },
        ]
      },
    ]
  });
};
