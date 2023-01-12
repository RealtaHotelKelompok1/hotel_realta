const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facilities', {
    faci_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    faci_name: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    faci_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    faci_max_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    faci_measure_unit: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    faci_room_number: {
      type: DataTypes.STRING(6),
      allowNull: true,
      unique: "facilities_faci_room_number_key"
    },
    faci_startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faci_endate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faci_low_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faci_hight_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faci_rate_price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faci_discount: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faci_tax_rate: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    faci_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    faci_cagro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category_group',
        key: 'cagro_id'
      }
    },
    faci_hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hotels',
        key: 'hotel_id'
      }
    }
  }, {
    sequelize,
    tableName: 'facilities',
    schema: 'hotel',
    timestamps: false,
    indexes: [
      {
        name: "faci_id_pk",
        unique: true,
        fields: [
          { name: "faci_id" },
        ]
      },
      {
        name: "facilities_faci_room_number_key",
        unique: true,
        fields: [
          { name: "faci_room_number" },
        ]
      },
    ]
  });
};
