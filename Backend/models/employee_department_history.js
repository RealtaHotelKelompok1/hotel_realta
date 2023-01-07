const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_department_history', {
    edhi_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    edhi_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_id'
      }
    },
    edhi_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    edhi_dept_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'dept_id'
      }
    },
    edhi_shift_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'shift',
        key: 'shift_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee_department_history',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "employee_department_history_pkey",
        unique: true,
        fields: [
          { name: "edhi_id" },
          { name: "edhi_emp_id" },
        ]
      },
    ]
  });
};
