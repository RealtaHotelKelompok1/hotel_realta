const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_accounts', {
    usac_entity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'entity',
        key: 'entity_id'
      }
    },
    usac_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    usac_account_number: {
      type: DataTypes.STRING(25),
      allowNull: true,
      unique: "user_accounts_usac_account_number_key"
    },
    usac_saldo: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    usac_type: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usac_expmonth: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    usac_expyear: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    usac_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_accounts',
    schema: 'payment',
    timestamps: false,
    indexes: [
      {
        name: "user_accounts_pk",
        unique: true,
        fields: [
          { name: "usac_entity_id" },
          { name: "usac_user_id" },
        ]
      },
      {
        name: "user_accounts_usac_account_number_key",
        unique: true,
        fields: [
          { name: "usac_account_number" },
        ]
      },
    ]
  });
};
