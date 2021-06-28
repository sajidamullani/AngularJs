'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('books', [{
                bookname: "Complete Java",
                authorname: "James Gosslin",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                bookname: "CPP",
                authorname: "Denis rities",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);

    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};