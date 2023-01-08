const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_menu_detail', {
    omde_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orme_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    orme_qty: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    orme_subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    orme_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    omde_orme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'order_menus',
        key: 'orme_id'
      }
    },
    omde_reme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'resto_menus',
        key: 'reme_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_menu_detail',
    schema: 'resto',
    timestamps: false,
    indexes: [
      {
        name: "pk_omde_id",
        unique: true,
        fields: [
          { name: "omde_id" },
        ]
      },
    ]
  });
};
