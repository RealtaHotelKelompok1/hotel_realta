const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_order_header', {
    pohe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pohe_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "purchase_order_header_pohe_number_key"
    },
    pohe_status: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pohe_order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pohe_subtotal: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pohe_tax: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pohe_total_amount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pohe_refund: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    pohe_arrival_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pohe_pay_tipe: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pohe_emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'emp_id'
      }
    },
    pohe_vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'vendor',
        key: 'vendor_id'
      }
    }
  }, {
    sequelize,
    tableName: 'purchase_order_header',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "pohe_id_pk",
        unique: true,
        fields: [
          { name: "pohe_id" },
        ]
      },
      {
        name: "purchase_order_header_pohe_number_key",
        unique: true,
        fields: [
          { name: "pohe_number" },
        ]
      },
    ]
  });
};
