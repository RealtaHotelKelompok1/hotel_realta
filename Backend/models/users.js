const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_full_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    user_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    user_company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_phone_number: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "u_user_phone_number"
    },
    user_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_user_id",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "u_user_phone_number",
        unique: true,
        fields: [
          { name: "user_phone_number" },
        ]
      },
    ]
  });
};
