const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    usro_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    usro_role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'roles',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_usro_user_id",
        unique: true,
        fields: [
          { name: "usro_user_id" },
          { name: "usro_role_id" },
        ]
      },
    ]
  });
};
