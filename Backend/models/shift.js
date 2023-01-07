const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift', {
    shift_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shift_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "shift_shift_name_key"
    },
    shift_start_time: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: "shift_shift_start_time_key"
    },
    shift_end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: "shift_shift_end_time_key"
    }
  }, {
    sequelize,
    tableName: 'shift',
    schema: 'humanresource',
    timestamps: false,
    indexes: [
      {
        name: "shift_pkey",
        unique: true,
        fields: [
          { name: "shift_id" },
        ]
      },
      {
        name: "shift_shift_end_time_key",
        unique: true,
        fields: [
          { name: "shift_end_time" },
        ]
      },
      {
        name: "shift_shift_name_key",
        unique: true,
        fields: [
          { name: "shift_name" },
        ]
      },
      {
        name: "shift_shift_start_time_key",
        unique: true,
        fields: [
          { name: "shift_start_time" },
        ]
      },
    ]
  });
};
