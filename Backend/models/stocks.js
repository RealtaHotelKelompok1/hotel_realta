const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocks', {
    stock_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stock_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stock_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stock_quantity: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    stock_reorder_point: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    stock_used: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    stock_scrap: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    stock_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    stock_standar_cost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    stock_size: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    stock_color: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    stock_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stocks',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "stock_id_pk",
        unique: true,
        fields: [
          { name: "stock_id" },
        ]
      },
    ]
  });
};
