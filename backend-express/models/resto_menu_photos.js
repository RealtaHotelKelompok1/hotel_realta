const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resto_menu_photos', {
    remp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    remp_thumbnail_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    remp_photo_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    remp_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    remp_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remp_reme_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'resto_menus',
        key: 'reme_id'
      }
    }
  }, {
    sequelize,
    tableName: 'resto_menu_photos',
    schema: 'resto',
    timestamps: false,
    indexes: [
      {
        name: "pk_remp_id",
        unique: true,
        fields: [
          { name: "remp_id" },
        ]
      },
    ]
  });
};
