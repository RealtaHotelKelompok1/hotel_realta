const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price_items', {
    prit_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prit_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "price_items_prit_name_key"
    },
    prit_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    prit_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prit_type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    prit_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'price_items',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "price_items_prit_name_key",
        unique: true,
        fields: [
          { name: "prit_name" },
        ]
      },
      {
        name: "prit_id_pk",
        unique: true,
        fields: [
          { name: "prit_id" },
        ]
      },
    ]
  });
};
