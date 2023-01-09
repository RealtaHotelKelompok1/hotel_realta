const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotels', {
    hotel_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hotel_name: {
      type: DataTypes.STRING(85),
      allowNull: true
    },
    hotel_description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    hotel_rating_star: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    hotel_phonenumber: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    hotel_modified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hotel_addr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    }
  }, {
    sequelize,
    tableName: 'hotels',
    schema: 'hotel',
    timestamps: false,
    indexes: [
      {
        name: "hotel_id_pk",
        unique: true,
        fields: [
          { name: "hotel_id" },
        ]
      },
    ]
  });
};
