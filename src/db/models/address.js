'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User)
    }
  };
  Address.init({
    city: { type: DataTypes.STRING, unique: true, allowNull: false },
    street: { type: DataTypes.STRING, unique: true, allowNull: false },
    building: { type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};