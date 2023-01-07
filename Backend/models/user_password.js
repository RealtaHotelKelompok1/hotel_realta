const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_password', {
    uspa_user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    uspa_passwordhash: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    uspa_passwordsalt: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_password',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_uspa_user_id",
        unique: true,
        fields: [
          { name: "uspa_user_id" },
        ]
      },
    ]
  });
};
