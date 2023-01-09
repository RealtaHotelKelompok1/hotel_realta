const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resto_menus', {
    reme_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    },
    reme_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "resto_menus_reme_id_key"
    },
    reme_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    reme_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reme_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    reme_status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    reme_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resto_menus',
    schema: 'resto',
    timestamps: false,
    indexes: [
      {
        name: "pk_resto_menus",
        unique: true,
        fields: [
          { name: "reme_id" },
          { name: "reme_faci_id" },
        ]
      },
      {
        name: "resto_menus_reme_id_key",
        unique: true,
        fields: [
          { name: "reme_id" },
        ]
      },
    ]
  });
};
