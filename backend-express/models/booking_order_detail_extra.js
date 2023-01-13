const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_order_detail_extra', {
    boex_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boex_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boex_qty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    boex_subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boex_measure_unit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    boex_borde_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'booking_order_detail',
        key: 'borde_id'
      }
    },
    boex_prit_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'price_items',
        key: 'prit_id'
      }
    }
  }, {
    sequelize,
    tableName: 'booking_order_detail_extra',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "pk_boex_id",
        unique: true,
        fields: [
          { name: "boex_id" },
        ]
      },
    ]
  });
};
