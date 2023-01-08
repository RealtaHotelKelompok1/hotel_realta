const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotel_reviews', {
    hore_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hore_user_review: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    hore_rating: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hore_created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hore_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    hore_hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hotels',
        key: 'hotel_id'
      }
    }
  }, {
    sequelize,
    tableName: 'hotel_reviews',
    schema: 'hotel',
    timestamps: false,
    indexes: [
      {
        name: "hore_id_pk",
        unique: true,
        fields: [
          { name: "hore_id" },
        ]
      },
    ]
  });
};
