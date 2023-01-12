const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_gateaway', {
    paga_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    paga_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "payment_gateaway_paga_code_key"
    },
    paga_name: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_gateaway_paga_name_key"
    },
    paga_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_gateaway',
    schema: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "payment_gateaway_paga_code_key",
        unique: true,
        fields: [
          { name: "paga_code" },
        ]
      },
      {
        name: "payment_gateaway_paga_name_key",
        unique: true,
        fields: [
          { name: "paga_name" },
        ]
      },
      {
        name: "payment_gateaway_pkey",
        unique: true,
        fields: [
          { name: "paga_entity_id" },
        ]
      },
    ]
  });
};
