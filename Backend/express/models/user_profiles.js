const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_profiles', {
    uspro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uspro_national_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    uspro_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    uspro_job_title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    uspro_marital_status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    uspro_gender_: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    uspro_addr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'address',
        key: 'addr_id'
      }
    },
    uspro_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_profiles',
    schema: 'users',
    timestamps: false,
    indexes: [
      {
        name: "pk_uspro_id",
        unique: true,
        fields: [
          { name: "uspro_id" },
        ]
      },
    ]
  });
};
