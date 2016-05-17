'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('mst_target', {
      target_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dsp_id: {
        type: Sequelize.STRING(20)
      },
      product_id: {
        type: Sequelize.STRING(20)
      },
      sub_category_id:{
        type : Sequelize.STRING(20)
      },
      target_month: {
        type: Sequelize.INTEGER
      },
      target_year: {
        type: Sequelize.INTEGER
      },
      target_qty: {
        type: Sequelize.INTEGER
      },
       sub_category_id: {
        type: Sequelize.STRING(20)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('mst_target');
  }
};