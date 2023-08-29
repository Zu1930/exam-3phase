'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const albumsData = [
      {
        poster: '/letItBeet.jpeg',
        desription:
          'let it Beet - Восьмой британский и десятый американский студийный альбом рок-группы Rolling Stones, изданный в декабре 1969 года.',
        isListened: false,
      },
      {
        poster: '/WhosNext.jpeg',
        desription:
          "Who's Next - Пятый студийный альбом британской рок-группы The Who, выпущенный 14 августа 1971 года. Материал для этой пластинки был позаимствован из незаконченного проекта — Lifehouse, мультимедийной рок-оперы, которую Пит Таунсенд задумывал как продолжение предыдущего диска группы — Tommy.",
        isListened: false,
      },
      {
        poster: '/Peppers.jpeg',
        desription:
          "Sgt. Pepper's Lonely Hearts Club Band — восьмой студийный альбом британской рок-группы The Beatles. Альбом был записан в течение 129-дневного периода, начавшегося 6 декабря 1966 года, и выпущен 26 мая 1967 года в Великобритании, ",
        isListened: false,
      },
      {
        poster: '/TheGreatTwentyEight',
        desription:
          'The Great Twenty-Eight — сборник лучших песен американского исполнителя рок-н-ролла Чака Берри, выпущенный в 1982 году на лейбле Chess Records.',
        isListened: false,
      },
      {
        poster: '/petSounds.jpeg',
        desription:
          'Pet Sounds — одиннадцатый студийный альбом американской рок-группы The Beach Boys. Релиз альбома состоялся 16 мая 1966 года. Он радикально отличается от всех предыдущих пластинок группы: вместо привычных рок-н-ролла и сёрф-рока, на пластинке доминирует стиль барокко-поп, а тексты песен имеют интроспективный характер.',
        isListened: false,
      },
    ];
    const albums = albumsData.map((album) => ({
      ...album,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Albums', albums);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums');
  },
};
