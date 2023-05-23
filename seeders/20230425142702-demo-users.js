module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Fabio Silva Martins Junior',
      email: 'fabiomartiins45@gmail.com',
      password: '102030',
      phone: '(79) 99817-8059',
      address: 'Rua Dr Armando Hora de Mesquita',
      number: '2229',
      neighborhood: 'Centro',
      cep: '49400-000',
      city: 'Lagarto',
      state: 'Sergipe',
      date_of_birth: '1999-04-29',
      image: 'fsagafhol',
      createdAt: '2020-01-01 10:10:10',
      updatedAt: '2020-01-01 10:10:10'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
