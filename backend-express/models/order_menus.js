const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_menus', {
    orme_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orme_order_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    orme_order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    orme_total_item: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    orme_total_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    orme_total_amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    orme_pay_type: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    orme_cardnumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    orme_is_paid: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    orme_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    orme_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_menus',
    schema: 'resto',
    timestamps: false,
    indexes: [
      {
        name: "pk_orme_id",
        unique: true,
        fields: [
          { name: "orme_id" },
        ]
      },
    ]
  });
};
