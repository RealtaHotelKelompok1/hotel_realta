const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility_photos', {
    fapho_faci_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'facilities',
        key: 'faci_id'
      }
    },
    fapho_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fapho_thumbnail_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fapho_photo_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fapho_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fapho_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fapho_modifield_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'facility_photos',
    schema: 'hotel',
    timestamps: false,
    indexes: [
      {
        name: "facility_photos_pk",
        unique: true,
        fields: [
          { name: "fapho_faci_id" },
          { name: "fapho_id" },
        ]
      },
    ]
  });
};
