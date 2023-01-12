const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    emp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_national_id: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "employee_emp_national_id_key"
    },
    emp_birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_marital_status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    emp_gender: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    emp_hire_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_salaried_flag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    emp_vacation_hours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_sickleave_hours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_current_flag: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    emp_photo: {
      type: DataTypes.STRING(225),
      allowNull: true
    },
    emp_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emp_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_id'
      }
    },
    emp_joro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'job_role',
        key: 'joro_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "employee_emp_national_id_key",
        unique: true,
        fields: [
          { name: "emp_national_id" },
        ]
      },
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "emp_id" },
        ]
      },
    ]
  });
};
