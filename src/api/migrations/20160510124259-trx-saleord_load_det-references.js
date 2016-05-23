'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [ 
        queryInterface
        .changeColumn('trx_saleord_load_det',
        'order_id',
          {
            type: Sequelize.STRING,
            references: {
              model: 'trx_sales_order',
              key: 'order_id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
          }
        )
    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      //queryInterface.removeColumn('trx_remittance','dsp_id')
        queryInterface.sequelize.query('ALTER TABLE trx_saleord_load_det DROP CONSTRAINT order_id_foreign_idx')
    ];
  }
};
