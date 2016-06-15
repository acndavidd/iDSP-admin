import {Injectable} from 'angular2/core';

@Injectable ()
export class DashboardService {
    vSalesOrderData = [
        {
            OrderNo: '12345',
            OrderCreationDate: '2016-05-18 13:00',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
            RetailerName: 'Gloria Cell',
            TotalAmount: '2,000 ₱',
            TransferLoad: '500 ₱',
            PhysicalOrder: '1,500 ₱',
        },
        {
            OrderNo: '12346',
            OrderCreationDate: '2016-05-18 14:00',
            DSPName: 'Surya Santoso',
            DSPMIN: '9999000001',
            RetailerName: 'Bird Cell ',
            TotalAmount: '2,000 ₱',
            TransferLoad: '1,000 ₱',
            PhysicalOrder: '1,000 ₱',
        },
        {
            OrderNo: '12347',
            OrderCreationDate: '2016-05-18 15:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'Rose Cell',
            TotalAmount: '5,500 ₱',
            TransferLoad: '2,000 ₱',
            PhysicalOrder: '3,500 ₱',
        },
        {
            OrderNo: '12348',
            OrderCreationDate: '2016-05-18 16:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'ABC Cell ',
            TotalAmount: '4,000 ₱',
            TransferLoad: '1,500 ₱',
            PhysicalOrder: '2,500 ₱',
        },
        {
            OrderNo: '12349',
            OrderCreationDate: '2016-05-18 17:00',
            DSPName: 'Agnes Saraswati',
            DSPMIN: '9999000002',
            RetailerName: 'DEF Cell ',
            TotalAmount: '4,500 ₱',
            TransferLoad: '2,500 ₱',
            PhysicalOrder: '1,500 ₱',
        }
    ];

    getSalesOrderList() {
        return this.vSalesOrderData;
    }
}