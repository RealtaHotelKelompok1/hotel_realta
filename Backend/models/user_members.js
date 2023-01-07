const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_members', {
    usme_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    usme_memb_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'members',
        key: 'memb_name'
      }
    },
    usme_promote_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usme_points: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usme_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_members',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_usme_user_id",
        unique: true,
        fields: [
          { name: "usme_user_id" },
          { name: "usme_memb_name" },
        ]
      },
    ]
  });
};
