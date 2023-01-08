const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_photo', {
    spho_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spho_thumbnail_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spho_photo_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spho_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    spho_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    spho_stock_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stocks',
        key: 'stock_id'
      }
    }
  }, {
    sequelize,
    tableName: 'stock_photo',
    schema: 'purchasing',
    timestamps: false,
    indexes: [
      {
        name: "spho_id_pk",
        unique: true,
        fields: [
          { name: "spho_id" },
        ]
      },
    ]
  });
};
