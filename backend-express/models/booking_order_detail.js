const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_order_detail', {
    border_boor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "booking_order_detail_border_boor_id_key"
    },
    borde_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "booking_order_detail_borde_id_key"
    },
    borde_checkin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    borde_checkout: {
      type: DataTypes.DATE,
      allowNull: true
    },
    borde_adults: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    borde_kids: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    borde_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    borde_extra: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    borde_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    borde_tax: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    borde_subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    borde_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    }
  }, {
    sequelize,
    tableName: 'booking_order_detail',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "booking_order_detail_borde_id_key",
        unique: true,
        fields: [
          { name: "borde_id" },
        ]
      },
      {
        name: "booking_order_detail_border_boor_id_key",
        unique: true,
        fields: [
          { name: "border_boor_id" },
        ]
      },
      {
        name: "pk_boor_borde_id",
        unique: true,
        fields: [
          { name: "border_boor_id" },
          { name: "borde_id" },
        ]
      },
    ]
  });
};
