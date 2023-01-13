const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    vendor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vendor_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    vendor_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vendor_priority: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vendor_register_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vendor_weburi: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    vendor_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vendor',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "vendor_id_pk",
        unique: true,
        fields: [
          { name: "vendor_id" },
        ]
      },
    ]
  });
};
