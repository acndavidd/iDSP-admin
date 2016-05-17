'use strict';
module.exports = function(sequelize, DataTypes) {
  var trx_saleord_load_det = sequelize.define('trx_saleord_load_det', {
    order_det_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sub_category_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    amount: DataTypes.DECIMAL(10,2),
    rrn: DataTypes.STRING(50),
    status: DataTypes.STRING(1)
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        trx_saleord_load_det.belongsTo(models.trx_sales_order,{as: 'SalesOrder', foreignKey : 'order_id'});
        trx_saleord_load_det.belongsTo(models.mst_prod_sub_cat,{as: 'LoadOrder', foreignKey : 'sub_category_id'});
      },
      getAssociatedModels : function(){
        return ['trx_sales_order','mst_prod_sub_cat'];
        //return '';
      }
    }
  });
  return trx_saleord_load_det;
};