const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_order_detail', {
    pode_pohe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'purchase_order_header',
        key: 'pohe_id'
      }
    },
    pode_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pode_order_qty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pode_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pode_line_total: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pode_received_qty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pode_rejected_qty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pode_stocked_qty: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pode_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'purchase_order_detail',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "pode_id_pk",
        unique: true,
        fields: [
          { name: "pode_pohe_id" },
          { name: "pode_id" },
        ]
      },
    ]
  });
};
