import {Injectable} from 'angular2/core';

@Injectable ()
export class ProductsService {
    vProductData = [
        {
            Brand: 'Smart',
            Category: 'SIM',
            SubCategory: 'SmartLoad',
            ProductID: 'SKU1',
            Description: 'SKU1 is xxxx',
            UnitPrice: '5,000 ₱'
        },
        {
            Brand: 'Smart',
            Category: 'Broadband',
            SubCategory: 'Xload',
            ProductID: 'SKU2',
            Description: 'SKU2 is xxx',
            UnitPrice: '1,000 ₱'
        },
        {
            Brand: 'Sun',
            Category: 'SIM',
            SubCategory: 'SmartLoad',
            ProductID: 'SKU1',
            Description: 'SKU1 is xxxx',
            UnitPrice: '3,000 ₱'
        },
        {
            Brand: 'Sun',
            Category: 'SIM',
            SubCategory: 'SmartLoad',
            ProductID: 'SKU1',
            Description: 'SKU1 is xxxx',
            UnitPrice: '1,000 ₱'
        },
        {
            Brand: 'Sun',
            Category: 'SIM',
            SubCategory: 'SmartLoad',
            ProductID: 'SKU1',
            Description: 'SKU1 is xxxx',
            UnitPrice: '1,000 ₱'
        }
    ];

    getProductList() {
        return this.vProductData;
    }
}