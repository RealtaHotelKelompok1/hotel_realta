const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_orders', {
    woro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    woro_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    woro_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    woro_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'work_orders',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "work_orders_pkey",
        unique: true,
        fields: [
          { name: "woro_id" },
        ]
      },
    ]
  });
};
