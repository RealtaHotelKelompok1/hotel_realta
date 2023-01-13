const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_pay_history', {
    ephi_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'emp_id'
      }
    },
    ephi_rate_change_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    ephi_rate_salary: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    ephi_pay_frequence: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ephi_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_pay_history',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "employee_pay_history_pkey",
        unique: true,
        fields: [
          { name: "ephi_emp_id" },
          { name: "ephi_rate_change_date" },
        ]
      },
    ]
  });
};
