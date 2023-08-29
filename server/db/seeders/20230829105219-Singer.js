'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const singersData = [
      {
        name: 'Владимир Захаров',
        img: '/vladimirZaharov.jpeg',
      },
      {
        name: 'Morten Harket',
        img: '/mortenHarket.jpeg',
      },
      {
        name: 'David Bowie',
        img: '/davidBowie.jpeg',
      },
      {
        name: 'Eminem',
        img: '/eminem.jpeg',
      },
      {
        name: 'Алла Пугачёва',
        img: '/Alla.jpeg',
      },
    ];
    const singers = singersData.map((singer) => ({
      ...singer,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Singers', singers);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Singers');
  },
};
