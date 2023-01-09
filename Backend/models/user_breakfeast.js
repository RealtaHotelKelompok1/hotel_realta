const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_breakfeast', {
    usbr_borde_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'booking_order_detail',
        key: 'borde_id'
      }
    },
    usbr_modified_date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    usbr_total_vacant: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_breakfeast',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "pk_borde_modified_id",
        unique: true,
        fields: [
          { name: "usbr_borde_id" },
          { name: "usbr_modified_date" },
        ]
      },
    ]
  });
};
