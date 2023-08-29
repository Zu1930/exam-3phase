'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {}
  }
  Album.init(
    {
      poster: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      desription: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      isListened: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Album',
    }
  );
  return Album;
};
