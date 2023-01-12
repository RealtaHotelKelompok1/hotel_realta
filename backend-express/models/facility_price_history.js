const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility_price_history', {
    faph_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    },
    faph_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    faph_startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faph_enddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faph_low_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faph_high_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faph_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faph_tax_rate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faph_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faph_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'facility_price_history',
    schema: 'hotel',
    timestamps: false,
    indexes: [
      {
        name: "facility_price_history_pk",
        unique: true,
        fields: [
          { name: "faph_faci_id" },
          { name: "faph_id" },
        ]
      },
    ]
  });
};
