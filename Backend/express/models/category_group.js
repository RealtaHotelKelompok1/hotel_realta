const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_group', {
    cagro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cagro_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "category_group_cagro_name_key"
    },
    cagro_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cagro_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cagro_icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cagro_icon_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'category_group',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "cagro_id_pk",
        unique: true,
        fields: [
          { name: "cagro_id" },
        ]
      },
      {
        name: "category_group_cagro_name_key",
        unique: true,
        fields: [
          { name: "cagro_name" },
        ]
      },
    ]
  });
};
