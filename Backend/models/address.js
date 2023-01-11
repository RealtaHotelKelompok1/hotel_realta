const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    addr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr_line1: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    addr_line2: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    addr_postal_code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    addr_spatial_location: {
      type: DataTypes.JSON,
      allowNull: true
    },
    addr_prov_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'provinces',
        key: 'prov_id'
      }
    }
  }, {
    sequelize,
    tableName: 'address',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "addr_id",
        unique: true,
        fields: [
          { name: "addr_id" },
        ]
      },
    ]
  });
};
