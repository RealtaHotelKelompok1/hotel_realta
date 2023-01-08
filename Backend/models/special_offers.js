const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('special_offers', {
    spof_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    spof_name: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    spof_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    spof_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    spof_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    spof_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spof_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    spof_min_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spof_max_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spof_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'special_offers',
    schema: 'booking',
    timestamps: false,
    indexes: [
      {
        name: "pk_spof_id",
        unique: true,
        fields: [
          { name: "spof_id" },
        ]
      },
    ]
  });
};
