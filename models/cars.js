'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cars.init({
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    brand: DataTypes.STRING,
    purchase_date: DataTypes.DATE,
    scale: DataTypes.STRING,
    price: DataTypes.FLOAT,
    favorite: DataTypes.INTEGER,
    image1: DataTypes.BLOB('long'),
    image2: DataTypes.BLOB('long'),
    image3: DataTypes.BLOB('long'),
    image4: DataTypes.BLOB('long'),
    image5: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'cars',
  });
  return cars;
};