const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('policy_category_group', {
    poca_poli_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'policy',
        key: 'poli_id'
      }
    },
    poca_cagro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'category_group',
        key: 'cagro_id'
      }
    }
  }, {
    sequelize,
    tableName: 'policy_category_group',
    schema: 'master',
    timestamps: false,
    indexes: [
      {
        name: "poca_poli_id_pk",
        unique: true,
        fields: [
          { name: "poca_poli_id" },
          { name: "poca_cagro_id" },
        ]
      },
    ]
  });
};
