const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('special_offer_coupons', {
    soco_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    soco_borde_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'booking_order_detail',
        key: 'borde_id'
      }
    },
    soco_spof_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'special_offers',
        key: 'spof_id'
      }
    }
  }, {
    sequelize,
    tableName: 'special_offer_coupons',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "pk_soco_id",
        unique: true,
        fields: [
          { name: "soco_id" },
        ]
      },
    ]
  });
};
