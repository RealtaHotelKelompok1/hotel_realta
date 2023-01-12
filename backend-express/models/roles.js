const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(35),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_role_id",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
