'use strict';

const { Op } = require('sequelize')
const { Sequelize } = require('../models')

const addresses = [
  { city: 'Zaporigga', street: 'Zaporizka', building: 10, created_at: Sequelize.literal('CURRENT_TIMESTAMP'), updated_at: Sequelize.literal('CURRENT_TIMESTAMP') }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Address', addresses)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Address', {
      city: {
        [Op.in]: addresses.map(it => it.city)
      },
      street: {
        [Op.in]: addresses.map(it => it.street)
      },
      building: {
        [Op.in]: addresses.map(it => it.building)
      }
    })
  }
};
