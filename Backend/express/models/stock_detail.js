const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_detail', {
    stod_stock_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'stocks',
        key: 'stock_id'
      }
    },
    stod_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stod_barcode_number: {
      type: DataTypes.STRING(225),
      allowNull: true,
      unique: "stock_detail_stod_barcode_number_key"
    },
    stod_status: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    stod_notes: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    stod_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    },
    stod_pohe_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'purchase_order_header',
        key: 'pohe_id'
      }
    }
  }, {
    sequelize,
    tableName: 'stock_detail',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "stock_detail_stod_barcode_number_key",
        unique: true,
        fields: [
          { name: "stod_barcode_number" },
        ]
      },
      {
        name: "stod_id_pk",
        unique: true,
        fields: [
          { name: "stod_stock_id" },
          { name: "stod_id" },
        ]
      },
    ]
  });
};
