'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Singer extends Model {
    static associate(models) {}
  }
  Singer.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Singer',
    }
  );
  return Singer;
};
