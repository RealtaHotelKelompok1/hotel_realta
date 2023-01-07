const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    memb_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    memb_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'members',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "memb_name",
        unique: true,
        fields: [
          { name: "memb_name" },
        ]
      },
    ]
  });
};
