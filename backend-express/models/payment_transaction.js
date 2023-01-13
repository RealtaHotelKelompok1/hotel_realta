const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_transaction', {
    patr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patr_trx_number: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_transaction_patr_trx_number_key"
    },
    patr_debet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    patr_credit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    patr_type: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    patr_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patr_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    patr_order_number: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    patr_trx_number_ref: {
      type: DataTypes.STRING(55),
      allowNull: true,
      unique: "payment_transaction_patr_trx_number_ref_key"
    },
    patr_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patr_target_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patr_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment_transaction',
    schema: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "payment_transaction_patr_trx_number_key",
        unique: true,
        fields: [
          { name: "patr_trx_number" },
        ]
      },
      {
        name: "payment_transaction_patr_trx_number_ref_key",
        unique: true,
        fields: [
          { name: "patr_trx_number_ref" },
        ]
      },
      {
        name: "payment_transaction_pkey",
        unique: true,
        fields: [
          { name: "patr_id" },
        ]
      },
    ]
  });
};
