const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_orders', {
    boor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boor_order_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "booking_orders_boor_order_number_key"
    },
    boor_order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    boor_arrival_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    boor_total_room: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    boor_total_guest: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    boor_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boor_total_tax: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boor_total_amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boor_down_payment: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    boor_pay_type: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    boor_is_paid: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    boor_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    boor_cardnumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    boor_member_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    boor_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    boor_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    boor_hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hotels',
        key: 'hotel_id'
      }
    }
  }, {
    sequelize,
    tableName: 'booking_orders',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "booking_orders_boor_order_number_key",
        unique: true,
        fields: [
          { name: "boor_order_number" },
        ]
      },
      {
        name: "pk_boor_id",
        unique: true,
        fields: [
          { name: "boor_id" },
        ]
      },
    ]
  });
};
