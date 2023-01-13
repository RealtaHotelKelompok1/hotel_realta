const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_order_detail', {
    wode_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wode_task_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wode_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    wode_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wode_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wode_notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    wode_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_id'
      }
    },
    wode_seta_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'service_task',
        key: 'seta_id'
      }
    },
    wode_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    },
    wode_woro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'work_orders',
        key: 'woro_id'
      }
    }
  }, {
    sequelize,
    tableName: 'work_order_detail',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "work_order_detail_pkey",
        unique: true,
        fields: [
          { name: "wode_id" },
        ]
      },
    ]
  });
};
